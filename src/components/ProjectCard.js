import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
export const ProjectCard = ({ item }) => {
  return (
    <div className="w-full flex flex-wrap sm:flex-nowrap shadow-md p-2 space-y-2">
      <div className="space-y-2">
        <h1 className="font-bold text-[1.5rem] sm:text-[1.7rem] text-blue-600">
          {item.title}
        </h1>
        <div className="flex items-center space-x-2">
          <a href={item.demo} target="_blank">
            <LaunchIcon
              className="
          !text-[1.9rem]  text-gray-900"
            />
          </a>
          <a href={item.github} target="_blank">
            <GitHubIcon
              className="
          !text-[1.6rem]  text-gray-900"
            />
          </a>
        </div>

        <p className="text-[.9rem] sm:text-[1rem] p-1 font-medium ">
          {item.about}
        </p>

        <div className=" p-2 flex flex-wrap items-center sm:flex-nowrap space-x-2">
          {item.tags.map((item) => {
            return <p className="btn">{item}</p>;
          })}
        </div>
      </div>
      <img
        src={item.image}
        className="max-w-[20rem] sm:max-w-[22rem] md:max-w-[26rem] object-contain mx-auto"
      ></img>
    </div>
  );
};
