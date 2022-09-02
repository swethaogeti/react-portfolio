import React, { useState } from "react";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";

import EditIcon from "@material-ui/icons/Edit";

import AssessmentIcon from "@material-ui/icons/Assessment";
import PersonIcon from "@material-ui/icons/Person";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Sidebar from "./Sidebar";
import { NavRow } from "./NavRow";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="p-4 sticky top-0  bg-white  flex justify-between">
      <h1 className="font-[700] text-blue-500 text-[1.7rem]">Swetha Ogeti</h1>
      <div className="flex space-x-4 hidden sm:inline-flex ">
        <a href="#projects">
          {" "}
          <NavRow Icon={ListAltIcon} title={"Projects"} />
        </a>
        <a href="#blogs">
          {" "}
          <NavRow Icon={EditIcon} title={"Blogs"} />
        </a>
        <a href="#skills">
          {" "}
          <NavRow Icon={AssessmentIcon} title={"Skills"} />
        </a>
        <a href="#contacts">
          {" "}
          <NavRow Icon={PersonIcon} title={"Contact"} />
        </a>
      </div>
      <div className="flex flex-col sm:hidden ">
        <MenuSharpIcon
          onClick={() => setSidebar(true)}
          className="relative text-[1.5rem] cursor-pointer"
        />
        {sidebar && <Sidebar setSidebar={setSidebar} />}
      </div>
    </div>
  );
};
