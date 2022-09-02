import React from "react";

export const NavRow = ({ Icon, title }) => {
  return (
    <div className="flex items-center cursor-pointer  hover:bg-blue-100 p-1 rounded-md ">
      {Icon && <Icon className="group-hover:text-white" />}
      <h3 className="text-[1rem] font-[600]  text-gray-800 ">{title}</h3>
    </div>
  );
};
