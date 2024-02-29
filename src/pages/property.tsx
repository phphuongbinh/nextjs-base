import { LayoutMain } from "@/components/layouts";
import PropertyList from "@/modules/property/PropertyList";
import Link from "next/link";
import React from "react";

const PropertyPage = () => {
  return (
    <LayoutMain>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-primaryText text-[25px]">
          Property List
        </h1>
        <Link
          href="/property/create"
          className="flex items-center justify-between px-5 py-4 rounded-[10px] bg-primary text-white font-medium leading-none"
        >
          + Add Property
        </Link>
      </div>
      <div className="p-5 bg-white rounded-2xl ">
        <div aria-label="filter"></div>
        <PropertyList></PropertyList>

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

export default PropertyPage;
