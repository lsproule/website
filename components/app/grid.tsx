"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGridLayout, BentoGridItem } from "../ui/bento-grid";
import { TextHoverEffect } from "../ui/text-hover";
import {
  Code,
  Laptop,
  Rocket,
  Server,
  Smartphone,
  Brain,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BentoGrid() {
  return (
    <BentoGridLayout className="max-w-3/4 mt-12 mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGridLayout>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="rounded-2xl flex justify-center flex-1 w-full h-full min-h-[7rem] bg-gradient-to-br from-cyan-600 to-indigo-800 flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-gray-700 p-2 items-center space-x-2 bg-gray-800"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#5B78F9] to-indigo-600 flex-shrink-0" />
        <div className="w-full bg-gray-700 h-4 rounded-full" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-gray-700 p-2 items-center space-x-2 w-3/4 ml-auto bg-gray-800"
      >
        <div className="w-full bg-gray-700 h-4 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#5B78F9] to-indigo-600 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-gray-700 p-2 items-center space-x-2 w-2/3 bg-gray-800"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#5B78F9] to-indigo-600 flex-shrink-0" />
        <div className="w-full bg-gray-700 h-4 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: (i: number) => ({
      width: "100%",
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const codeLines = [
    { width: "70%", indent: 0 },
    { width: "90%", indent: 1 },
    { width: "60%", indent: 2 },
    { width: "80%", indent: 2 },
    { width: "50%", indent: 1 },
    { width: "75%", indent: 0 },
  ];
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileInView="hover"
      className="flex flex-1 w-full h-full min-h-[7rem] rounded-2xl bg-gradient-to-br from-[#1EE4A2] to-[#5B78F9] flex-col space-y-2 p-4"
    >
      {codeLines.map((line, i) => (
        <motion.div
          key={"code-line-" + i}
          custom={i}
          variants={variants}
          className="flex flex-row items-center"
        >
          <motion.div
            style={{
              width: line.width,
              marginLeft: `${line.indent * 1.5}rem`,
              height: "0.75rem",
            }}
            className={`rounded-full ${getLineColor(i)}`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

const getLineColor = (index: number) => {
  const colors = [
    "bg-cyan-100",
    "bg-cyan-200",
    "bg-cyan-200",
    "bg-cyan-300",
    "bg-cyan-400",
    "bg-cyan-400",
  ];
  return colors[index % colors.length];
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: 5,
        repeatType: "reverse",
      }}
      className="flex relative justify-center items-center flex-1 z-10 w-full h-full min-h-[6rem] rounded-xl flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #5B78F9, #1EE4A2, #1EE4A2, #5B78F9)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full flex items-center justify-center  rounded-2xl">
        <Image
          src="/images/cloud_operations.jpeg"
          alt="cloud operations"
          height="100"
          width="100"
          className="rounded-full z-50 h-18 w-18"
        />
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full rounded-2xl min-h-[7rem] bg-gradient-to-br from-[#1EE4A2] to-[#5B78F9] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-gray-800 p-2 border border-gray-700 flex flex-col items-center justify-center"
      >
        <Image
          src="/images/cicd.webp"
          alt="Web Design"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-gray-300 mt-4">
          CI/CD Pipelines
        </p>
        <p className="border border-gray-600 bg-gray-700 text-gray-300 text-xs rounded-full px-2 py-0.5 mt-4">
          Deploy
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-gray-800 p-4 border border-gray-700 flex flex-col items-center justify-center">
        <Image
          src="/images/terraform.webp"
          alt="Development"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-gray-300 mt-4">
          Infrastructure as Code
        </p>
        <p className="border border-gray-600 bg-gray-700 text-gray-300 text-xs rounded-full px-2 py-0.5 mt-4">
          Cloud Infrastructure
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-gray-800 p-4 border border-gray-700 flex flex-col items-center justify-center"
      >
        <Image
          src="/images/prometheus.webp"
          alt="Optimization"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-gray-300 mt-4">
          Application Monitoring
        </p>
        <p className="border border-gray-600 bg-gray-700 text-gray-300 text-xs rounded-full px-2 py-0.5 mt-4">
          Uptime
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 justify-center rounded-2xl w-full h-full min-h-[7rem] bg-gradient-to-br from-blue-800 to-indigo-800 flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-gray-700 p-2 items-start space-x-2 bg-gray-800"
      >
        <Image
          src="/images/go_code.png"
          alt="Code"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-gray-300">
          Streamline your cloud infrastructure with Kubernetes, Jenkins, and
          Terraform.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-gray-700 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-gray-800"
      >
        <p className="text-xs text-gray-300">Custom Deployment solutions.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#5B78F9] to-indigo-600 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonSix = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full rounded-2xl sm:max-h-[10rem] lg:max-h-[10rem] min-h-[6rem] bg-gradient-to-br from-cyan-600 to-indigo-800 items-center justify-center overflow-hidden"
    >
      <TextHoverEffect text="AI Web" />
    </motion.div>
  );
};

const SkeletonSeven = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full rounded-2xl min-h-[7rem] bg-gradient-to-br from-indigo-800 to-cyan-600 items-center justify-center overflow-hidden"
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hover: {
            y: [-10, 10],
            transition: {
              y: { duration: 1, repeat: Infinity, repeatType: "reverse" },
            },
          },
        }}
        className="relative w-24 h-24"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-indigo-600 opacity-50"
          variants={{
            initial: { scale: 1 },
            hover: {
              scale: [1, 1.2, 1],
              transition: { duration: 1, repeat: Infinity },
            },
          }}
        />
        <Shield className="w-full h-full text-white relative z-10" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Creative Web Design",
    description: (
      <span className="text-sm text-gray-400">
        create unique and attractive web designs that reflect your brand
        identity.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-2 lg:col-span-1",
    icon: <Laptop className="h-4 w-4 text-gray-400" />,
  },
  {
    title: "Custom Solutions",
    description: (
      <span className="text-sm text-gray-400">
        Develop custom deployment solutions to meet your specific needs.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-2 lg:col-span-1",
    icon: <Server className="h-4 w-4 text-gray-400" />,
  },
  {
    title: "Operations Optimization",
    description: (
      <span className="text-sm text-gray-400">
        Improve the speed and efficiency of deploying your website for an
        tighter release cycle.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-2 lg:col-span-1",
    icon: <Rocket className="h-4 w-4 text-gray-400" />,
  },
  {
    title: "Cross-Platform Development",
    description: (
      <span className="text-sm text-gray-400">
        Create deployment solutions that work perfectly on web, mobile, and
        desktop.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <Smartphone className="h-4 w-4 text-gray-400" />,
  },
  {
    title: "Full Stack Development",
    description: (
      <span className="text-sm text-gray-400">
        Build complete web applications, from frontend to backend.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-2 lg:col-span-1",
    icon: <Code className="h-4 w-4 text-gray-400" />,
  },
  {
    title: "Cybersecurity",
    description: (
      <span className="text-sm text-gray-400">
        Protect your applications and data with the latest security
        technologies.
      </span>
    ),
    header: <SkeletonSeven />,
    className: "md:col-span-2 lg:col-span-1",
    icon: <Shield className="h-4 w-4 text-gray-400" />,
  },
  {
    title: "Artificial Intelligence",
    description: (
      <span className="text-sm text-gray-400">
        Implement MLOps solutions to improve efficiency of deploying your
        machine learning models
      </span>
    ),
    header: <SkeletonSix />,
    className: "md:col-span-2",
    icon: <Brain className="h-4 w-4 text-gray-400" />,
  },
];
