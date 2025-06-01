import React, { useEffect } from 'react';

const Section1 = () => {
    useEffect(() => {
        const handleScroll = () => {
            const parallax = document.querySelector(".parallax");
            if (parallax) {
                const scrollPosition = window.scrollY;
                const scale = Math.max(0.7, 1 - scrollPosition / 1500); 
                const opacity = Math.max(0.3, 1 - scrollPosition / 200);
                parallax.style.transform = `translateY(${scrollPosition * 0.5}px) scale(${scale})`;
                parallax.style.opacity = opacity;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


// ===============================================================================================
    // tiati kalo costume ntar ngerusak margin padding💀
// ===============================================================================================

    return (
        <>
            <img className="max-w-[400px] md:w-[600px] md:max-w-[600px] parallax mx-auto" src="/resource/tittle/azero-design.svg" />
            <div className="relative flex justify-center mt-10">
                <img src="/resource/background/background-atas.svg" />
                <img className="absolute z-10 md:max-w-[600px] md:mt-[10%] mt-12" src="/resource/background/shape-lancip.svg" />
                <img className="absolute animate-float-wind mt-40 z-20 md:mt-[20%] max-w-[300px] sm:max-w-[550px] md:w-[650px]" src="/resource/background/background-video.svg" />
            </div>
        </>
    )
}

export default Section1;