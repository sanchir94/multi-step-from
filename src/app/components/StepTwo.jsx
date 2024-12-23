import React, { useState } from "react";

export default function StepTwo({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    Email: "",
    PhoneNumber: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.Email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.Email = "Please provide a valid Email address.";
    }

    if (!formData.PhoneNumber.match(/^\d{8,8}$/)) {
      newErrors.PhoneNumber = "Please enter a valid Phone number.";
    }

    if (!formData.Password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
    }

    if (formData.ConfirmPassword !== formData.Password) {
      newErrors.Password = "Password must include letters and numbers.";
      newErrors.ConfirmPassword = "Passwords do not match. Please try again.";
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
  const handlePrevious = () => {
    if (validate()) {
      onBack(formData);
    }
  };
  return (
    <div className="w-[480px] h-[655px] bg-white p-6 rounded-[8px] shadow-lg text-black">
      <img src="Logo3.png" className="w-[60px] h-[60px]" />
      <h2 className="text-2xl mb-4 font-semibold">Join Us! 😎</h2>
      <p className="mb-6 text-gray-600">
        Please provide all current information accurately.
      </p>
      <div className="mb-4">
        <label className="block mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Placeholder"
        />
        {errors.Email && <p className="text-red-500 text-sm">{errors.Email}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1">
          Phone number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="PhoneNumber"
          value={formData.PhoneNumber}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Placeholder"
        />
        {errors.PhoneNumber && (
          <p className="text-red-500 text-sm">{errors.PhoneNumber}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="Password"
          value={formData.Password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Placeholder"
        />
        {errors.Password && (
          <p className="text-red-500 text-sm">{errors.Password}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1">
          Confirm password <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="ConfirmPassword"
          value={formData.ConfirmPassword}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Placeholder"
        />
        {errors.ConfirmPassword && (
          <p className="text-red-500 text-sm">{errors.ConfirmPassword}</p>
        )}
      </div>
      <div className="flex">
        <button
          onClick={handlePrevious}
          className="bg-slate-600 w-[128px] h-[44px]  py-2 rounded disabled:opacity-50 text-black "
        >
          {"<back"}
        </button>
        <button
          onClick={handleNext}
          className="w-[280px] h-[44px] bg-black text-white py-2 rounded disabled:opacity-50"
        >
          {"Submit 2/3 >"}
        </button>
      </div>
    </div>
  );
}
