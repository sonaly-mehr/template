import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <div className="w-full bg-[#F5F5F5] pt-24 pb-24 lg:pt-28 lg:pb-36">
      <div className="container flex flex-col md:flex-row md:justify-between gap-14 lg:gap-8 items-center">
        <div className="w-full md:w-auto md:flex-1">
          <div className="relative md:w-fit">
            <Image
              src="/images/card2.png"
              alt=""
              width={200}
              height={200}
              className="w-full h-auto md:w-80 md:h-96 object-cover"
            />
            <Image
              src="/images/card.png"
              alt=""
              width={160}
              height={200}
              className="w-36 h-32 lg:w-40 lg:h-52 object-cover absolute right-0 lg:-right-24 -bottom-10"
            />
          </div>
        </div>
        <div className="md:flex-1">
          <h5 className="uppercase text mb-5">OUR MISSION</h5>
          <div className="flex flex-col gap-3.5 xl:w-2/3">
            <h4 className="font-bonaNova font-normal text-xl leading-10 text-[#201006] -mb-1">
              Lorem ipsum dolor{" "}
              <span className="font-homemadeApple">sit amet.</span>
            </h4>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
