import React from "react";
import Image from "next/image";

const DotsBanner = () => {
  return (
    <div className="w-screen bg-repeat bg-cover bg-center h-[120px] relative lg:max-w-7xl">
      <Image
        src="/assets/dots_t.png"
        alt="Dots"
        fill
        priority
        className="absolute inset-0 z-10"
      />
    </div>
  );
};

export default DotsBanner;
