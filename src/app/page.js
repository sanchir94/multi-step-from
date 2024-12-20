"use client";
import React, { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

export default function Page() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  const handleNext = (data) => {
    setUserData({ ...userData, ...data });
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setUserData({ ...userData, ...data });
    setStep(step - 1);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {step === 1 && <StepOne onNext={handleNext} />}
      {step === 2 && <StepTwo onNext={handleNext} onBack={handlePrevious} />}
      {step === 3 && <StepThree onNext={handleNext} onBack={handlePrevious} />}
      {step === 4 && (
        <div className="w-[480px] h-[193px] p-6 bg-white rounded-lg shadow-lg">
          <img src="Logo3.png" className="w-[60px] h-[60px]" />
          <h2 className="text-2xl mb-4 text-black">You’re All Set🔥</h2>
          <p className="text-gray-600">
            We have received your submission. Thank you!
          </p>
        </div>
      )}
    </div>
  );
}
