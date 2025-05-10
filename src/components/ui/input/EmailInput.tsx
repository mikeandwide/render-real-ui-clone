
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface EmailInputProps {
  register: UseFormRegister<any>;
}

export const EmailInput: React.FC<EmailInputProps> = ({ register }) => {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <label className="text-sm text-black font-medium leading-[19px]">
        Email Address
      </label>
      <div className="flex w-full">
        <input
          type="email"
          placeholder="Enter your mail id"
          className="flex-1 text-sm border px-2.5 py-5 border-black border-r"
          {...register('email', { required: true })}
        />
        <button
          type="submit"
          className="flex items-center border cursor-pointer p-4 border-black hover:bg-gray-100 transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 16.8002L18 12.0002M18 12.0002L13 7.2002M18 12.0002L6 12.0002"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
