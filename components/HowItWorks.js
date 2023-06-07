import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[50px] mb-[100px] lg:max-w-7xl">
      <h2 className="text-[3rem] lg:text-[4rem] ">
        <span className="font-bold">How</span> it works
      </h2>
      <div className="hidden w-full lg:w-[75%] lg:flex flex-col gap-[2rem]">
        <WorksCard
          number={1}
          image="/assets/close-up-hands-holding-box.jpeg"
          imageAlt="close-up-hands-holding-box"
          text="Carefully protect your item(s) and send them to the DAKAN vault"
          title="Prepare your assets"
        />
        <WorksCard
          number={2}
          image="/assets/courier-unloading-cardboard-boxes.jpeg"
          imageAlt="alt"
          text="Create a prepaid label from your Dakan Vault account for assets valued under $10k."
          title="Ship your package"
        />
        <WorksCard
          number={3}
          image="/assets/locker-train-station.jpeg"
          imageAlt="alt"
          text="Within 3 business days of receipt, your cards will be added to your portfolio."
          title="Assets catalogued & vaulted"
        />
      </div>
      <div className="flex w-full md:w-[75%] lg:hidden flex-col gap-[2rem]">
        <MobileWorksCard
          number={1}
          image="/assets/close-up-hands-holding-box.jpeg"
          imageAlt="alt"
          text="Carefully protect your item(s) and send them to the DAKAN vault"
          title="Prepare your assets"
        />
        <MobileWorksCard
          number={2}
          image="/assets/courier-unloading-cardboard-boxes.jpeg"
          imageAlt="alt"
          text="Create a prepaid label from your Dakan Vault account for assets valued under $10k."
          title="Ship your package"
        />
        <MobileWorksCard
          number={3}
          image="/assets/locker-train-station.jpeg"
          imageAlt="alt"
          text="Within 3 business days of receipt, your items will be added to your portfolio."
          title="Assets catalogued & vaulted"
        />
      </div>
      <div className="w-full flex flex-col items-center md:flex-row gap-[2.5rem] md:justify-around">
        <div className="relative w-full aspect-[16/8]">
          <Image
            src={`/assets/secure-in-vault.png`}
            alt="Lock in value"
            fill
            className="shadow-md rounded-md"
          />
        </div>
        <div className="relative w-full aspect-[16/8]">
          <Image
            src={`/assets/real-time.png`}
            alt="Real Time Value"
            fill
            className="shadow-md rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

const WorksCard = ({ image, title, text, number, imageAlt }) => {
  return (
    <div className="w-full bg-dark-gray rounded-lg flex flex-col lg:flex-row lg:gap-[2.5rem] overflow-hidden lg:h-[250px] shadow-md">
      <div className="w-[10%] py-[2rem] pl-[3rem]">
        <div className="w-[50px] aspect-square text-white bg-primary-green flex justify-center items-center text-[30px] font-bold">
          {number}
        </div>
      </div>
      <div className="w-[60%] py-[2.5rem] flex flex-col gap-[2rem]">
        <span className="text-[2rem] font-bold">{title}</span>
        <span className="text-[1.5rem]">{text}</span>
      </div>
      <div className="w-[35%] aspect-square relative">
        <Image src={image} alt={imageAlt} fill />
      </div>
    </div>
  );
};

const MobileWorksCard = ({ image, title, text, number, imageAlt }) => {
  return (
    <div className="w-full bg-dark-gray rounded-lg flex flex-col overflow-hidden shadow-sm gap-[1.5rem]">
      <div className="flex  px-[1.5rem] mt-[1.5rem]">
        <div className="w-[50px] aspect-square text-white bg-primary-green flex justify-center items-center text-[30px] font-bold">
          {number}
        </div>
      </div>
      <span className="text-[2rem] font-bold px-[1.5rem] leading-none">
        {title}
      </span>
      <div className="w-full  flex flex-col gap-[2rem] px-[1.5rem]">
        <span className="text-[1.25rem]">{text}</span>
      </div>
      <div className="w-full aspect-[16/10] relative">
        <Image src={image} alt={imageAlt} fill className="object-fill" />
      </div>
    </div>
  );
};
