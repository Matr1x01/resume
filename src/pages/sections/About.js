import React from "react";
import ListTile from "../../components/ListTile";
const About = ({ profilePic, content }) => {
  return (
    <div className="h-auto w-full bg-white p-4 flex flex-col">
      <div className="max-w-5xl w-full self-center flex flex-col pb-8">
        <div className="mt-8 flex flex-col">
          <span className="text-3xl font-semibold text-blue-900">About</span>
          <div className="line-1 bg-blue-300" />
        </div>
        <span className="font-light text-xl text-gray-900 leading-loose tracking-wide">
          {content.aboutText}
        </span>
        <div className="flex lg:flex-row flex-col mt-6">
          <div className="max-w-md w-full mx-auto mb-8 sm:mb-0">
            <img src={profilePic} alt="pic" />
          </div>
          <div className="w-2/3 px-4 flex lg:flex-row flex-col mt-6 md:mt-0">
            <div className="flex flex-col w-full">
              <ListTile title="Phone Number" content={content.phoneNumber} />
              <ListTile title="Email" content={content.email} />
              <ListTile title="Address" content={content.address} />
              <ListTile title="City" content={content.city} />
            </div>
            <div className="flex flex-col w-full">
              <ListTile title="Website" content={content.website} />
              <ListTile title="Age" content={content.age} />
              <ListTile title="Blood Group" content={content.bloodGroup} />
              <ListTile title="Freelance" content={content.freelance} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
