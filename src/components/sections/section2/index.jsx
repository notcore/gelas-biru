import InfiniteScroll from "@/components/template/Infinite-scroll";
import { useEffect } from "react";
import ShinyText from "@/components/elements/ShinyText/ShinyText";

// ===============================================================================================
    // tiati kalo costume ntar biasanya ngerusak margin padding💀
// ===============================================================================================

const Section2 = () => {
    return (
        <div className="bg-gradient-darkblue relative -mt-20 flex justify-center items-center min-h-screen">
          <div className="absolute -top-25 w-screen h-[100px] bg-gradient-to-t from-[#1c66c9] via-transparent to-transparent"></div>
          <img className="absolute z-10 md:mt-[10%] md:w-[100%] mt-55" src="/resource/background/air-terjun.svg" />
          <div className="absolute z-20 md:mt-[10%] ">
            <div className="relative flex justify-center flex-wrap mt-35 z-20">
              <ShinyText text="Project yang pernah dibuat" disabled={false} speed={3} className='font-tittle text-3xl text-center md:text-6xl mt-20 md:mb-6' />
              <h2 className=" text-md text-white mx-20 text-center md:text-3xl mb-6"> Saya senang menciptakan desain yang ceria untuk menarik perhatian client.</h2>
            </div>
            <InfiniteScroll />
          </div>
        </div>
    )
}
//  bg-gradient-to-t from-[1c66c9] via-[#2ca6e9]/50 to-transaparant
// font-tittle text-3xlmx-10 text-center md:text-6xl md:mb-6
export default Section2;