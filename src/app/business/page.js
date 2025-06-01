"use client";
import NavbarBusiness from "@/components/template/NavbarBusiness";
import ShinyText from "@/components/elements/ShinyText/ShinyText";
import Produk from "@/components/elements/Card";
import Testimoni from "@/components/template/testimoni";
// ===============================================================================================

const paragprah = "order si azero, logo kamu akan jadi lebih hidup dan menarik perhatian client!";

export default function Business() {

  return (
    <div className="grid grid-cols-1 bg-gradient-darkblue min-h-screen">

     <NavbarBusiness />
     <div className="mt-[200px] mx-5 mb-[50px]">
      <ShinyText
        text="mau logo kamu terlihat profesional?"
        disabled={false}speed={3}
        className="font-tittle  mr-3 mb-6 md:mb-3 text-4xl text-start md:text-4xl"
      />
      <h2 className="text-md text-white  text-start md:text-3xl mb-4">{paragprah}</h2>
      
    </div>

    <div className="rounded-t-xl w-full  bg-white">
      <div className="flex overflow-x-auto pl-50 md:pl-0 -mt-[30px] gap-3 justify-center items-center h-[300px]">
      <Produk />
      <Produk />
      <Produk />
      <Produk />
      <Produk />
      </div>
      <img className="max-w-[400px] gap-3 md:w-[600px] md:max-w-[600px] ml-5 mt-6" src="/resource/tittle/testimoni.svg" />
      <Testimoni />

    </div>
    </div>
  );
// "/resource/tittle/testimoni.svg"
}