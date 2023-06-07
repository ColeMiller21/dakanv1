"use client";
import React, { useState } from "react";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import Link from "next/link";
import LinkList from "./LinkList";

const NOTIFICATION_STATES = {
  idle: "Register",
  success: "Success",
  fail: "Error",
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [errorText, setErrorText] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState("idle");

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const emailSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    if (email === "") return;
    if (!isValidEmail(email)) {
      alert("Not valid email");
      return;
    }
    setIsLoading(true);
    try {
      let res = await axios.post("/api/mail", { email });
      setSubscribeStatus("success");
    } catch (err) {
      setSubscribeStatus("fail");
    }
    setIsLoading(false);
    setTimeout(() => {
      setSubscribeStatus("idle");
    }, 5000);
  };

  return (
    <div className="w-screen min-h-[300px] flex flex-col items-center p-[3rem] lg:flex-row md:justify-between bg-primary-black lg:p-24 text-white overflow-hidden gap-[3rem] shadow-lg">
      <div className="flex flex-col items-center gap-[3rem] lg:hidden">
        <MobileFooter />
      </div>
      <div className="hidden lg:flex flex-col lg:flex-row gap-[3rem]  ">
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
      <div className="hidden items-center lg:flex gap-[.3rem]">
        <a
          href="https://form.jotform.com/231286167055154"
          target="_blank"
          className="bg-primary-green text-black rounded-full flex justify-center items-center h-[50px] px-[2rem] transition duration-400 drop-shadow-lg"
        >
          Preregister
        </a>
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
            href="https://form.jotform.com/231286167055154"
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
