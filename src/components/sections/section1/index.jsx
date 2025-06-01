import React, { useEffect } from 'react';

const Section1 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector(".parallax");
      const videoBg = document.querySelector(".animate-float-wind");
      const scrollPosition = window.scrollY;
      const isXlScreen = window.innerWidth >= 1280; // Breakpoint xl Tailwind (1280px)

      // Efek parallax untuk elemen .parallax (berlaku di semua ukuran layar)
      if (parallax) {
        const scale = Math.max(0.7, 1 - scrollPosition / 1500);
        const opacity = Math.max(0.3, 1 - scrollPosition / 200);
        parallax.style.transform = `translateY(${scrollPosition * 0.5}px) scale(${scale})`;
        parallax.style.opacity = opacity;
      }

      // Konfigurasi animasi, sticky, dan stop sticky (hanya untuk layar xl ke atas)
      if (videoBg && isXlScreen) {
        // Pengaturan yang bisa disesuaikan
        const animationStart = 0; // Ketinggian scroll untuk mulai animasi (px)
        const triggerPoint = 562; // Ketinggian scroll untuk sticky (px)
        const stopPoint = 2224; // Ketinggian scroll untuk berhenti sticky (px)
        const direction = 'left'; // Arah: 'left', 'right', 'up', 'down', atau kombinasi seperti 'up-left'
        const startPosition = { x: 0, y: 0 }; // Koordinat awal (X, Y) relatif terhadap tengah
        const endPosition = { x: 327, y: 20 }; // Koordinat tujuan sebelum sticky
        const stickyPosition = { x: -window.innerWidth / 2 + 327, y: 20 }; // Koordinat sticky
        const animationSpeed = 2; // Kecepatan animasi (semakin besar, semakin lambat)

        // Hitung posisi tengah dinamis berdasarkan lebar elemen
        const elementWidth = videoBg.offsetWidth;
        const centerX = 0; // Koordinat X relatif terhadap pusat elemen
        const centerY = parseFloat(getComputedStyle(videoBg).top); // Posisi Y awal dari CSS

        if (scrollPosition < animationStart) {
          // Sebelum animasi: posisi tengah
          videoBg.style.transform = `translate(${centerX}px, ${startPosition.y}px)`;
          videoBg.style.left = '50%';
          videoBg.style.top = 'auto';
          videoBg.classList.remove("sticky-xl", "stop-sticky");
        } else if (scrollPosition >= animationStart && scrollPosition < triggerPoint) {
          // Selama animasi: bergerak ke endPosition
          const progress = Math.min(1, (scrollPosition - animationStart) / (triggerPoint - animationStart));
          const currentX = startPosition.x + (endPosition.x - startPosition.x) * progress / animationSpeed;
          const currentY = startPosition.y + (endPosition.y - startPosition.y) * progress / animationSpeed;
          videoBg.style.transform = `translate(${currentX}px, ${currentY}px)`;
          videoBg.style.left = '50%';
          videoBg.style.top = 'auto';
          videoBg.classList.remove("sticky-xl", "stop-sticky");
        } else if (scrollPosition >= triggerPoint && scrollPosition < stopPoint) {
          // Saat sticky: gunakan stickyPosition
          videoBg.classList.add("sticky-xl");
          videoBg.classList.remove("stop-sticky");
          videoBg.style.left = `calc(50% + ${stickyPosition.x}px)`;
          videoBg.style.top = `${stickyPosition.y}px`;
        } else {
          // Setelah stopPoint: tetap di posisi terakhir
          videoBg.classList.remove("sticky-xl");
          videoBg.classList.add("stop-sticky");
          videoBg.style.left = `calc(50% + ${stickyPosition.x}px)`;
          videoBg.style.top = `${stickyPosition.y + (scrollPosition - stopPoint)}px`;
        }
      } else if (videoBg) {
        // Untuk layar di bawah xl: tetap di tengah
        videoBg.style.transform = 'translate(-50%, 0)';
        videoBg.style.left = '50%';
        videoBg.style.top = 'auto';
        videoBg.classList.remove("sticky-xl", "stop-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Jalankan sekali saat mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <img
        className="max-w-[400px] md:w-[600px] md:max-w-[600px] parallax mx-auto"
        src="/resource/tittle/azero-design.svg"
        alt="Azero Design"
      />
      <div className="relative flex justify-center mt-10">
        <img src="/resource/background/background-atas.svg" className='' alt="Background Atas" />
        <img
          className="absolute z-10 md:max-w-[600px] md:mt-[10%] mt-12"
          src="/resource/background/shape-lancip.svg"
          alt="Shape Lancip"
        />
        <img
          className="absolute animate-float-wind mt-40 z-20 md:mt-[20%] max-w-[300px] sm:max-w-[550px] md:w-[650px] left-1/2 -translate-x-1/2"
          src="/resource/background/background-video.svg"
          alt="Background Video"
        />
      </div>
    </>
  );
};

export default Section1;