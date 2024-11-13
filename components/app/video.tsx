"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export const Video = () => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);

  const playVideo = () => {
    if (!vidRef.current) return;
    if (!playing) {
      vidRef.current.play();
      setPlaying(true);
      return;
    }
    vidRef.current.pause();
    setPlaying(false);
  };

  return (
    <motion.video
      ref={vidRef}
      className="w-full aspect-video	 h-1/2 object-cover  md:rounded-xl"
      loop
      muted
      autoPlay
      style={{ filter: "grayscale(0%)" }}
      whileInView={{
        filter: ["grayscale(60%)", "grayscale(0%)"],
        transition: { duration: 1 },
      }}
      onClick={playVideo}
    >
      <source src="/videos/video.mp4" type="video/mp4" /> 
      <source src="/videos/video.ogv" type="video/ogv" /> 
    </motion.video>
  );
};
