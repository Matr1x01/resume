import React from "react";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const MenueTile = ({ elementRef, title, iconActive, iconInactive, active }) => {
  const [hovering, setHovering] = useState(false);

  // console.log(document?.getElementById(elementRef.slice(1))?.offsetTop);
  // console.log(document?.getElementById(elementRef.slice(1))?.offsetHeight);
  return (
    <Link to={elementRef} smooth>
      <div
        className="flex flex-row my-4 pl-8"
        onMouseEnter={() => {
          setHovering(!hovering);
        }}
        onMouseLeave={() => {
          setHovering(!hovering);
        }}
      >
        {active || hovering ? iconActive : iconInactive}
        <span
          className={`mx-3 ${
            active || hovering ? "text-white" : "text-gray-300"
          }  my-auto cursor-pointer`}
        >
          {title}
        </span>
      </div>
    </Link>
  );
};
export default MenueTile;
