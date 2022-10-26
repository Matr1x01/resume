import React, { useRef, useState } from "react";
import useAutoTypingTexts from "../hooks/useAutoTypingTexts";
import content from "../config/content";
import config from "../config/config";
import {
  FiCode,
  FiFile,
  FiHome,
  FiLayout,
  FiMenu,
  FiMessageCircle,
  FiUser,
  FiX,
} from "react-icons/fi";
import SideBar from "../components/SideBar";
import { categories, projects } from "../config/projects";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Protfolio from "./sections/Protfolio";
import Contact from "./sections/Contact";
import profilePic from "../assets/profile_pic.JPG";
import cover from "../assets/cover.jpg";
import Resume from "./sections/Resume";
const inactiveMenuIconCss = "stroke-gray-300 h-6 w-6 my-auto";
const activeMenuIconCss = "stroke-blue-500 h-6 w-6 my-auto";

const ResumeSite = () => {
  const [sidebar, setSidebar] = useState(true);
  const autoText = useAutoTypingTexts({
    strings: content.autoTypingStrings,
    writingSpeed: config.autoTypingSpeed,
    deletingSpeed: config.autoDeletingSpeed,
    waitTime: config.autoWaitTime,
  });

  const menus = [
    {
      title: "Home",
      iconInactive: <FiHome className={inactiveMenuIconCss} />,
      iconActive: <FiHome className={activeMenuIconCss} />,
      ref: "#home",
    },
    {
      title: "About",
      iconInactive: <FiUser className={inactiveMenuIconCss} />,
      iconActive: <FiUser className={activeMenuIconCss} />,
      ref: "#about",
    },
    {
      title: "Skills",
      iconInactive: <FiCode className={inactiveMenuIconCss} />,
      iconActive: <FiCode className={activeMenuIconCss} />,
      ref: "#skills",
    },
    {
      title: "Resume",
      iconInactive: <FiFile className={inactiveMenuIconCss} />,
      iconActive: <FiFile className={activeMenuIconCss} />,
      ref: "#resume",
    },
    {
      title: "Protfolio",
      iconInactive: <FiLayout className={inactiveMenuIconCss} />,
      iconActive: <FiLayout className={activeMenuIconCss} />,
      ref: "#protfolio",
    },
    {
      title: "Contact",
      iconInactive: <FiMessageCircle className={inactiveMenuIconCss} />,
      iconActive: <FiMessageCircle className={activeMenuIconCss} />,
      ref: "#contact",
    },
  ];

  return (
    <div className="flex fixed w-full h-full">
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
      <SideBar
        menus={menus}
        name={content.name}
        sidebar={sidebar}
        profilePic={profilePic}
      />

      <div className="flex-1 flex-col overflow-y-auto">
        <img
          src={cover}
          alt="cover"
          className="absolute -z-20 overflow-clip object-cover h-screen w-full"
        />
        <div id="home">
          <Home name={content.name} autoText={autoText} />
        </div>
        <div id="about">
          <About profilePic={profilePic} content={content} />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="resume">
          <Resume />
        </div>

        <div id="protfolio">
          <Protfolio categories={categories} projects={projects} />
        </div>
        <div id="contact">
          <Contact
            location={`${content.address}, ${content.city}`}
            phoneNumber={content.phoneNumber}
            email={content.email}
          />
        </div>
      </div>
    </div>
  );
};
export default ResumeSite;
