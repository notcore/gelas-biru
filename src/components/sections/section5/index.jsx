import InfiniteScroll from "@/components/template/Infinite-scroll";
import { useEffect } from "react";
import ShinyText from "@/components/elements/ShinyText/ShinyText";
import Glass from "@/components/elements/Glass";
import { Home } from "lucide-react";

// ! JANGAN HAPUS PATH 
const path = "/resource/logo/";

// ===============================================================================================
    //ubah bagian sini aja biar gampang
// ===============================================================================================


const contact = [
  {
    id: 1,
    icon: <Home />,
    tittle: `facebook`,
    link: "www.facebook.com"
  },
  {
    id: 1,
    icon: <Home />,
    tittle: `facebook`,
    link: "www.facebook.com"
  },
  {
    id: 1,
    icon: <Home />,
    tittle: `facebook`,
    link: "www.facebook.com"
  },
]

// ubah judul sini
const tittle = "Project yang pernah dibuat";

// ubah paragraph
const paragprah = "beberapa project yang pernah saya buat";

// ===============================================================================================
    // dibawah area developer //
// ===============================================================================================


const Section5 = () => {
    return (
        <div id="project" className=" relative grid place-items-center place-content-center md:mt-52 px-5 h-[500px]">
          <img className="absolute z-10 md:w-[100%]" src="/resource/background/air-terjun.svg" />
          <div className="absolute z-20 ">
            <div className="relative grid place-items-center z-20">
              <img className="max-w-[400px] md:w-[600px] md:max-w-[600px] mx-auto" src="/resource/tittle/project.svg" />
              <h2 className=" text-md text-white mx-20 text-center md:text-3xl">{paragprah}</h2>
            </div>
            <InfiniteScroll />
          </div>
        </div>
    )
}
//  bg-gradient-to-t from-[1c66c9] via-[#2ca6e9]/50 to-transaparant
// font-tittle text-3xlmx-10 text-center md:text-6xl md:mb-6
export default Section5;