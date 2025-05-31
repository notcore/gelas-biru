"use client";

import Image from "next/image";
import Glass from "@/components/elements/Glass";
import { useEffect } from "react";
import Navbar from "@/components/template/Navbar";
import Section2 from "@/components/sections/section2";
import Section1 from "@/components/sections/section1";

export default function Home() {

  return (
    <div className="flex justify-center min-h-screen">
      <Navbar />
       <div className="mt-20">
        <Section1/> 
        <Section2/> 
      </div>
    </div>
  );

}