import Image from "next/image";
import { useState } from "react";

export default function StepThree({ onNext, onBack }) {
  const [imageDrop, setImageDrop] = useState(null);
  const [formData, setFormData] = useState({
    data: "",
    file: "",
  });

  const handleDrop = (event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const previewImage = URL.createObjectURL(file);

      console.log(typeof previewImage);
      setImageDrop(previewImage);
      setFormData(previewImage);
    }
  };

  return (
    <div className="w-[480px] h-[655px] bg-white p-6 rounded-[8px] shadow-lg text-black flex flex-col justify-around">
      <img src="Logo3.png" className="w-[60px] h-[60px]" />
      <h2 className="text-2xl mb-4 font-semibold">Join Us! 😎</h2>
      <p className="mb-6 text-gray-600">
        Please provide all current information accurately.
      </p>
      <h1>
        Date of birth <span className="text-red-500">*</span>
      </h1>
      <input
        type="date"
        className="w-[416px] h-[44px] border-[#CBD5E1] border-solid border-[1px] rounded-[8px]"
        value={formData.data}
        onChange={handleDrop}
      />
      <h2>
        Profile image <span className="text-red-500">*</span>
      </h2>
      <label>
        <input
          type="file"
          className=" hidden w-[416px] h-[180px] bg-[#7F7F80] rounded-[8px]"
          value={formData.image}
          onChange={handleDrop}
        />
        {imageDrop ? (
          <img src={imageDrop} className="w-[416px] h-[180px] rounded-[8px] " />
        ) : (
          <input
            type="file"
            className="w-[416px] h-[180px] bg-[#7F7F80] rounded-[8px]"
            value={formData.image}
            onChange={handleDrop}
          />
        )}
      </label>
      <div className="flex">
        <button
          onClick={onBack}
          className="bg-slate-600 w-[128px] h-[44px]  py-2 rounded disabled:opacity-50 text-black "
        >
          {"< back"}
        </button>
        <button
          onClick={onNext}
          className="w-[280px] h-[44px] bg-black text-white py-2 rounded disabled:opacity-50"
        >
          {"Submit 3/3 >"}
        </button>
      </div>
    </div>
  );
}
