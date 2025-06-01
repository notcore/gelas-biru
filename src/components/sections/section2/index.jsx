import InfiniteScroll from "@/components/template/Infinite-scroll";
import { useEffect } from "react";
import ShinyText from "@/components/elements/ShinyText/ShinyText";

// ===============================================================================================
    // tempat ganti tittle sama paragraf
// ===============================================================================================


// ubah judul sini
const tittle = "About me";

// ubah paragraph
const paragprah = "Im Azero, a Graphic Designer & motion grapich based on Yogyakart I have a shing possion in Creative Industry and string desire to bring clients Imaginations to life through the designs create I continuously seek opportunities to develop os a designer and strive to improve even further. Looking forward to collaborate with youl";






// ===============================================================================================
    // area developer
// ===============================================================================================

const Section2 = () => {
    return (
        <div className="bg-darkblue relative -mt-20 flex justify-center items-center min-h-screen">
           <div className="absolute -top-25 w-screen h-[100px] bg-gradient-to-t from-[#1c66c9] via-transparent to-transparent"></div>
         <div>
            <div className="relative grid place-items-center z-20">
                <ShinyText text={tittle} disabled={false} speed={3} className='font-tittle text-3xl text-center md:text-6xl md:mb-6' />
                <h2 className=" text-md text-white mx-10 text-center md:text-3xl mb-6">{paragprah}</h2>
            </div>
            {/* <InfiniteScroll /> */}
         </div>
        </div>
    )
}
//  bg-gradient-to-t from-[1c66c9] via-[#2ca6e9]/50 to-transaparant
// font-tittle text-3xlmx-10 text-center md:text-6xl md:mb-6
export default Section2;