import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

const Intro: React.FC = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (vidRef.current) {
      if (playVideo) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
    }
  };

  return (
    <div className="relative h-screen w-full">
      <video
        src={meal}
        ref={vidRef}
        className="w-full h-full object-cover"
        loop
        muted
        controls={false}
      />

      <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
        <div
          onClick={handleVideo}
          className="w-[100px] h-[100px] rounded-full border border-golden flex items-center justify-center cursor-pointer"
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
