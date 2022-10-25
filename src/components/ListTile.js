import React from "react";
import { FaAngleRight } from "react-icons/fa";
const ListTile = ({ title, content }) => {
  return (
    <div className="flex lg:flex-row flex-col my-auto py-2 sm:py-0">
      <div className="flex flex-row">
        <FaAngleRight className="w-8 h-8 text-blue-300" />
        <span className="text-xl my-auto">{title}:</span>
      </div>

      <span className=" text-xl my-auto font-light mx-4">{content}</span>
    </div>
  );
};

export default ListTile;
