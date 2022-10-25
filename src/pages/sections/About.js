import React from "react";
import ListTile from "../../components/ListTile";
const About = ({ aboutText, profilePic }) => {
  return (
    <div className="h-auto w-full bg-white p-4 flex flex-col">
      <div className="w-full xl:w-2/3 mx-auto">
        <div className="mt-8 flex flex-col">
          <span className="text-3xl font-semibold text-blue-900">About</span>
          <div className="line-1 bg-blue-300" />
        </div>
        <span className="font-light text-xl text-gray-900 leading-loose tracking-wide">
          {aboutText}
        </span>
        <div className="flex lg:flex-row flex-col mt-6">
          <div className="max-w-md w-full mx-auto mb-8 sm:mb-0">
            <img src={profilePic} alt="pic" />
          </div>
          <div className="w-2/3 px-4 flex lg:flex-row flex-col">
            <div className="flex flex-col w-full">
              <ListTile title="Phone Number" content={"+8801765393016"} />
              <ListTile title="Email" content={"mazharul.haq016@gmail.com"} />
              <ListTile title="Address" content={"Jhorar Shohara Bazar Road"} />
              <ListTile title="City" content={"Dhaka, Bangladesh"} />
            </div>
            <div className="flex flex-col w-full">
              <ListTile title="Website" content={"www.blank.com"} />
              <ListTile title="Age" content={"25"} />
              <ListTile title="Blood Group" content={"A (+ve)"} />
              <ListTile title="Freelance" content={"Available"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
