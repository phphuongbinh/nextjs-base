import { LayoutMain } from "@/components/layouts";
import PropertyItem from "@/modules/property/PropertyItem";
import React from "react";

const property = () => {
  return (
    <LayoutMain>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-primaryText text-[25px]">
          Property List
        </h1>
        <button className="flex items-center justify-between px-5 py-4 rounded-[10px] bg-primary text-white font-medium leading-none">
          + Add Property
        </button>
      </div>
      <div className="p-5 bg-white rounded-2xl ">
        <div aria-label="filter"></div>
        <div aria-label="list" className="grid grid-cols-2 gap-x-16 gap-y-6">
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <PropertyItem key={index}></PropertyItem>
            ))}
        </div>
        <div aria-label="pagination"></div>
      </div>
    </LayoutMain>
  );
};

export default property;
