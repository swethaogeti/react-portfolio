import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PersonIcon from "@material-ui/icons/Person";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { NavRow } from "./NavRow";
const Sidebar = ({ setSidebar }) => {
  return (
    <div
      className="bg-white  h-screen absolute top-0 right-0 w-[50%] flex flex-col items-end md:hidden
        "
    >
      <div className="p-3">
        <ClearIcon
          className="cursor-pointer"
          onClick={() => setSidebar(false)}
        />
      </div>
      <div className="h-screen flex items-center justify-center flex-col space-y-2 w-full">
        <div>
          <a href="#projects" onClick={() => setSidebar(false)}>
            {" "}
            <NavRow Icon={ListAltIcon} title={"Projects"} />
          </a>
          <a href="#blogs" onClick={() => setSidebar(false)}>
            {" "}
            <NavRow Icon={EditIcon} title={"Blogs"} />
          </a>
          <a href="#skills" onClick={() => setSidebar(false)}>
            {" "}
            <NavRow Icon={AssessmentIcon} title={"Skills"} />
          </a>
          <a href="#contacts" onClick={() => setSidebar(false)}>
            {" "}
            <NavRow Icon={PersonIcon} title={"Contact"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
