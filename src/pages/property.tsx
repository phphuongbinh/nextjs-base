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
      <PropertyList></PropertyList>
    </LayoutMain>
  );
};

export default PropertyPage;
