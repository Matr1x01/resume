import React from "react";
const Home = ({ name, autoText }) => {
  return (
    <div className="h-screen w-full bg-gray-400/[.3] flex flex-col">
      <div className="flex flex-col mx-auto my-auto">
        <span className="text-7xl font-semibold text-slate-100  my-auto ">
          {name}
        </span>
        <div className="flex flex-row">
          <span className="ml-1 mr-2 text-2xl font-light text-slate-100  my-auto ">
            {`I'm`}
          </span>
          <span className="text-2xl font-light text-slate-100 underline decoration-blue-300 underline-offset-4 my-auto">
            {autoText}
          </span>
          <span className="cursor-pulse text-blue-300 mx-1 my-auto">|</span>
        </div>
      </div>
    </div>
  );
};
export default Home;
