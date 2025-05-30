"use client";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPlayer = () => {
  return (
    <div className="player-wrapper absolute z-20">
      <ReactPlayer
        url="/resource/video/intro.mp4" // ganti dengan path video yang sesuai
        controls={true}   // tampilkan control play/pause dll
        width="100%"      // biar responsif
        height="auto"
      />
    </div>
  );
};

export default VideoPlayer;
