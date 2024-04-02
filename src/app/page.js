import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Rewards from "@/components/Rewards";
import Roadmap from "@/components/Roadmap";
import Tables from "@/components/Tables";
import Vision from "@/components/Vision";


export default function Home() {
  return (
    <main className="bg-[#000000]">
      <Navbar />
      <Intro />
      <Rewards />
      <div className="hidden md:flex">
        <Vision />
      </div>

      <Guide />


      <Footer />
    </main>
  );
}
