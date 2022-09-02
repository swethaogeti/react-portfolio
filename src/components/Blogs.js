import React from "react";
import { blogsData } from "../data/blogsData";

export const Blogs = () => {
  return (
    <div className="p-2" id="blogs">
      <h2 className="font-bold text-[1.3rem] sm:text-[1.5rem] py-4">Blogs</h2>
      <div className="flex space-y-2 flex-wrap items-center justify-center space-x-2">
        {blogsData.map((item) => {
          return (
            <>
              <div className="flex flex-col">
                <img
                  src={item.image}
                  key={item.id}
                  className="w-[20rem] h-[14rem] m-2 cu"
                ></img>
                <a href={item.blog} target="_blank">
                  <h2 className="cursor-pointer text-blue-500 font-bold text-center">
                    {item.name}
                  </h2>
                </a>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
