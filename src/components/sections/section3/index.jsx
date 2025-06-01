import InfiniteScroll from "@/components/template/Infinite-scroll";
import { useEffect } from "react";
import ShinyText from "@/components/elements/ShinyText/ShinyText";

// ===============================================================================================
    // costum text disini
// ===============================================================================================

const timelineData = [
  {
    year: "2024 — Sekarang",
    title: "Mahasiswa ITB, fakultas Seni Rupa dan Desain",
    paragraph:
      "Keterima ITB karena gambar furry, dan sekarang saya sedang belajar untuk menjadi seorang programmer yang handal. Saya senang menciptakan desain yang ceria untuk menarik perhatian client.",
  },

  {
    year: "2024 — sekarang",
    title: "Freelance Designer",
    paragraph:
      "Bekerja sebagai freelance grapich & motion designer, fokus pada pembuatan logo dan ilustrasi digital untuk berbagai klien lokal.",
  },
  {
    year: "2004? — sekarang",
    title: "hidup",
    paragraph:
      "hidup dibumi menjalani karir sebagai desainer grafis, menciptakan karya seni digital yang unik.",
  },
  // kalo mau tambah dtinggal copy aja 
  // {
  //   year: "2004? — sekarang",
  //   title: "hidup",
  //   paragraph:
  //     "hidup dibumi menjalani karir sebagai desainer grafis, menciptakan karya seni digital yang unik.",
  // },
];

// ===============================================================================================
    // dibawah area developer //
// ===============================================================================================


const Section3 = () => {
    return (
        <div className=" relativ flex justify-center items-center min-h-screen">
        
          <div className="flex flex-col gap-6 px-5 mx-auto md:mt-[200px] mb-10">
            <div className="relative grid place-items-center z-20">
              <ShinyText text="Exprience" disabled={false} speed={3} className='font-tittle text-3xl text-center md:text-6xl  md:mb-6' />
            </div>
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="text-xs text-white font-mono sm:w-28 flex-shrink-0">
                  {item.year}
                </div>
                <div className="flex-1 border-l-2 border-white pl-5">
                  <ShinyText
                    text={item.title}
                    disabled={false}
                    speed={3}
                    className="font-tittle text-3xl text-start md:text-6xl md:mb-6"
                  />
                  <p className="text-md text-white mt-1 max-w-3xl">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}
//  bg-gradient-to-t from-[1c66c9] via-[#2ca6e9]/50 to-transaparant
// font-tittle text-3xlmx-10 text-center md:text-6xl md:mb-6
export default Section3;