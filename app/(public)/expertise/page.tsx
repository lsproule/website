"use client";
import { Stars } from "@/components/app";
import React, { ReactNode, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  description?: ReactNode;
  highlighted?: boolean;
  projects?: Array<{ name: string; link: string }>;
}

export default function Page() {
  const [mobile, setMobile] = useState<boolean>(false);
  useEffect(() => {
    function isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
    setMobile(isMobile());
  }, []);
  const skills: Skill[] = [
    {
      name: "Golang",
      level: "Advanced",
      description:
        "I have been using golang for awhile. I wrote a C/C++ package manager.",
      highlighted: true,
      projects: [
        {
          name: "Frate Package Manager",
          link: "https://github.com/frate-dev/frate-go",
        },
      ],
    },

    {
      name: "Next.js",
      level: "Intermediate",
      description:
        "I built this website with Next.js. I use Framer Motion and Shadcn. I also have Threejs for the World animation.",
      highlighted: true,
      projects: [
        {
          name: "Resume",
          link: "",
        },
      ],
    },

    {
      name: "Kubernetes",
      level: "Expert",
      description: (
        <>
          <div>5+ years of experience with Kubernetes</div>
          <div>
            <div>Written helm charts</div>
            <div>Setup istio and prometheus monitoring</div>
            <div>Setup Datadog monitoring</div>
          </div>
        </>
      ),
      highlighted: true,
      projects: [
        {
          name: "Frate Helm Charts",
          link: "",
        },
      ],
    },
    {
      name: "AWS",
      level: "Expert",
      description: (
        <>
          <div>5+ years experience with AWS.</div>
          <div>AWS Solutions Architect certificatied.</div>
          <div className="text-xs mt-2">
            IAM, S3, EC2, VPC, VPN, RDS, SQS, SNS, EKS, ECS, ECR,
            Athena, Redshift, Cloud Formation, Cloud Front, Elastic Beanstalk, API Gateway, Lambda, Kinesis,
            Config, OpsWork, AMI
          </div>
        </>
      ),
      highlighted: true,
    },
    {
      name: "Terraform",
      level: "Advanced",
      description: (
        <>
          <div>5+ years experience with Terraform.</div>
          <div>Deployed Infrastructure on multiple cloud providers</div>
          <div>Experience writing terraform modules</div>
        </>
      ),
      highlighted: true,
    },
    {
      name: "Github Actions",
      description:
        "Setup github actions to build frate cli for Windows, Mac, and Linux for both Amd64 and Arm64",
      projects: [
        {
          name: "Frate Package Manager",
          link: "https://github.com/frate-dev/frate-go/blob/main/.github/workflows/go.yaml",
        },
      ],
      level: "Advanced",
      highlighted: true,
    },
    { name: "Docker", level: "Advanced", highlighted: true },
    { name: "CI/CD", level: "Advanced", highlighted: true },
    { name: "Jenkins", level: "Advanced", highlighted: true },
    { name: "Python", level: "Advanced", highlighted: true },
    { name: "Helm", level: "Advanced", highlighted: true },
    { name: "Git", level: "Advanced", highlighted: true },
    { name: "SQL", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate"},
    { name: "MongoDB", level: "Intermediate" },
    { name: "Ansible", level: "Intermediate" },
    { name: "Istio", level: "Intermediate" },
    { name: "GraphQL", level: "Intermediate" },
    { name: "Ruby", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Rails", level: "Intermediate" },
    { name: "Kafka", level: "Intermediate" },
  ];
  return (
    <main className="pt-10  relative min-h-screen w-full h-auto overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-30% from-[#1a1a2e] via-[#05031455] to-black ">
      <Stars></Stars>
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-neutral-200 mt-8 mb-2"
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
        >
          My Expertise
        </motion.h1>
        <motion.h1
          className="text-xl font-bold text-center text-neutral-400 mb-12"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          (Resume below)
        </motion.h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-300 mb-6 mx-4  bg-gradient-to-br to-[#1EE4A2] from-[#5B78F9]  bg-clip-text text-transparent">
            Technologies & Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={
                    skill.highlighted
                      ? "border-primary dark h-full"
                      : "dark h-full"
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: mobile ? 0 : (index + 0.5) * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        {skill.name}
                        <Badge
                          variant={skill.highlighted ? "default" : "secondary"}
                        >
                          {skill.level}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                  </motion.div>
                  {(skill.description || skill.projects) && (
                    <CardContent className="h-full">
                      {skill.description && (
                        <>
                          <h4 className="font-semibold mb-2">Description:</h4>
                          <div className="mb-4">{skill.description}</div>
                        </>
                      )}
                      {skill.projects && (
                        <>
                          <h4 className="font-semibold mb-2">
                            Featured Projects:
                          </h4>
                          <ul className="list-disc list-inside">
                            {skill.projects.map((project, pIndex) => (
                              <li key={pIndex} className="mb-1">
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline inline-flex items-center"
                                >
                                  {project.name}
                                  <ExternalLink className="ml-1 h-3 w-3" />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center mb-6">
          <Link
            href="https://github.com/lsproule/latex-resume/raw/main/build/main.pdf"
            className="inline-flex bg-white text-black px-3 py-2 rounded-lg hover:bg-neutral-200 items-center"
            onClick={() => console.log("Download resume")}
          >
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Link>
        </section>
      </div>
    </main>
  );
}
