"use client";
import { Stars } from "@/components/app";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface WorkExperience {
  company: string;
  title: string;
  duration: string;
  responsibilities: string[];
}

export default function Page() {
  const experiences: WorkExperience[] = [
    {
      company: "Deloitte",
      title: "Site Reliability Engineer",
      duration: "Feb 2022 – Jan 2024",
      responsibilities: [
        "Managed and maintained cloud infrastructure for various clients with Terraform",
        "Mitigated database issues by restoring from backups and creating multi-AZ RDS instances for product services",
        "Developed CI/CD pipelines in Jenkins to automate deployment processes",
        "Enhanced AWS Lambda functions with DataDog integration to monitor usage and failure rates",
        "Implemented Istio service mesh to monitor and secure microservices",
        "Extracted and analyzed metrics from service mesh via Prometheus, including active connections and custom metrics",
        "Created Terraform-based alerts in DataDog to monitor SLAs",
        "Automated database backup and restore processes with custom scripts",
        "Designed a new database for BI analytics to prevent impact on production environments",
        "Anonymized data to ensure privacy and compliance, removing protected fields",
      ],
    },
    {
      company: "Blue Apron",
      title: "Site Reliability Engineer",
      duration: "Jan 2021 – Jan 2022",
      responsibilities: [
        "Managed Juniper network infrastructure using a custom Golang service for port configuration",
        "Set up on-premise Kubernetes clusters to reduce development costs",
        "Created CI/CD pipelines for deployment to on-premise Kubernetes clusters",
        "Developed a Golang service for managing Juniper network devices",
        "Improved the development environment by migrating to cloud and integrating Skaffold",
        "Participated in on-call rotations and contributed to disaster recovery planning",
        "Created and tested a chaos engineering plan to assess system resilience",
      ],
    },
    {
      company: "Active International",
      title: "DevOps Engineer",
      duration: "May 2020 – Jan 2021",
      responsibilities: [
        "Managed Kubernetes environments and infrastructure provisioning",
        "Generated cost management and forecasting reports",
        "Optimized MongoDB queries with parallelization and custom indexing, improving data fetching speed by 10x",
        "Migrated on-premise SFTP servers to Azure, with files stored in blob storage",
        "Established CI/CD pipelines for Python-based web applications",
      ],
    },
  ];

  return (
    <main className="pt-10  relative min-h-screen w-full  overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-30% from-[#1a1a2e] via-[#05031455] to-black ">
      <Stars></Stars>
      <motion.h1
        className="text-4xl font-bold my-8 text-center"
        initial={{ rotateX: 90 }}
        whileInView={{ rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      >
        Work Experience
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card key={index} className="dark shadow-lg">
              <CardHeader>
                <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <CardTitle className="text-2xl font-semibold">
                    {exp.company}
                  </CardTitle>
                </motion.div>
                <p className="text-xl text-gray-200">{exp.title}</p>
                <p className="text-sm text-gray-400">{exp.duration}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      className="text-gray-400"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                    >
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="my-6 text-center">
        <Link
          href="https://github.com/lsproule/latex-resume/raw/main/build/lucas.pdf"
          className="bg-white hover:bg-neutral-200 text-black font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Resume
        </Link>
      </div>
    </main>
  );
}
