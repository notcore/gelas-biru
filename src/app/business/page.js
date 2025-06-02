"use client";
import NavbarBusiness from "@/components/template/NavbarBusiness";
import ShinyText from "@/components/elements/ShinyText/ShinyText";
import Produk from "@/components/elements/Card";
import Testimoni from "@/components/template/testimoni";
import Tier from "@/components/template/tier"

import { Smile,Gem,Store,HandCoins } from "lucide-react"
// ===============================================================================================

const paragprah = "order di azero, logo kamu akan jadi lebih hidup dan menarik perhatian client!";

const card = [
  {
    id: 0,
    tittle: "high value",
    paragraph: "dibuat dari nol tanpa template dijamin unik.",
    icon: <Gem className="mx-auto text-[#1c66c9]" width={50} height={50} />
  },
  {
    id: 1,
    tittle: "Cocok untuk UMKM",
    paragraph: "gak harus jadi perusahaan besar dlu kalo mau tampil mewah",
    icon: <Store className="mx-auto text-[#1c66c9]" width={50} height={50} />
  },
  {
    id: 2,
    tittle: "revisi hingga puas",
    paragraph: "demi kenyamanan client,agar produk kami tetap istimewa",
    icon: <Smile className="mx-auto text-[#1c66c9]" width={50} height={50} />
  },
  {
    id: 3,
    tittle: "murah",
    paragraph: "mulai dari 50.000, dan dapatkan diskon dari kami",
    icon: <HandCoins className="mx-auto text-[#1c66c9]" width={50} height={50} />
  },
]

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
        <div className="overflow-hidden md:mx-auto md:w-auto pb-3 -mt-[17px] container-with-horizontal-scroll flex overflow-x-auto gap-6 px-2 sm:px-0">
          {card.map((isi) => (
            <Produk key={isi.id} tittle={isi.tittle} paragraph={isi.paragraph}>
              {isi.icon}
            </Produk>
          ))}
        </div>

        <h1 className="font-tittle -mb-4 mr-3 mt-6  text-4xl text-start md:text-4xl ml-5">Testimoni</h1>
        <h2 className="text-md ml-5 mt-3 text-start md:text-2xl mb-4">banyak client telah memesan produk dari kami</h2>
        <Testimoni />

        <h1 className="font-tittle mb-4 mr-3 mt-6  text-4xl text-start md:text-4xl ml-5">tier list</h1>
        <div className=" mb-6 gap-3 flex flex-wrap justify-center mx-10 items-center">
        <Tier />
        <Tier />
        <Tier />

        </div>
          
      </div>
    </div>
  );
// "/resource/tittle/testimoni.svg"
}