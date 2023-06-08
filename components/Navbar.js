"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { isResSent } from "next/dist/shared/lib/utils";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos < 130) return;
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
      className={`fixed top-0 left-0 w-full z-50 h-[100px] bg-light-gray flex items-center justify-center px-[2rem] lg:px-24 ${
        isVisible && "shadow-sm"
      }`}
    >
      <div className="w-full flex items-center justify-between max-w-7xl">
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
        <div className="flex items-center gap-[.3rem]">
          <a
            href="https://form.jotform.com/231286167055154"
            target="_blank"
            className="bg-primary-black text-white rounded-full flex justify-center items-center h-[50px] px-[2rem] hover:text-primary-green transition duration-400 drop-shadow-lg"
          >
            Register
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
