import React from "react";
import { projectsData } from "../data/projectsData";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className=" p-2" id="projects">
      <h2 className="font-bold text-[1.3rem] sm:text-[1.5rem] py-4">
        Projects
      </h2>
      <div className="space-y-2">
        {projectsData.map((item) => {
          return <ProjectCard item={item} />;
        })}
      </div>
    </div>
  );
};
