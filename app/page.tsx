import Image from "next/image";
import Header from "@/components/header";
import AboutMeSection from "@/components/aboutMe";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-start justify-start bg-zinc-50 font-sans">
        <Header/>
        <AboutMeSection/>
    </div>
  );
}
