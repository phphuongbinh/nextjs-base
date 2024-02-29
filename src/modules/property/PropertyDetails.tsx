import React from "react";
import { Spinner } from "@/components/loading";
import { getProperty } from "@/store/Properties.service";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import HeadContent from "@/components/HeadContent";
import mapImage from "@public/map.png";
import {
  IconArrowLeft,
  IconEllipsis,
  IconLocation,
  IconMessage,
  IconPhone,
  IconStarYellow,
} from "@/components/icons";
import Image from "next/image";
import { Button } from "@/components/button";
import capitalizeStr from "@/utils/toCapitalize";
import dynamic from "next/dynamic";
import Link from "next/link";

const renderFacilityIcon = (item: any): React.ReactNode => {
  const [name, count] = item;
  const newName = capitalizeStr(name, "-").replace(/ /g, "");
  const Icon = dynamic(() => import(`../../components/icons/Icon${newName}`));
  return (
    <>
      <span className="text-gray80">
        <Icon></Icon>
      </span>
      <span className="text-sm font-medium ">
        {count} {newName}
      </span>
    </>
  );
};

const PropertyDetails = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string);
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", id],
    queryFn: () => getProperty(id),
    staleTime: 1000 * 60 * 1,
    enabled: !!id,
  });
  const facilities = Object.entries(data?.facility || {});
  const agent = data?.agent;

  if (!data || error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <div className="p-5 rounded-2xl bg-white">
      <HeadContent
        title={data.title}
        image={data.image && data.image[0]}
      ></HeadContent>
      <div className="flex items-center gap-6 mb-6">
        <Link href="/property">
          <IconArrowLeft />
        </Link>
        <h2 className="text-xl font-semibold">Details</h2>
      </div>
      <div className="grid grid-cols-[7fr_3fr] gap-5">
        <div>
          <div className="grid grid-cols-3 grid-rows-[162px_162px] gap-5 mb-4">
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
                    fill
                    className="rounded-lg object-cover w-full h-full"
                  ></Image>
                  {index === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center text-lg font-medium text-white bg-black bg-opacity-50 overlay rounded-lg">
                      +10
                    </div>
                  )}
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
                <div className="flex gap-1">
                  {Array(Math.floor(data.price || 0))
                    .fill(0)
                    .map((item, index) => (
                      <IconStarYellow key={index} />
                    ))}
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
              {facilities.length > 0 &&
                facilities.map((item, index) => (
                  <div className="flex gap-1" key={index}>
                    {renderFacilityIcon(item)}
                  </div>
                ))}

              {/* <div className="flex gap-1">
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
              </div> */}
            </div>
          </div>
          <div>
            <h5 className="text-lg font-medium mb-3">Description</h5>
            <p className="text-gray80">{data.description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="py-5 px-6 rounded-xl shadow flex flex-col items-center h-[344px]">
            <button className="ml-auto inline-block mb-2">
              <IconEllipsis />
            </button>
            <div className="relative mb-4">
              <Image
                src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-    4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="avatar"
                width={500}
                height={500}
                className="w-24 h-24 rounded-full object-cover"
              ></Image>
            </div>
            <h4 className="text-lg font-semibold text-primaryText mb-1">
              {agent?.name}
            </h4>
            <p className="text-gray80 mb-2">Agent</p>
            <div className="flex gap-4 items-center mb-1">
              <IconLocation />
              <span className="text-gray80">{agent?.address}</span>
            </div>
            <p className="text-base text-primaryText font-semibold mb-4">
              {agent?.properties} Properties
            </p>
            <div className="flex gap-5 w-full">
              <Button
                size="md"
                variant="primary"
                className="rounded-[5px] px-4"
              >
                <IconMessage />
                Message
              </Button>
              <Button
                size="md"
                variant="secondary"
                className="rounded-[5px] px-4"
              >
                <IconPhone />
                Call
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image className="mb-5" src={mapImage} alt="map"></Image>
            <Button
              className="rounded-[10px] w-full h-12"
              size="md"
              variant="primary"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
