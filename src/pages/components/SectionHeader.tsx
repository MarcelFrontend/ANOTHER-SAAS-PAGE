import React from "react";

interface props {
  main: string;
  mainClasses: string;
  p?: string;
  pClasses?: string;
}

export default function SectionHeader({
  main,
  mainClasses,
  p,
  pClasses,
}: props) {
  return (
    <div className="flex items-center text-center flex-col gap-3">
      <span
        className={`font-bold text-4xl max-w-sm md:max-w-none text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-[#9000ff] dark:to-[#9811ff] md:text-6xl lg:text-8xl xl:text-9xl xl:pb-2 ${mainClasses}`}
      >
        {main}
      </span>
      <p
        className={` ${pClasses} lg:max-w-3xl lg:text-2xl xl:text-3xl px-2 md:px-0 max-w-xs text-sm text-gray-900 dark:text-gray-300`}
      >
        {p}
      </p>
    </div>
  );
}
