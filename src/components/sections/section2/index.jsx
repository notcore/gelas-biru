import InfiniteScroll from "@/components/template/Infinite-scroll";
import { useEffect } from "react";

// ===============================================================================================
    // tiati kalo costume ntar biasanya ngerusak margin padding💀
// ===============================================================================================

const Section2 = () => {
    return (
        <div className="bg-gradient-darkblue relative -mt-20 flex justify-center items-center min-h-screen">
          <img className="absolute z-10 md:mt-[10%] md:w-[100%] ml-4 mt-55" src="/resource/background/air-terjun.svg" />
          <div className="absolute z-20 md:mt-[10%] ml-4 ">
            <div className="relative mt-35 z-20">
              <h1 className="font-tittle text-3xl text-white mx-10 text-center md:text-6xl md:mb-6">Project yang pernah dibuat</h1>
              <h2 className=" text-md text-white mx-20 text-center md:text-3xl mb-6"> Saya senang menciptakan desain yang ceria <br/> untuk menarik mata client.</h2>
            </div>
            <InfiniteScroll />
          </div>
        </div>
    )
}

export default Section2;