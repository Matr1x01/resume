import React, { useEffect } from "react";
import cover from "../assets/cover.jpg";

const Body = () => {
  const [autoText, setAutoText] = React.useState("");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAutoText(
        "I am a Full Stack Web Developer".slice(0, autoText.length + 1)
      );
    }, 300);
    return () => clearTimeout(timeOut);
  }, [autoText]);
  return (
    <div className="flex-1 flex-col overflow-y-auto">
      <img
        src={cover}
        alt="cover"
        className="absolute -z-20 overflow-clip h-screen min-h-min min-w-min"
      />

      <div className="h-screen w-full bg-gray-400/[.3] flex flex-col">
        <span className="text-7xl font-semibold text-slate-100  my-auto mr-48 ml-32">
          Mozharul Haq
        </span>
        <span className="text-xl font-semibold text-slate-100  my-auto mr-48 ml-32">
          {autoText}
        </span>
      </div>
      <div className="h-screen w-full bg-blue-500">hasfasdfh</div>
    </div>
  );
};

export default Body;
