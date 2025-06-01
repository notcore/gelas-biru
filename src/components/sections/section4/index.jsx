import InfiniteScroll from "@/components/template/Infinite-scroll";
import { useEffect } from "react";
import ShinyText from "@/components/elements/ShinyText/ShinyText";
import Glass from "@/components/elements/Glass";

// ! JANGAN HAPUS PATH 
const path = "/resource/logo/";


// bagian judul
const judul = "software skill";

// bagian aragraf
const paragraph = "masukkan text...";

// bagian app
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


// ===============================================================================================
    // dibawah area developer //
// ===============================================================================================




const Section4 = () => {
    return (
        <div className=" relative grid place-items-center place-content-center py-12 px-5">
          <div className="relative grid place-items-center z-20">
              <ShinyText text={judul} disabled={false} speed={3} className='font-tittle text-3xl text-center md:text-6xl ' />
              <h2 className=" text-md text-white mx-20 text-center md:text-3xl mb-6">{paragraph}</h2>
          </div>
          <div className="">
            <div className="flex gap-2 justify-center items-center w-max animate-scroll-x">
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
                    className="font-tittle mr-3 text-2xl text-center md:text-4xl"
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
                    className="font-tittle mr-3 text-2xl text-center md:text-4xl"
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
                    className="font-tittle mr-3 text-2xl text-center md:text-4xl"
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
                    className="font-tittle mr-3 text-2xl text-center md:text-4xl"
                  />
                </Glass>
              ))}
            </div>
          </div>
        </div>
    )
}
//  bg-gradient-to-t from-[1c66c9] via-[#2ca6e9]/50 to-transaparant
// font-tittle text-3xlmx-10 text-center md:text-6xl
export default Section4;