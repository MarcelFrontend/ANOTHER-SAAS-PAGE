"use client";
import Head from "next/head";
import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import LogoTicker from "./sections/LogoTicker";
import Footer from "./sections/Footer";
import CallToAction from "./sections/CallToAction";
import FAQs from "./sections/FAQs";
import ProductShowcase from "./sections/ProductShowcase";
import Features from "./sections/Features";
import Sun from "@/assets/icons/sun-regular.svg";
import Moon from "@/assets/icons/moon-regular.svg";
import { useTheme } from "next-themes";

const Home = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <Head>
        <title>Business Saas page</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Header />
          <Hero />
          <LogoTicker />
          <Features />
          <ProductShowcase />
          <FAQs />
          <CallToAction />
        </div>
        <Footer />
      </div>

      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="fixed bottom-5 left-[84%] sm:left-[90%] md:left-[93%] lg:left-[95%] bg-gray-300 dark:bg-purple-500 transition-colors duration-100 text-2xl md:text-3xl rounded-lg px-3 border-2 border-black dark:border-gray-200  
        dark:px-[7px] md:px-[11px] dark:md:px-[7.5px] lg:px-[12px] py-2 z-10"
      >
        {currentTheme === "dark" ? (
          <Sun className="h-7 md:h-9 lg:h-12 w-auto" />
        ) : (
          <Moon className="h-7 md:h-9 lg:h-12 w-auto " />
        )}
      </button>
    </>
  );
};

export default Home;
