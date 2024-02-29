import React from "react";
import PropertyItem, {
  PropertyItemLoading,
} from "@/modules/property/PropertyItem";
import { PropertyItemData } from "@/types/property.type";
import { getProperties } from "@/store/Properties.service";
import { useQuery } from "@tanstack/react-query";

const PropertyList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties"],
    queryFn: () => getProperties(),
  });
  const properties = data;
  if (error || properties?.length === 0) return null;
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
    <div aria-label="list" className="grid grid-cols-2 gap-x-16 gap-y-6">
      {properties &&
        properties.length > 0 &&
        properties.map((item: PropertyItemData, index: number) => (
          <PropertyItem item={item} key={item.id}></PropertyItem>
        ))}
    </div>
  );
};

export default PropertyList;
