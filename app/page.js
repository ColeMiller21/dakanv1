import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import MissionStatement from "@/components/MissionStatement";
import Phygital from "@/components/Phygital";
import Approach from "@/components/Approach";
import HowItWorks from "@/components/HowItWorks";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";
import TestLanding from "@/components/TestLanding";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between px-[2rem] lg:px-24 bg-light-gray overflow-hidden text-black">
      {/* <TestLanding /> */}
      <Navbar />
      <Landing />
      <MissionStatement />
      <Phygital />
      <Approach />
      <HowItWorks />
      <JoinUs />
      <Footer />
    </main>
  );
}
