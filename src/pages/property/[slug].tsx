import { useRouter } from "next/router";
import React from "react";

const PropertyDetailPage = () => {
  const router = useRouter();
  console.log(router);

  return <div>Property Detail Page</div>;
};

export default PropertyDetailPage;
