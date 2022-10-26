import React from "react";
import { FiGithub, FiLink } from "react-icons/fi";

const ProjectBox = ({ title, description, link, github, image }) => {
  const [hovering, setHovering] = React.useState(false);
  return (
    <div className="object-center h-64 w-64 relative flex">
      <img src={image} alt="niyontron" className="my-auto mx-auto h-48 w-48" />
      <div
        className="h-60 w-60 bg-gray-400/[0] absolute hover:bg-gray-400/[.3] flex flex-col-reverse"
        onMouseEnter={() => {
          setHovering(!hovering);
        }}
        onMouseLeave={() => {
          setHovering(!hovering);
        }}
      >
        <div
          className={`flex flex-row divide-x divide-blue-100/[.3] bg-blue-300/[.8] duration-300 ${
            hovering ? "h-12" : "h-0"
          }`}
        >
          <a href={github} className="flex w-full h-auto hover:bg-blue-300">
            <FiGithub
              className={`${
                hovering ? "block" : "hidden"
              } stroke-white mx-auto my-auto`}
            />
          </a>
          <a href={link} className="flex w-full h-auto hover:bg-blue-300">
            <FiLink
              className={`${
                hovering ? "block" : "hidden"
              } stroke-white mx-auto my-auto`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectBox;
