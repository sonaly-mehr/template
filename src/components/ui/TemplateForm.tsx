import React from "react";

const TemplateForm = () => {
  return (
    <form className="w-full mt-0">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 mb-2">
        <input
          type="text"
          className="w-full border-b-[1.5px] border-solid border-[gray] inline-block pb-4 px-5 outline-none font-cormorant text-base placeholder:text-[gray]"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="w-full border-b-[1.5px] border-solid border-[gray] inline-block pb-4 px-5 outline-none font-cormorant text-base placeholder:text-[gray]"
          placeholder="Email Address"
        />
      </div>
      <div className="flex gap-2 mt-6 mb-9 items-center">
        <div className="relative flex">
          <input
            type="checkbox"
            name=""
            id=""
            className="peer cursor-pointer appearance-none relative w-4 h-4 bg-transparent  border border-[gray] transition-all checked:bg-[#2374FF]"
          />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <label
          htmlFor=""
          className="font-cormorant text-base text-dark leading-[19.38px]"
        >
          I have read and understand the Privacy and Cookies Policy and agree to
          receive personalised commercial communications from Rare Stationery by
          email.
        </label>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="uppercase text-white text-center text-sm tracking-[0.13em] bg-primary w-[217px] h-[56px]"
        >
          get the template
        </button>
      </div>
    </form>
  );
};

export default TemplateForm;
