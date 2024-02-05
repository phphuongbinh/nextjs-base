import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const ImageDetails = () => {
  const router = useRouter();
  console.log(router);

  return <div>Image detail</div>;
};

export default ImageDetails;
