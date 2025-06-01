"use client";

import Image from "next/image";
import Glass from "@/components/elements/Glass";
import { useEffect } from "react";
import Navbar from "@/components/template/Navbar";
import Section1 from "@/components/sections/section1";
import Section2 from "@/components/sections/section2";
import Section3 from "@/components/sections/section3";
import Section4 from "@/components/sections/section4";
import Section5 from "@/components/sections/section5";
import Footer from "@/components/template/footer";

export default function Home() {

  return (
    <div className="flex justify-center min-h-screen">
      <Navbar />
       <div className="mt-20 overflow-hidden w-screen">
        <Section1/> 
        <div className="bg-gradient-darkblue">
        <Section2/> 
        <Section3/> 
        <Section4/> 
        <Section5/>
        <Footer />
        </div>
        
      </div>
    </div>
  );

}