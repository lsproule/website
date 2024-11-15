import React from 'react'


export function Services() {
  return (

    <div className="flex flex-col md:items-end">
      <h4 className="text-base md:text-lg font-semibold mb-2 bg-gradient-to-bl from-[#5B78F9]  to-[#1EE4A2] bg-clip-text text-transparent">
        Services
      </h4>

      <span className="text-base md:text-lg  hover:text-indigo-400 transition-colors duration-300">
        CI/CD Automation Solutions
      </span>

      <span className="text-base md:text-lg  hover:text-indigo-400 transition-colors duration-300">
        Kubernetes Management
      </span>
      <span className="text-base md:text-lg  hover:text-indigo-400 transition-colors duration-300">
        Continuous Integration & Monitoring
      </span>
      <span className="text-base md:text-lg  hover:text-indigo-400 transition-colors duration-300">
        Cloud Migration Services
      </span>
      <span className="text-base md:text-lg  hover:text-indigo-400 transition-colors duration-300">
        Security & Compliance Automation
      </span>
      <span className="text-base md:text-lg  hover:text-indigo-400 transition-colors duration-300">
        Infrastructure as Code
      </span>
      <span className="text-base md:text-lg  hover:text-indigo-400 transition-colors duration-300">
        Backend development
      </span>
    </div>
  )
}
