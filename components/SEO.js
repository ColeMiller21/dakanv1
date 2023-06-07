import React from "react";
import { NextSeo } from "next-seo";

const baseUrl = "https://www.dakan.io/";

const SEO = ({ title, description, imagePath, path }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={path ? `${baseUrl}/${path}` : baseUrl}
      openGraph={{
        url: path ? `${baseUrl}${path}` : baseUrl,
        title,
        description: description,
        images: [
          {
            url: "/assets/banner.jpeg",
            width: 1500,
            height: 500,
            alt: "Dakan Banner",
            type: "image/png",
          },
        ],
        site_name: "Dakan",
      }}
      twitter={{
        handle: "@dakan_io",
        site: baseUrl,
        cardType: "summary_large_image",
      }}
      //   additionalLinkTags={[{ rel: "icon", href: "" }]}
      additionalMetaTags={[
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          name: "facebook-domain-verification",
          content: "392w91gx3hs5oih7ct84r308nyjng4",
        },
      ]}
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noarchive: true,
        index: true,
        follow: true,
        twitter: true,
      }}
    />
  );
};

export default SEO;
