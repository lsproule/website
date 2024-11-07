"use client";
import { motion } from "framer-motion";
import { Stars } from "@/components/app";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-30% from-[#1a1a2e] via-[#05031455] to-black ">
      <Stars />
      <div className="absolute inset-0 flex items-center pb-40 justify-center">
        <div className="md:mx-32 lg:mx-64 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex"
          >
            <h1 className="text-3xl lg:text-7xl  w-full  md:text-2xl  font-bold text-left px-4 pb-1 text-white">
              Hi, I&apos;m Lucas Sproule
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className=" md:3/5  mx-auto"
          >
            <h2 className="text-3xl px-5 md:text-6xl lg:text-7xl font-bold  md:px-4 pb-1 bg-gradient-to-br to-[#1EE4A2] from-[#5B78F9]  bg-clip-text text-transparent">
              DevOps Engineer
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            <h2 className="text-2xl front-bold text-white text-center px-4"></h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};