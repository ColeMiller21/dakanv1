import Image from "next/image";
import React from "react";
import DotsBanner from "./DotsBanner";

const JoinUs = () => {
  return (
    <>
      <div className="w-full min-h-auto flex flex-col justify-center items-center mb-[100px] overflow-hidden lg:max-w-7xl">
        <DotsBanner />
        <div className="w-full md:w-[60%] my-[7rem]">
          <p className="text-[2rem] lg:text-[3rem] font-bold text-center">
            Where physical and digital{" "}
            <span className="text-primary-green">collect</span> together.
          </p>
        </div>
        <DotsBanner />
      </div>
      <div className="w-screen h-[150px] lg:h-[350px] relative lg:max-w-7xl bg-repeat bg-cover bg-image-pixels bg-center "></div>
    </>
  );
};

export default JoinUs;
