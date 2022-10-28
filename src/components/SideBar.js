import React from "react";
import ContactCircles from "./ContactCircle";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import MenueTile from "./MenuTile";

const contacts = [
  {
    avatar: <FaLinkedinIn className=" fill-white h-6 w-6 my-auto mx-auto" />,
    link: "https://www.linkedin.com/in/mazharul-haq-b602aa21a/",
  },
  {
    avatar: <FaGithub className="fill-white h-6 w-6 my-auto mx-auto" />,
    link: "https://github.com/Matr1x01",
  },
  {
    avatar: <FaFacebookF className="fill-white h-6 w-6 my-auto mx-auto" />,
    link: "https://www.facebook.com/a.silent.man8/",
  },
];
const SideBar = ({ sidebar, profilePic, name, menus }) => {
  return (
    <div
      className={`${
        sidebar ? "w-72" : "w-0"
      } duration-300 h-screen bg-slate-800 fixed sm:sticky top-0 z-40 select-none`}
    >
      <div className={`${!sidebar ? "hidden" : ""} flex flex-col w-full`}>
        <img
          src={profilePic}
          alt="profile pic"
          loading="lazy"
          className="mx-auto mt-8 w-1/2 h-1/2 rounded-full border-8 border-slate-600"
        />
        <span className="my-4 text-2xl text-white font-semibold text-center mx-auto cursor-pointer">
          {name}
        </span>
        <ContactCircles contacts={contacts} />
        <div className="flex flex-col mt-6">
          {menus.map((menu, i) => (
            <MenueTile
              key={i}
              active={i === -1}
              iconActive={menu.iconActive}
              iconInactive={menu.iconInactive}
              title={menu.title}
              elementRef={menu.ref}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
