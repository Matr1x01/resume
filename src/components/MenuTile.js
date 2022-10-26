import React from "react";
import { useState } from "react";

const MenueTile = ({ title, iconActive, iconInactive, active }) => {
  const [hovering, setHovering] = useState(false);
  return (
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
  );
};
export default MenueTile;
