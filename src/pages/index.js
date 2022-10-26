import { useState } from "react";
import profilePic from "../assets/profile_pic.JPG";
import SideBar from "../layouts/SideBar";
import Body from "../layouts/Body";
import { FiMenu, FiX } from "react-icons/fi";
import React from "react";

const Resume = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div className="flex fixed w-full h-full select-none">
      <div
        className="h-10 w-10 z-10 right-7 top-7 fixed bg-blue-500 rounded-full justify-center items-center flex cursor-pointer"
        onClick={() => setSidebar(!sidebar)}
      >
        {!sidebar ? (
          <FiMenu className="stroke-white" />
        ) : (
          <FiX className="stroke-white" />
        )}
      </div>
      <SideBar sidebar={sidebar} profilePic={profilePic} />
      <Body />
    </div>
  );
};
export default Resume;
