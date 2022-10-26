import React from "react";
import profilePic from "../assets/profile_pic.JPG";
import cover from "../assets/cover.jpg";
import useAutoTypingTexts from "../hooks/useAutoTypingTexts";
import About from "../pages/sections/About";
import Home from "../pages/sections/Home";
import Skills from "../pages/sections/Skills";
import Resume from "../pages/sections/Resume";
import niyontronLogo from "../assets/niyontron.svg";
import Protfolio from "../pages/sections/Protfolio";
import Contact from "../pages/sections/Contact";

const temp = [
  { logo: niyontronLogo, link: "" },
  { logo: niyontronLogo, link: "" },
  { logo: niyontronLogo, link: "" },
  { logo: niyontronLogo, link: "" },
  { logo: niyontronLogo, link: "" },
  { logo: niyontronLogo, link: "" },
];
const Body = () => {
  const name = "Mozharul Haq";
  const aboutText =
    "Self-motivated and passionate programmer with a Computer Science and Engineering bachelor's degree. I have worked on various projects using React, Next.js, Python, Flutter, C#. I taught my self the basics of Machine Learning and Data Science. I am currently working as a Freelancer. I am always looking for new opportunities to learn and grow.";

  const autoText = useAutoTypingTexts({
    strings: ["a Machine learning enthusiast", "a Softwere Engineer"],
  });

  return (
    <div className="flex-1 flex-col overflow-y-auto">
      <img
        src={cover}
        alt="cover"
        className="absolute -z-20 overflow-clip object-cover h-screen w-full"
      />
      <Home name={name} autoText={autoText} />
      <About aboutText={aboutText} profilePic={profilePic} />
      <Skills />
      <Resume />
      <Protfolio projects={temp} />
      <Contact />
    </div>
  );
};

export default Body;
