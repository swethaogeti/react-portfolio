import React from "react";

export const Footer = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <h2 className="text-gray-800 font-[600]">Powered by </h2>
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        className="w-10 h-10 object-contain"
      ></img>
    </div>
  );
};
