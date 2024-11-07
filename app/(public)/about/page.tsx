"use client";
import { Stars } from "@/components/app";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="pt-10 relative pt-16 min-h-screen w-full h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-30% from-[#1a1a2e] via-[#05031455] to-black ">
      <Stars></Stars>
      <motion.div
        className="w-full h-full flex items-center justify-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="w-full dark max-w-4xl shadow-lg">
          <CardHeader className="flex flex-col sm:flex-row items-center gap-4 pb-4">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-white shadow-lg">
                <AvatarImage
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile picture"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </motion.div>
            <motion.div
              className="text-center sm:text-left"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <CardTitle className="text-3xl sm:text-4xl font-bold">
                Lucas Sproule
              </CardTitle>
              <p className="text-lg text-muted-foreground mt-2">
                Devops Engineer & SRE
              </p>
            </motion.div>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <motion.p
              className="my-4"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hello! I&apos;m Lucas Sproule, a passionate DevOps Engineer and
              SRE dedicated to the art of creating resilient and efficient
              systems. With a solid foundation in cloud computing and recent AWS
              Solutions Architect certification, I thrive on building scalable
              infrastructures and seamless developer experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My journey in technology has been shaped by a genuine love of
              learning and exploring. From early experimentation with code to
              crafting complex deployments, I&apos;ve grown into a
              problem-solver who values both precision and creativity. My
              expertise spans cloud automation, observability, and
              infrastructure-as-code, yet I&apos;m always eager to tackle new
              challenges and expand my skillset.
            </motion.p>
            <motion.p
              className="my-4"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Beyond the digital world, I&apos;m an avid traveler and lifelong
              learner who finds inspiration in the diversity of experiences and
              cultures. I speak Spanish and enjoy connecting with new places and
              people, finding that these experiences often influence my approach
              to work in unexpected ways. Whether I&apos;m exploring a mountain
              trail or diving into a new technology, I aim to bring a
              thoughtful, well-rounded perspective to everything I do.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I&apos;m always open to new ideas, collaborations, and meaningful
              discussions. Feel free to reach out if you&apos;d like to
              connect—whether it&apos;s about technology, travel, or the next
              big project!
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
