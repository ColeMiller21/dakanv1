import React from "react";
import DotsBanner from "./DotsBanner";

const JoinUs = () => {
  return (
    <>
      <div className="w-full min-h-auto flex flex-col justify-center items-center mb-[100px] overflow-hidden lg:max-w-7xl">
        <DotsBanner />
        <div className="w-full md:w-[60%] my-[7rem] ">
          <p className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center font-bold">
            Where physical and digital{" "}
            <span className="text-primary-green">collect</span> together.{" "}
            <a
              href="https://form.jotform.com/231286167055154"
              target="_blank"
              className="text-primary-green underline"
            >
              Join Us
            </a>
          </p>
        </div>
        <DotsBanner />
      </div>
      <div className="w-screen aspect-[16/5] relative  bg-repeat bg-cover bg-image-pixels bg-center"></div>
    </>
  );
};

export default JoinUs;
