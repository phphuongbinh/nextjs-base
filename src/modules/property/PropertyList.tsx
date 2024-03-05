import React, { useState } from "react";
import PropertyItem, {
  PropertyItemLoading,
} from "@/modules/property/PropertyItem";
import { PropertyItemData } from "@/types/property.type";
import { getProperties } from "@/store/Properties.service";
import { useQuery } from "@tanstack/react-query";
import { IconSearch } from "@/components/icons";
import { Dropdown } from "@/components/dropdown";
import { statusData } from "@/constants/general.const";
import { TFilter } from "@/types/general.types";
import { debounce } from "lodash";

const PropertyList = () => {
  const [filter, setFilter] = useState<TFilter>({
    text: "",
    country: "",
    state: "",
    status: "",
    type: "",
  });
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties"],
    queryFn: () => getProperties({ text: filter.text }),
    staleTime: 1000 * 60 * 1,
  });
  const properties = data;
  const handleFilterProperty = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter({
        ...filter,
        text: e.target.value,
      });
    },
    50
  );

  if (error) return null;
  if (isLoading)
    return (
      <div aria-label="list" className="grid grid-cols-2 gap-x-16 gap-y-6">
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <PropertyItemLoading key={index}></PropertyItemLoading>
          ))}
      </div>
    );
  return (
    <div className="p-5 bg-white rounded-2xl ">
      <div aria-label="filter" className="flex gap-5 mb-6">
        <div className="rounded-lg p-2.5 gap-2.5 bg-grayf7 text-gray80 flex items-center basis-[229px]">
          <IconSearch />
          <input
            type="text"
            className="text-xs font-medium bg-transparent w-full outline-none"
            placeholder="Enter an address, city or Zip code"
            onChange={handleFilterProperty}
          />
        </div>
        <Dropdown data={statusData}></Dropdown>
        <Dropdown selected="Any type"></Dropdown>
        <Dropdown selected="All Countries"></Dropdown>
        <Dropdown selected="All States"></Dropdown>
        <button className="p-2.5 rounded-lg gap-2.5 text-gray80 font-medium text-xs flex items-center bg-grayf7">
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.59451 13.5H3C2.58579 13.5 2.25 13.1642 2.25 12.75C2.25 12.3358 2.58579 12 3 12H4.59451C4.92755 10.7061 6.10212 9.75 7.5 9.75C8.89788 9.75 10.0725 10.7061 10.4055 12H15C15.4142 12 15.75 12.3358 15.75 12.75C15.75 13.1642 15.4142 13.5 15 13.5H10.4055C10.0725 14.7939 8.89788 15.75 7.5 15.75C6.10212 15.75 4.92755 14.7939 4.59451 13.5ZM6 12.75C6 11.9216 6.67157 11.25 7.5 11.25C8.32843 11.25 9 11.9216 9 12.75C9 13.5784 8.32843 14.25 7.5 14.25C6.67157 14.25 6 13.5784 6 12.75Z"
                fill="#808191"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.59451 6H3C2.58579 6 2.25 5.66421 2.25 5.25C2.25 4.83579 2.58579 4.5 3 4.5H7.59451C7.92755 3.20608 9.10212 2.25 10.5 2.25C11.8979 2.25 13.0725 3.20608 13.4055 4.5H15C15.4142 4.5 15.75 4.83579 15.75 5.25C15.75 5.66421 15.4142 6 15 6H13.4055C13.0725 7.29392 11.8979 8.25 10.5 8.25C9.10212 8.25 7.92755 7.29392 7.59451 6ZM9 5.25C9 4.42157 9.67157 3.75 10.5 3.75C11.3284 3.75 12 4.42157 12 5.25C12 6.07843 11.3284 6.75 10.5 6.75C9.67157 6.75 9 6.07843 9 5.25Z"
                fill="#808191"
              />
            </svg>
          </span>
          <span className="">More</span>
        </button>
      </div>
      <div aria-label="list" className="grid grid-cols-2 gap-x-16 gap-y-6">
        {properties &&
          properties.length > 0 &&
          properties.map((item: PropertyItemData, index: number) => (
            <PropertyItem item={item} key={item.id}></PropertyItem>
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
  );
};

export default PropertyList;
