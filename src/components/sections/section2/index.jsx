import InfiniteScroll from "@/components/template/Infinite-scroll";
import { useEffect } from "react";
import ShinyText from "@/components/elements/ShinyText/ShinyText";
import { Mail, Phone, MapPin } from "lucide-react";

// ===============================================================================================
    // tempat ganti tittle sama paragraf
// ===============================================================================================


// ubah judul sini
const tittle = "About me";

// ubah paragraph
const paragprah = "Im Azero, a Graphic Designer & motion grapich based on Yogyakart I have a shing possion in Creative Industry and string desire to bring clients Imaginations to life through the designs create I continuously seek opportunities to develop os a designer and strive to improve even further. Looking forward to collaborate with youl";

// ubah list kontak yg bisa dihubungi
const kontakList = [
  {
    icon: Mail,
    nama: "email@domain.com",
    link: "mailto:email@domain.com",
  },
  {
    icon: Phone,
    nama: "+62 812-3456-7890",
    link: "https:://wa.me/6281234567890",
  },
  // hapus aja gapapa terus ganti apa gitu
  {
    icon: MapPin,
    nama: "Jakarta, Indonesia",
    link: "https://maps.google.com",
  },
];




// ===============================================================================================
    // area developer
// ===============================================================================================

const Section2 = () => {
    return (
        <div id="aboutme" className="bg-darkblue relative pt-46 mb-16 flex justify-center items-center ">
           <div className="absolute -top-25 w-screen h-[100px] bg-gradient-to-t from-[#1c66c9] via-transparent to-transparent"></div>
         <div>
            <div className="relative grid place-items-center z-20">
                <img className="max-w-[400px] md:w-[600px] md:max-w-[600px] mx-auto" src="/resource/tittle/aboutme.svg" />
                <h2 className=" text-md text-white mx-10 text-center md:text-3xl mb-4">{paragprah}</h2>
             <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {kontakList.map((item, index) => {
        const Icon = item.icon;
        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <Icon width={40} height={40} className="text-white group-hover:text-indigo-500 transition" />
            <ShinyText
              text={item.nama}
              disabled={false}
              speed={3}
              className="font-md text-2xl text-white"
            />
          </a>
        );
      })}
    </div>
            </div>
            
         </div>
        </div>
    )
}
//  bg-gradient-to-t from-[1c66c9] via-[#2ca6e9]/50 to-transaparant
// font-tittle text-3xlmx-10 text-center md:text-6xl md:mb-6
export default Section2;