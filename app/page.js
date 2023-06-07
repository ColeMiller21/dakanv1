import Landing from "@/components/Landing";
import MissionStatement from "@/components/MissionStatement";
import Phygital from "@/components/Phygital";
import Approach from "@/components/Approach";
import HowItWorks from "@/components/HowItWorks";
import JoinUs from "@/components/JoinUs";

export const metadata = {
  title: "Home | Dakan",
  alternates: {
    canonical: "https://dakan.io",
  },
  description:
    "Welcome to Dakan, the premiere phygital marketplace leveraging blockchain technology for verified collectibles and memorabilia. Explore our offerings, join our vibrant community, and step into the future of trading collectibles.",
};

export default function Home() {
  return (
    <>
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
