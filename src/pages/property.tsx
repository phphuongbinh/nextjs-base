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
        <div
          aria-label="pagination"
          className="flex items-center justify-between mt-6"
        >
          <div>Showing 1 to 10 Propertys</div>
          <div className="flex items-center gap-c10">
            <button className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center">
              1
            </button>
            <button className="w-9 h-9 rounded-lg text-gray80 flex items-center justify-center">
              2
            </button>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default property;
