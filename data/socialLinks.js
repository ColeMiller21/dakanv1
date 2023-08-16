import { FaTwitter, FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export const links = {
  discord: {
    link: "https://discord.gg/dakan",
    icon: <FaDiscord size={30} />,
  },
  twitter: {
    link: "https://twitter.com/dakan_io",
    icon: <FaTwitter size={30} />,
  },
  instagram: {
    link: "https://www.instagram.com/dakan.io/",
    icon: <FaInstagram size={30} />,
  },
  youtube: {
    link: "https://www.youtube.com/@dakan_official",
    icon: <FaYoutube size={30} />,
  },
  linktree: {
    link: "https://linktr.ee/dakan_official",
    icon: <SiLinktree size={30} />,
  },
};
