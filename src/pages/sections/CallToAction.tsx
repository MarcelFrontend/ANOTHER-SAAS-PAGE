import { motion } from "framer-motion";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import cog from "@/assets/images/helix2.png";
import diagram from "@/assets/images/emojistar.png";

export default function CallToAction() {
  return (
    <section className="flex items-center justify-center flex-col overflow-hidden md:py-36">
      <div className="relative">
        <SectionHeader
          main="Get instant access"
          mainClasses="max-w-full text-5xl"
          p="Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts."
          pClasses="max-w-[23rem] md:max-w-md xl:max-w-5xl"
        />
        <div className="flex justify-center flex-col md:flex-row gap-3 mt-7 lg:mt-10">
          <input
            type="text"
            className="md:text-xl xl:text-4xl py-2.5 md:py-2 xl:py-4 px-3 rounded-lg bg-[#323332] placeholder:text-gray-400"
            placeholder="example@.com"
          />
          <Button text="Get access" style="py-2 xl:text-3xl lg:font-bold" />
        </div>
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 5,
            repeatType: "reverse",
          }}
          src={diagram.src}
          className="hidden md:block lg:h-96 absolute -top-32 -left-96 -z-10"
          loading="lazy"
        />
        <motion.img
          initial={{ y: -30 }}
          animate={{ y: -10 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 3,
            repeatType: "reverse",
          }}
          src={cog.src}
          className="hidden md:block lg:h-96 absolute top-0 lg:top-4 -right-80 lg:-right-96 -z-10"
          loading="lazy"
        />
      </div>
    </section>
  );
}
