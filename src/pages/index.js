import { useState } from "react";
import profilePic from "../assets/profile_pic.JPG";
import SideBar from "../layouts/SideBar";

const Resume = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div className="flex">
      <div
        className="h-10 w-10 right-3 top-7 absolute bg-red-500 rounded-full"
        onClick={() => setSidebar(!sidebar)}
      />
      <SideBar sidebar={sidebar} profilePic={profilePic} />
      <div>Content</div>
    </div>
  );
};
export default Resume;
