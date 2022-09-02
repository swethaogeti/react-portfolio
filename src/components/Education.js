import React from "react";

export const Education = () => {
  return (
    <div className="p-2">
      <h2 className="font-bold text-[1.3rem] sm:text-[1.5rem] py-4">
        Eduction
      </h2>
      <div className="flex items-center  space-x-3">
        <div className="space-y-1">
          <h2 className=" font-[500] sm:text-[1.3rem] text-[1rem]">
            B-Tech in Computer Science Engineering
            <p className="text-[.9rem] ">(2018-2022) </p>
          </h2>

          <h2 className="font-[500] text-gray-600">
            Avanthi Institute of Engineering and technology,HYD.
          </h2>
        </div>
        <img
          src="https://www.facultyads.com/wp-content/uploads/2019/05/Avanthi-Group-of-Colleges.png"
          className="w-24 h-24"
        ></img>
      </div>
    </div>
  );
};
