"use client";
import { ArrowBigRightIcon } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Video,
  HeroSection,
  BentoGrid,
  TextColor,
  Services,
} from "@/components/app";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="justify-center items-center mx-auto">
        <HeroSection />
        <section className="border-t border-indigo-500 border-opacity-50 glow-border bg-gradient-to-t from-black via-[#05031455] to-[#1a1a2e]">
          <div className="w-full pointer-events-none sm:w-4/5 md:w-3/4 px-4 sm:px-6 md:px-8 mx-auto flex justify-center items-center mt-24 md:mt-32">
            <Marquee
              speed={"slow"}
              items={[
                {
                  sponsor: "/images/sponsors/Jenkins.svg",
                },
                {
                  sponsor: "/images/sponsors/terraform.svg",
                },
                {
                  sponsor: "/images/sponsors/Kubernetes.svg",
                },
                {
                  sponsor: "/images/sponsors/Prometheus.svg",
                },
                {
                  sponsor: "/images/sponsors/Git.svg",
                },
                {
                  sponsor: "/images/sponsors/Docker.svg",
                },
              ]}
            />
          </div>
          <div className="w-full sm:w-4/5 md:w-3/4 sm:px-6 md:px-8 mx-auto flex justify-center items-center mt-16 sm:mt-24 md:mt-32">
            <Video />
          </div>
          <TextColor>
            Accelerating team success with automation, scalable infrastructure,
            and resilient CI/CD pipelines. I empower teams to deliver faster,
            innovate continually, and thrive in the cloud.
          </TextColor>

          <div className="mt-32 sm:mt-40 md:mt-48 mx-auto h-auto w-full sm:w-4/5 md:w-3/4 px-4 sm:px-6 md:px-8">
            <div className="md:flex md:flex-row justify-between items-start">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-6 md:mb-0 md:mr-8 flex-1"
              >
                <h6 className="text-start text-base md:text-lg font-semibold bg-gradient-to-br from-[#5B78F9]  to-[#1EE4A2] bg-clip-text text-transparent mb-2">
                  Builted from the best
                </h6>
                <h3 className="text-start text-lg md:text-4xl mb-2">
                  Offering CI/CD Automation, Cloud Infrastructure Management,
                  and DevOps Consulting to streamline development, optimize
                  scalability, and enhance performance.
                </h3>
                <p className="text-gray-400 text-sm md:text-lg">
                  We offer complete DevOps solutions, including automated CI/CD
                  pipelines, cloud infrastructure management, and container
                  orchestration with Kubernetes. Using tools like Jenkins and
                  Terraform, we streamline development, enhance reliability, and
                  reduce deployment times, helping teams innovate faster and
                  deliver high-quality applications efficiently.
                </p>
              </motion.div>
              <Services />
            </div>
            <div className="rounded-sm relative h-[50vh] object-contain flex justify-center bg-transparent w-full bg-red-50 mt-14">
              <Image
                className="object-contain"
                priority={true}
                height={1000}
                width={1000}
                src="/images/devops.png"
                alt="Product image example"
              />
            </div>
            <div className="flex justify-center items-center mt-12">
              <Link href="/work">
                {" "}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                  whileHover={{ boxShadow: "0px 0px 8px rgb(255,255,255)" }}
                  className="flex bg-gradient-to-t from-[#242443] to-[#110a45] hover:from-[#110a45] hover:to-[#242443] px-3 py-2 rounded-md text-lg md:text-xl font-semibold text-white"
                >
                  See solutions
                  <ArrowBigRightIcon className="ml-2 mt-0.5" />
                </motion.div>
              </Link>
            </div>
          </div>

          <BentoGrid />

          <div className="w-full sm:w-4/5 md:w-3/4 px-4 sm:px-6 md:px-8 mx-auto  mt-24 md:mt-32">
            <div className="flex flex-col justify-center items-center">
              <span className="text-base md:text-lg text-cyan-400 font-semibold">
                Deploy your app
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold">Worldwide</h2>
            </div>
            <Globe />
          </div>
        </section>
      </main>
    </>
  );
}
