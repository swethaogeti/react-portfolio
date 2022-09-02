import React from "react";
import heroImg from "../images/HeroImg.png";
export const Hero = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap  justify-between flex-col-reverse md:flex-row">
      <div className="flex flex-col items-start justify-start   max-w-full   p-2 mx-auto">
        <h2 className=" text-[.9rem] font-bold ">Hi, my name is</h2>
        <h1 className="sm:text-[3.5rem] text-[1.7rem] font-bold text-blue-500">
          Swetha ogeti.
        </h1>
        <h2 className=" sm:text-[2.7rem] font-bold text-[1.5rem] text-gray-700">
          I build things for the Web.
        </h2>
        <p className="sm:leading-8 sm:text-[1.1rem] font-[600] text-gray-800 pt-4">
          I'm
          <span className="text-blue-500 font-bold">
            {" "}
            a Frontend Web Developer{" "}
          </span>
          specialized in building responsive web apps. My main focus these days
          is building excellent user experienced web apps. I'm always open to
          learning new things and can reconcile new tech stack according to the
          reqirement.{" "}
        </p>
      </div>
      <img
        src={heroImg}
        className="max-w-[20rem] sm:max-w-[24rem] md:max-w-[26rem] mx-auto"
      ></img>
    </div>
  );
};
