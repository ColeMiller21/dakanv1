import React from "react";
import Image from "next/image";
import LinkList from "./LinkList";

const Footer = () => {
  return (
    <div className="w-screen min-h-[300px] flex flex-col items-center p-[3rem] lg:flex-row lg:justify-center bg-primary-black lg:p-24 text-white overflow-hidden gap-[3rem] shadow-lg">
      <div className="flex flex-col items-center gap-[3rem] lg:hidden">
        <MobileFooter />
      </div>
      <div className="w-full hidden lg:flex items-center justify-between max-w-7xl">
        <div className="flex gap-[3rem]">
          <div className="flex flex-col gap-[1rem]">
            <Image
              height={70}
              width={100}
              priority
              quality={100}
              src={"/assets/dakanlogowhite.svg"}
              alt="Dakan"
            />
            <span className="text-[.8rem]">
              &copy; 2023 Dakan. All rights reserved
            </span>
          </div>
          <div className="flex gap-[1.5rem] items-start">
            <LinkList />
          </div>
        </div>
        <div className="flex gap-[.3rem]">
          <a
            href="https://bit.ly/series-1-whitelist"
            target="_blank"
            className="bg-primary-green text-black rounded-full flex justify-center items-center h-[50px] px-[2rem] transition duration-400 drop-shadow-lg"
          >
            Preregister
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const MobileFooter = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-[3rem]">
        <div className="flex flex-col items-center gap-[1rem]">
          <Image
            height={70}
            width={100}
            priority
            quality={100}
            src={"/assets/dakanlogowhite.svg"}
            alt="Dakan"
          />
          <span className="text-[.8rem]">
            &copy; 2023 Dakan. All rights reserved
          </span>
        </div>
        <div>
          <a
            href="https://bit.ly/series-1-whitelist"
            target="_blank"
            className="bg-primary-green text-black rounded-full flex justify-center items-center h-[50px] px-[2rem] hover:text-primary-green transition duration-400 drop-shadow-lg"
          >
            Preregister
          </a>
        </div>
        <div className="flex gap-[1.5rem] items-center">
          <LinkList />
        </div>
      </div>
    </>
  );
};
