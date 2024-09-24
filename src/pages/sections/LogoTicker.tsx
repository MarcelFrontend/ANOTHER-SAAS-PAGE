"use client";
import acmeLogo from "@/assets/images/acme.png";
import quantumLogo from "@/assets/images/quantum.png";
import echoLogo from "@/assets/images/echo.png";
import celestialLogo from "@/assets/images/celestial.png";
import pulseLogo from "@/assets/images/pulse.png";
import apexLogo from "@/assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: acmeLogo,
    alt: "Acme Logo",
  },
  {
    src: quantumLogo,
    alt: "Quantum Logo",
  },
  {
    src: echoLogo,
    alt: "Echo Logo",
  },
  {
    src: celestialLogo,
    alt: "Celestial Logo",
  },
  {
    src: pulseLogo,
    alt: "Pulse Logo",
  },
  {
    src: apexLogo,
    alt: "Apex Logo",
  },
];

export default function LogoTicker() {
  return (
    <div className="relative -top-px md:top-0 w-screen h-full bg-black pb-5 pt-10 md:pb-20 md:pt-32 lg:mt-36 overflow-x-hidden">
      <div className="container flex items-center flex-col gap-2 md:gap-5 xl:gap-8 text-center">
        <span className="max-w-xs md:max-w-2xl lg:text-2xl xl:text-3xl text-white  ">
          Trusted by the world&apos;s most innovative teams
        </span>
        <div className="flex flex-1 [mask-image:linear-gradient(to_right,transparent_5%,black,transparent_95%)]">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex items-center gap-5 flex-none md:gap-14 pr-5 md:pr-14"
          >
            {[...images, ...images].map((img, index) => (
              <Image
                width={85}
                height={85}
                src={img.src}
                alt={img.alt}
                key={index}
                className="md:h-10 lg:h-12 xl:h-16 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
