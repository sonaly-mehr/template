import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div className="container mx-auto bg-white py-20 mt-10 lg:mt-0">
      <div>
        <h5 className="uppercase text mb-5">LOREM IPSUM</h5>
        <div className="flex flex-col md:flex-row md:justify-between gap-5">
          <p className="text">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor.
          </p>
          <p className="text">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>

      <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Image
          src="/images/card.png"
          alt=""
          width={350}
          height={254}
          className="w-full h-[45vh] lg:h-[38vh] object-cover"
        />
        <Image
          src="/images/card.png"
          alt=""
          width={350}
          height={254}
          className="w-full h-[45vh] lg:h-[38vh] object-cover"
        />
        <Image
          src="/images/card.png"
          alt=""
          width={350}
          height={254}
          className="w-full h-[45vh] lg:h-[38vh] object-cover"
          // h-[15.80rem]
        />
      </div>
    </div>
  );
};

export default Cards;
