import React from "react";
import profilePic from "../assets/profile_pic.JPG";
import cover from "../assets/cover.jpg";
import useAutoTypingTexts from "../hooks/useAutoTypingTexts";
import About from "../pages/sections/About";
import Home from "../pages/sections/Home";
import Skills from "../pages/sections/Skills";

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
        className="absolute -z-20 overflow-clip object-cover h-screen w-full min-h-min min-w-min"
      />
      <Home name={name} autoText={autoText} />
      <About aboutText={aboutText} profilePic={profilePic} />
      <Skills />
      <div className="h-auto w-full bg-white p-4 flex flex-col">
        <div className="w-full xl:w-2/3 mx-auto">
          <div className="flex flex-col">
            <span className="text-3xl font-semibold text-blue-900">Resume</span>
            <div className="line-1 bg-blue-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
