import { Stars } from "@/components/app";
import React from "react";

export default function Page() {
  return (
    <main className="pt-10 relative min-h-screen w-full h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-30% from-[#1a1a2e] via-[#05031455] to-black ">
      <Stars></Stars>
      <div>pricing</div>
    </main>
  );
}
