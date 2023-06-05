"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.nav
      initial={{ y: -120 }}
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 h-[120px] bg-light-gray flex items-center justify-between px-[2rem] lg:px-24 ${
        isVisible && "shadow-sm"
      }`}
    >
      <div>
        <Image
          height={70}
          width={100}
          priority
          quality={100}
          src={"/assets/dakanlogo.svg"}
          alt="Dakan"
        />
      </div>
      <div className="hidden lg:flex items-center gap-[.3rem]">
        <input
          type="text"
          className="border-none rounded-full  h-[50px] w-[275px] px-[1rem]"
          placeholder="Email Address"
        />
        <button className="bg-primary-black text-white rounded-full h-[50px] px-[2rem] hover:text-primary-green transition duration-400">
          Register
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
    </motion.nav>
  );
};

export default Navbar;
