"use client";
import Landing from "@/components/Landing";
import MissionStatement from "@/components/MissionStatement";
import Phygital from "@/components/Phygital";
import Approach from "@/components/Approach";
import HowItWorks from "@/components/HowItWorks";
import JoinUs from "@/components/JoinUs";
import { initGA, logPageView } from "../utils/analytics";
import { useRouter } from "next/navigation";
import SEO from "@/components/SEO";

export default function Home() {
  const router = useRouter();
  initGA();
  logPageView({ page: router.pathname, title: "Home" });
  return (
    <>
      <SEO
        title="Home | Dakan"
        description="Dakan is the first phygital collectible marketplace using blockchain technology to transact verified collectibles and memorabilia. Browse the exchange. Join the community."
      />
      <main className="w-full flex min-h-screen flex-col items-center justify-between px-[2rem] lg:px-24 bg-light-gray overflow-hidden text-black">
        <Landing />
        <MissionStatement />
        <Phygital />
        <Approach />
        <HowItWorks />
        <JoinUs />
      </main>
    </>
  );
}
