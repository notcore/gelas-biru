"use client";

import Image from "next/image";
import Glass from "@/components/elements/Glass";
import VideoPlayer from "@/components/elements/Video";
import { useEffect } from "react";
import Navbar from "@/components/template/Navbar";
import InfiniteScroll from "@/components/template/Infinite-scroll";

export default function Home() {
   useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector(".parallax");
      if (parallax) {
        const scrollPosition = window.scrollY;
        const scale = Math.max(0.7, 1 - scrollPosition / 2000); 
        const opacity = Math.max(0.3, 1 - scrollPosition / 200);
        parallax.style.transform = `translateY(${scrollPosition * 0.5}px) scale(${scale})`;
        parallax.style.opacity = opacity;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center min-h-screen">
    <Navbar />
      <div className="mt-20">
        <img className="max-w-[400px] md:w-[600px] md:max-w-[600px] parallax mx-auto" src="/resource/tittle/azero-design.svg" />
        <div className="relative flex justify-center mt-10">
          <img src="/resource/background/background-atas.svg" />
          <img className="absolute z-10 md:max-w-[600px] md:mt-[10%] mt-12" src="/resource/background/shape-lancip.svg" />
          <img className="absolute animate-float-wind mt-40 z-20 md:mt-[20%] max-w-[300px] sm:max-w-[650px] md:w-[650px]" src="/resource/background/background-video.svg" />
        </div>
        <div className="bg-gradient-darkblue overflow-hidden relative -mt-1 flex justify-center items-center min-h-screen">
          <img className="absolute z-10 md:max-w-[400px] md:w-[400px] md:mt-[10%] ml-4 mt-55" src="/resource/background/air-terjun.svg" />
          <div className="absolute z-10 md:mt-[10%] ml-4 ">
            <h1 className="font-tittle text-3xl text-white mx-10 text-center mb-10">Project yang pernah dibuat</h1>
            <InfiniteScroll />
          </div>

        </div>
      </div>
    </div>
  );
}