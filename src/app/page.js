"use client";

import Image from "next/image";
import Glass from "@/components/elements/Glass";
import VideoPlayer from "@/components/elements/Video";
import { useEffect } from "react";

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
      <div className="mt-20">
        <img className="max-w-[400px] md:w-[600px] md:max-w-[600px] parallax mx-auto" src="/resource/tittle/azero-design.svg" />
        <div className="relative flex justify-center mt-10">
          <img src="/resource/background/background-atas.svg" />
          <img className="absolute z-10 mt-12" src="/resource/background/shape-lancip.svg" />
          <img className="absolute animate-float-wind mt-40 z-20 md:mt-[20%] max-w-[300px] sm:max-w-[650px] md:w-[650px]" src="/resource/background/background-video.svg" />
        </div>
        <div className="bg-darkblue -mt-20 min-h-screen">

        </div>
      </div>
    </div>
  );
}