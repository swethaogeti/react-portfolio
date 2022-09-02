import React from "react";
import { skillsData } from "../data/skillsData";

export const Skills = () => {
  return (
    <div className="p-2">
      <h2 className="font-bold text-[1.3rem] sm:text-[1.5rem] py-4">Skills</h2>

      <div className="flex flex-wrap p-2 items-center space-x-4 space-y-4">
        {skillsData.map((item) => {
          return (
            <img
              src={item.icon}
              key={item.id}
              className="sm:w-14 sm:h-14 w-12 h-12"
            ></img>
          );
        })}
      </div>
    </div>
  );
};
