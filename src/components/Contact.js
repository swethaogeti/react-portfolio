import React from "react";
import { SocialLinks } from "../data/SocialLinks";

export const Contact = () => {
  return (
    <div className="p-2" id="contacts">
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
