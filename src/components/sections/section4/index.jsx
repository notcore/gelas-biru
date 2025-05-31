import InfiniteScroll from "@/components/template/Infinite-scroll";
import { useEffect } from "react";
import ShinyText from "@/components/elements/ShinyText/ShinyText";
import Glass from "@/components/elements/Glass";

// ! JANGAN HAPUS PATH 
const path = "/resource/logo/";

// ===============================================================================================
    //ubah bagian app aja biar gampang
// ===============================================================================================

const apps = [
  {
    id : 1,
    icon: `${path}ps.png`,
    judul: "Photoshop",
  },
  {
    id : 2,
    icon: `${path}ai.png`,
    judul: "Adobe Ilustrator",
  },
  {
    id: 3,
    icon: `${path}lr.png`,
    judul: "Ligtt room",
  },
];

const Section4 = () => {
    return (
        <div className="bg-gradient-darkblue relative grid place-items-center place-content-center py-12 px-5">
          <div className="relative grid place-items-center z-20">
              <ShinyText text="software yang dikuasai" disabled={false} speed={3} className='font-tittle text-3xl text-center md:text-6xl  md:mb-6' />
              <h2 className=" text-md text-white mx-20 text-center md:text-3xl mb-6"> lebih dari 1 tahun saya <br /> belajar dan menguasai software yang saya sukai</h2>
            </div>
            <div className="">
            <div className="flex gap-2 w-max animate-scroll-x">
              {apps.map((app) => (
                <Glass
                  key={app.id} 
                  source={app.icon}
                  edit="w-[50px]"
                  className="flex p-4 gap-2 items-center"
                >
                  <ShinyText
                    text={app.judul}
                    disabled={false}
                    speed={3}
                    className="font-tittle mr-3 text-2xl text-center md:text-4xl md:mb-6"
                  />
                </Glass>
              ))}
              {apps.map((app) => (
                <Glass
                  key={app.id} 
                  source={app.icon}
                  edit="w-[50px]"
                  className="flex p-4 gap-2 items-center"
                >
                  <ShinyText
                    text={app.judul}
                    disabled={false}
                    speed={3}
                    className="font-tittle mr-3 text-2xl text-center md:text-4xl md:mb-6"
                  />
                </Glass>
              ))}
              {apps.map((app) => (
                <Glass
                  key={app.id} 
                  source={app.icon}
                  edit="w-[50px]"
                  className="flex p-4 gap-2 items-center"
                >
                  <ShinyText
                    text={app.judul}
                    disabled={false}
                    speed={3}
                    className="font-tittle mr-3 text-2xl text-center md:text-4xl md:mb-6"
                  />
                </Glass>
              ))}
              {apps.map((app) => (
                <Glass
                  key={app.id} 
                  source={app.icon}
                  edit="w-[50px]"
                  className="flex p-4 gap-2 items-center"
                >
                  <ShinyText
                    text={app.judul}
                    disabled={false}
                    speed={3}
                    className="font-tittle mr-3 text-2xl text-center md:text-4xl md:mb-6"
                  />
                </Glass>
              ))}
            </div>
          </div>
        </div>
    )
}
//  bg-gradient-to-t from-[1c66c9] via-[#2ca6e9]/50 to-transaparant
// font-tittle text-3xlmx-10 text-center md:text-6xl md:mb-6
export default Section4;