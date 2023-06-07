import React from "react";
import Link from "next/link";
import { links } from "../data/socialLinks";

const LinkList = () => {
  return (
    <>
      {Object.entries(links).map(([key, value]) => (
        <a
          key={key}
          href={value.link}
          target="_blank"
          className="text-white hover:text-primary-green transition duration-300"
        >
          {value.icon}
        </a>
      ))}
    </>
  );
};

export default LinkList;
