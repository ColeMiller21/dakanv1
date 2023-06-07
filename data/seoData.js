const DEFAULT_OPENGRAPH = {
  openGraph: {
    title: "Dakan",
    description:
      "Dakan is the first phygital collectible marketplace using blockchain technology to transact verified collectibles and memorabilia. Browse the exchange. Join the community.",
    url: "https://dakan.io",
    siteName: "Dakan",
    images: [
      {
        url: "/assets/banner.jpeg",
        width: 1500,
        height: 500,
        alt: "Dakan Banner",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const DEFAULT_ROBOTS = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const DEFAULT_SEO = {
  ...DEFAULT_ROBOTS,
  ...DEFAULT_OPENGRAPH,
};
