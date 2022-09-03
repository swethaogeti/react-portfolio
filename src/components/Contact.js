import React from "react";
import { SocialLinks } from "../data/SocialLinks";
import resume from "../images/resume.pdf";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
export const Contact = () => {
  return (
    <div className="p-2" id="contacts">
      <a
        download
        href={resume}
        className="font-[600]  text-blue-600 text-[1.2rem]  py-4 bg-gray-100 rounded-md px-2"
      >
        Download Resume{" "}
        <ArrowDownwardIcon className="text-blue-500 !font-bold" />
      </a>

      <h2 className="font-bold text-[1.3rem] sm:text-[1.5rem] py-4">Contact</h2>
      <div className="flex space-x-2 space-y-2 items-center ">
        {SocialLinks.map((item) => {
          return (
            <a href={item.link} target="_blank">
              <img
                src={item.icon}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              ></img>
            </a>
          );
        })}
      </div>
    </div>
  );
};
