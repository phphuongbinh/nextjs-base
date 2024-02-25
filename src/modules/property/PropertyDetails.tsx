import React from "react";
import { Spinner } from "@/components/loading";
import { getProperty } from "@/store/Properties.service";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import HeadContent from "@/components/HeadContent";
import {
  IconArrowLeft,
  IconBancol,
  IconBathroom,
  IconBed,
  IconKitchen,
  IconLocation,
  IconParking,
  IconSmoking,
  IconStarYellow,
  IconWifi,
} from "@/components/icons";
import Image from "next/image";
import IconPlus from "@/components/icons/IconPlus";

const PropertyDetails = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string);
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", id],
    queryFn: () => getProperty(id),
    staleTime: 1000 * 60 * 1,
    enabled: !!id,
  });
  console.log(data);

  if (!data || error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <div className="p-5 rounded-2xl bg-white">
      <HeadContent
        title={data.title}
        image={data.image && data.image[0]}
      ></HeadContent>
      <div className="flex items-center gap-6 mb-6">
        <IconArrowLeft />
        <h2 className="text-xl font-semibold">Details</h2>
      </div>
      <div className="grid grid-cols-[7fr_3fr] gap-5">
        <div>
          <div className="grid grid-cols-3 gap-5 mb-4">
            {data.image && data.image[0] && (
              <div className="relative col-span-2 row-span-2">
                <Image
                  src={data.image[0]}
                  alt="property"
                  height={300}
                  width={500}
                  className="rounded-lg object-cover  w-full h-full"
                ></Image>
              </div>
            )}

            {data.image &&
              data.image.slice(1, 3).map((item, index) => (
                <div key={index} className="relative">
                  <Image
                    src={item}
                    alt="property"
                    width={500}
                    height={300}
                    className="rounded-lg object-cover w-full h-full"
                  ></Image>
                </div>
              ))}
          </div>
          <div>
            <div className="grid grid-cols-3 gap-5 mb-4">
              <div className="flex flex-col col-span-2 gap-2">
                <p className="text-lg font-medium capitalize">{data.type}</p>
                <h3 className="text-xl font-semibold ">{data.title}</h3>
                <div className="flex gap-1 text-gray80 ">
                  <IconLocation />
                  <span>{data.address}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 ">
                  <IconStarYellow />
                  <IconStarYellow />
                  <IconStarYellow />
                  <IconStarYellow />
                  <IconStarYellow />
                </div>
                <span className="text-base">Price</span>
                <div className="flex gap-1 items-end">
                  <span className="font-bold text-2xl text-primary">
                    ${data.price}
                  </span>
                  <span>For One Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-lg mb-7">Facillity</p>
            <div className="grid grid-cols-4">
              <div className="flex gap-1">
                <IconBed className="text-gray80" />
                <span className="font-medium">{data.info?.beds} Beds</span>
              </div>
              <div className="flex gap-1">
                <IconBathroom className="text-gray80" />
                <span className="font-medium">Baths</span>
              </div>
              <div className="flex gap-1">
                <IconPlus className="text-gray80" />
                <span className="font-medium">{data.info?.area}M Area</span>
              </div>
              <div className="flex gap-1">
                <IconSmoking className="text-gray80" />
                <span className="font-medium">Smoking Area</span>
              </div>
              <div className="flex gap-1">
                <IconKitchen className="text-gray80" />
                <span className="font-medium">Kitchen</span>
              </div>
              <div className="flex gap-1">
                <IconBancol className="text-gray80" />
                <span className="font-medium">Bancony</span>
              </div>
              <div className="flex gap-1">
                <IconWifi className="text-gray80" />
                <span className="font-medium">Wifi</span>
              </div>
              <div className="flex gap-1">
                <IconParking className="text-gray80" />
                <span className="font-medium">Parking Area</span>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-medium mb-3">Description</h5>
            <p className="text-gray80">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5"></div>
        <div className="py-5 px-6 rounded-xl shadow">Right</div>
      </div>
    </div>
  );
};

export default PropertyDetails;
