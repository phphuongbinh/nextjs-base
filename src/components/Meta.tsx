import Head from "next/head";
import React from "react";

const Meta = () => {
  return (
    <Head>
      <title>Real Estate Admin management</title>
      <meta name="description" content="Some tags are vital for SEO." />
      <meta name="keywords" content="real estate, property, dashboard" />
      {/* Share Facebook */}
      <meta property="og:title" content="The Rock" />
      <meta property="og:type" content="video.movie" />
      <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
      <meta
        property="og:image"
        content="https://ia.media-imdb.com/images/rock.jpg"
      />
      {/* Share twitter */}
      <meta name="twitter:title" content="European Travel Destinations " />
      <meta name="twitter:description" content="Some tags are vital for SEO." />
      <meta
        name="twitter:image"
        content=" http://euro-travel-example.com/thumbnail.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Meta;
