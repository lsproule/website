import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

export function TextColor({ children }: Props) {
  return (
    <div className="w-full sm:w-4/5 md:w-3/4 px-4 sm:px-6 md:px-8 mx-auto flex justify-center items-center mt-24 md:mt-32">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-pretty bg-gradient-to-br from-[#5B78F9]  to-[#1EE4A2] bg-clip-text text-transparent"
      >
        {children}
      </motion.p>
    </div>
  );
}
