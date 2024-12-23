import React, { useState } from "react";

export default function StepOne({ onNext }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.match(/^[a-zA-Z]+$/)) {
      newErrors.firstName =
        "First name cannot contain special characters or numbers.";
    }
    if (!formData.lastName.match(/^[a-zA-Z]+$/)) {
      newErrors.lastName =
        "Last name cannot contain special characters or numbers.";
    }
    if (!formData.username.match(/^[a-zA-Z]+$/)) {
      newErrors.username =
        "This username is already taken. Please choose another one.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (validate()) {
      onNext(formData);
    }
  };

  return (
    <div className="w-[480px] h-[655px] bg-white p-6 rounded-[8px] shadow-lg text-black flex flex-col justify-between py-[32px]">
      <div>
        <img src="Logo3.png" className="w-[60px] h-[60px]" />
        <h2 className="text-2xl mb-4 font-semibold text-black">Join Us! 😎</h2>
        <p className="mb-6 text-gray-600">
          Please provide all current information accurately.
        </p>
        <div className="mb-4">
          <label className="block mb-1 text-black">
            First name
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Placeholder"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-black">
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Placeholder"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-black">
            Username <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Placeholder"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}
        </div>
      </div>
      <button
        onClick={handleNext}
        className="w-full bg-black text-white py-2 rounded disabled:opacity-50"
      >
        {"Continue 1/3 >"}
      </button>
    </div>
  );
}
