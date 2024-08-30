"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { PRODUCTS } from "@/constants";

const Products = () => {
  return (
    <div className="relative pt-5 pb-16 lg:py-20 container">
      <h5 className="text mb-8">FOUNDER’S FAVOURITE</h5>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="gap-1.5">
          {PRODUCTS.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-[23%]">
              <div className="flex flex-col gap-4 h-full">
                <Image src={item?.img} alt="" className="w-full h-80 object-cover" width={200} height={320}/>
                <div className="flex flex-col flex-grow flex-1">
                  <div className="flex justify-between items-center">
                    <h6 className="text">{item?.name}</h6>
                    <span className="text">£{item?.price}</span>
                  </div>
                  <p className="text italic mt-1">{item?.descp}</p>
                </div>
                <div className="flex justify-center  items-end">
                <button className="  uppercase font-arial font-normal text-sm text-gray border-[1px] border-solid border-gray w-full h-12">
                  add to cart
                </button>
                </div>
              
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="right-12 -top-10" />
        <CarouselNext className="right-0 -top-10" />
      </Carousel>
    </div>
  );
};

export default Products;
