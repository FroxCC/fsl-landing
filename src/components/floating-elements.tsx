"use client";

import { Bot } from "lucide-react";
import Image from "next/image";

export function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Floating Bot Icon */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 md:bottom-16 md:right-36">
        <div className="animate-bounce-slow">
          <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 items-center justify-center">
            {/* <Bot className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-blue-500 drop-shadow-[0_0_40px_rgba(59,130,246,0.9)]" /> */}
            <Image
              src={"/logos/Fromsoftware_Labs_alone.png"}
              alt="fslLogo_alone"
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-blue-500 drop-shadow-[0_0_40px_rgba(59,130,246,0.9)]"
              width={100}
              height={100}
            />
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-lg sm:blur-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
