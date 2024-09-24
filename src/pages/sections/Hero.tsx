"use client";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import messIng from "@/assets/images/message.png";
import cursorImg from "@/assets/images/cursor.png";
import Arrow from "@/assets/icons/arrow-w.svg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative mt-1 md:mt-7 bg-gradient-to-t from-purple-500 to-transparent overflow-hidden">
      <div className="relative container h-[80vh] md:h-[75vh] flex items-center justify-center flex-col gap-5 md:gap-7 pb-16 md:py-16 lg:pb-28 lg:pt-10 z-10">
        <div className="border border-gray-500 px-2 py-0.5 rounded-md md:text-lg xl:text-2xl">
          <motion.span
            animate={{ backgroundPositionX: "200%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 2,
              repeatType: "loop",
            }}
            className="text-transparent bg-clip-text dark:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd98,#c2f0b1,#2fd8fe)] bg-[linear-gradient(to_right,#f53fff,#f835a7,#e29700,#2eab00,#00b7e0)] [background-size:200%]"
          >
            Version 2.0 is here
          </motion.span>
          <span className="ml-4 dark:text-white text-black hover:underline underline-offset-1 cursor-pointer group">
            Read More
            <Arrow className="xl:h-9 xl:w-9 inline group-hover:-rotate-45 transition-transform" />
          </span>
        </div>

        <SectionHeader
          main="One Task at a Time"
          mainClasses="md:max-w-xl xl:max-w-full md:text-6xl lg:max-w-4xl lg:text-8xl xl:text-9xl"
          p="Celebrate the joy of accomplishment with an app designed to track your
            progress, motivate your efforts, and celebrate your successes."
          pClasses="md:max-w-lg lg:max-w-3xl xl:max-w-5xl lg:text-2xl xl:text-3xl px-2 md:px-0"
        />
        <Button text="Get for free" />
        <motion.img
          drag
          dragConstraints={{ left: -100, right: 50, top: -50, bottom: 50 }}
          initial={{ y: 0 }}
          animate={{ y: 25 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 3,
            repeatType: "reverse",
          }}
          src={cursorImg.src}
          className="hidden md:block h-60 lg:h-auto xl:h-[25rem] absolute -left-[10%] xl:-left-5 lg:left-20 top-20 xl:top-52"
        />
        <motion.img
          drag
          dragConstraints={{ left: -20, right: 100, top: -50, bottom: 100 }}
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 3,
            repeatType: "reverse",
          }}
          src={messIng.src}
          className="hidden md:block h-60 lg:h-auto xl:h-[25rem] absolute -right-[5%] bottom-11 lg:right-16 xl:-right-10 lg:top-52 xl:top-1/2"
        />
      </div>
      <div className="absolute h-[80%] sm:h-[90%] md:h-[50rem] lg:h-[60rem] xl:h-[60rem] w-[140vw] sm:w-[120vw] md:w-[120vw] xl:w-[110vw] rounded-[100%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-140px)] md:top-[calc(100%-120px)] lg:top-[calc(100%-130px)] xl:top-[calc(100%-150px)] border-t-2 border-purple-500" />
    </section>
  );
}
