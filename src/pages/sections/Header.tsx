"use client";
import logo from "@/assets/images/logosaas.png";
import Button from "../components/Button";
import Menu from "@/assets/icons/menu.svg";
import { useCycle } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Header() {
  const linkStyles =
    "dark:hover:text-white hover:text-white active:scale-95 transition-colors duration-200 text-2xl md:text-xs md:text-md lg:text-2xl xl:text-3xl";

  const [showMenu, toggleShowMenu] = useCycle(true, false);

  useEffect(() => {
    if (window.innerWidth > 767) {
      toggleShowMenu(0);
    } else {
      toggleShowMenu(1);
    }
  }, []);

  const navVariants = {
    open: {
      opacity: 1,
      y: 0,
      display: "flex",
      transition: {
        duration: 0.4,
      },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transitionEnd: {
        display: "none",
        PointerEvent: "none",
      },
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div
        id="top"
        className="flex items-center justify-center gap-2 py-2 bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd98,#c2f0b1,#2fd8fe)] text-black"
      >
        <span className="hidden md:block text-xs lg:text-2xl">
          Introducing a completly redesigned interface <b>—</b>
        </span>
        <span className="underline underline-offset-2 text-sm lg:text-2xl">
          Explore the demo
        </span>
      </div>
      <header
        className="sticky -top-px flex items-center justify-between px-5 md:px-10 py-1.5 lg:py-2.5 
      z-20 bg-purple-950 dark:bg-black/95 dark:md:bg-black/75 backdrop-blur-sm transition-colors duration-[2s]"
      >
        <div className="relative z-20">
          <div className="absolute inset-0 top-[2px] bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd98,#c2f0b1,#2fd8fe)] blur-sm rounded-md -m-px -z-10" />
          <a href="#top">
            <img
              src={logo.src}
              alt="logo"
              loading="lazy"
              className="h-10 lg:h-12 xl:h-16 w-auto cursor-pointer hover:scale-105 active:scale-95 transition-transform"
            />
          </a>
        </div>
        <motion.nav
          initial="closed"
          animate={showMenu ? "open" : "closed"}
          variants={navVariants}
          className="md:flex flex-col md:flex-row max-[768px]:absolute top-[42.5px] left-0 md:relative md:top-auto w-full md:w-auto items-center gap-4 dark:bg-black/85 dark:md:bg-transparent bg-gray-950/90 md:bg-transparent py-4 md:p-0 dark:text-gray-400 text-gray-300 -z-10 -mt-px"
        >
          <a className={linkStyles} href="#features">
            Features
          </a>
          <a className={linkStyles} href="#product">
            Product
          </a>
          <a className={linkStyles} href="#faqs">
            FAQs
          </a>
          <Button text="Get for free" style="text-xl" />
        </motion.nav>

        <Menu
          onClick={() => toggleShowMenu()}
          className="h-9 md:hidden w-auto p-1.5 border border-gray-600 rounded-md z-20"
        />
      </header>
    </>
  );
}
