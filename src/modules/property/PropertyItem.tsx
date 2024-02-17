import { IconBed } from "@/components/icons";
import IconLocation from "@/components/icons/IconLocation";
import IconPlus from "@/components/icons/IconPlus";
import Image from "next/image";
import React from "react";

interface PropertyItemProps {
  children?: React.ReactNode;
}

const PropertyItem = ({ children }: PropertyItemProps) => {
  return (
    <div className="flex gap-2 ">
      <div className="relative">
        <Image
          src="https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="house"
          width={200}
          height={125}
          className="rounded-xl object-cover flex-shrink-0 h-[125px]"
        ></Image>
      </div>
      <div className="flex-1">
        <span className="px-c10 py-2 text-xs text-primary rounded-[5px] font-semibold bg-secondary inline-block">
          $7400
        </span>
        <h3 className="font-semibold text-primaryText mt-3 mb-1">
          Metro Jayakarta Hotel & Spa
        </h3>
        <div className="flex items-center text-gray80 mb-3">
          <IconLocation />
          <span className=" text-sm">North Carolina, USA</span>
        </div>
        <div className="gap-c10 flex">
          <div className="flex gap-2 items-center">
            <IconBed />
            <span>4 Beds</span>
          </div>
          <div className="flex gap-2 items-center">
            <IconPlus />
            <span>28M</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
