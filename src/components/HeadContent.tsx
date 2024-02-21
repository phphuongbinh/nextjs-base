import { metaData } from "@/config";
import Head from "next/head";
import React from "react";

interface HeaderContentProps {
  title?: string;
  description?: string;
  image?: string;
}

const HeadContent = ({ title, description, image }: HeaderContentProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description || metaData.description} />
      <meta name="keywords" content="real estate, property, dashboard" />
      {/* Share Facebook */}
      <meta property="og:title" content={title || metaData.title} />
      <meta property="og:type" content="video.movie" />
      <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
      <meta property="og:image" content={image} />
      {/* Share twitter */}
      <meta name="twitter:title" content={title || metaData.title} />
      <meta
        name="twitter:description"
        content={description || metaData.description}
      />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default HeadContent;
