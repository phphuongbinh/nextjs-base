import { IconBeds } from "@/components/icons";
import IconLocation from "@/components/icons/IconLocation";
import IconPlus from "@/components/icons/IconPlus";
import { Skeleton } from "@/components/loading";
import { PropertyItemData } from "@/types/property.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PropertyItemProps {
  item: PropertyItemData;
}

const PropertyItem = ({ item }: PropertyItemProps) => {
  return (
    <Link
      href={{
        pathname: "/property/[id]",
        query: { id: item.id },
      }}
      className="flex gap-2 "
    >
      <div className="relative">
        <Image
          src={item.image && item.image.length > 0 ? item.image[0] : ""}
          alt="house"
          width={200}
          height={125}
          className="rounded-xl object-cover flex-shrink-0 h-[125px]"
        ></Image>
      </div>
      <div className="flex-1">
        <span className="px-c10 py-2 text-xs text-primary rounded-[5px] font-semibold bg-purpleda inline-block">
          ${item.price}
        </span>
        <h3 className="font-semibold text-primaryText mt-3 mb-1">
          {item.title}
        </h3>
        <div className="flex items-center text-gray80 mb-3 gap-1">
          <IconLocation />
          <span className=" text-sm">{item.address}</span>
        </div>
        <div className="gap-c10 flex items-center">
          <div className="flex gap-2 items-center">
            <span className="text-gray80">
              <IconBeds />
            </span>
            <span className="text-primaryText font-medium">
              {item.facility?.beds} Beds
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-gray80">
              <IconPlus />
            </span>
            <span className="text-primaryText font-medium">
              {item.facility?.area}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const PropertyItemLoading = () => {
  return (
    <div className="flex gap-2 ">
      <div className="relative">
        <Skeleton className="w-[200px] h-[125px] rounded-xl"></Skeleton>
      </div>
      <div className="flex-1">
        <Skeleton className="w-[50px] h-[30px] mb-3"></Skeleton>
        <Skeleton className="w-full h-3 mb-3"></Skeleton>
        <div className="flex items-center text-gray80 mb-3 gap-1">
          <IconLocation />
          <Skeleton className="w-20 h-3"></Skeleton>
        </div>
        <div className="gap-c10 flex items-center">
          <div className="flex gap-2 items-center">
            <span className="text-gray80">
              <IconBeds />
            </span>
            <Skeleton className="w-5 h-3"></Skeleton>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-gray80">
              <IconPlus />
            </span>
            <Skeleton className="w-5 h-3"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
