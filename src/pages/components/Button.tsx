import React from "react";

const Button = ({ text, style }: { text: string; style?: string }) => {
  return (
    <button
      className={`px-3 py-1 bg-white text-black hover:bg-gray-300 hover:scale-105 active:scale-95 rounded-lg transition-colors transition-transform md:text-md lg:text-2xl xl:text-3xl z-10 ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
