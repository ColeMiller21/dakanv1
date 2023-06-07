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
    <div className="w-screen min-h-[300px] flex flex-col items-center p-6  lg:flex-row md:justify-between bg-primary-black md:p-24 text-white overflow-hidden gap-[3rem] shadow-lg">
      <div className="flex flex-col lg:flex-row gap-[3rem]">
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
        <div className="flex gap-[1.5rem] items-center">
          <LinkList />
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row gap-[.3rem]">
        <input
          type="text"
          className="border-none rounded-full  h-[50px] w-[275px] px-[1rem] text-black"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={emailSubmit}
          disabled={email === ""}
          className="bg-primary-green text-black rounded-full h-[50px] px-[2rem] hover:text-primary-gray transition duration-400 cursor-pointer"
        >
          {isLoading ? (
            <ClipLoader
              color={"black"}
              size={16}
              aria-label="Loading Spinner"
            />
          ) : (
            NOTIFICATION_STATES[subscribeStatus]
          )}
        </button>
        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_eb05e4f830c2a04be30171b01_8281a64779"
            tabIndex="-1"
            defaultValue=""
          />
        </div>
        <div className="clear">
          <input
            type="submit"
            defaultValue=""
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
            style={{ display: "none" }}
          />
        </div>
        {/* END */}
      </div>
    </div>
  );
};

export default Footer;
