import { FiMapPin, FiMessageCircle, FiPhoneCall } from "react-icons/fi";
import React from "react";

const ContactInfo = ({ icon, title, content }) => {
  return (
    <div className="flex flex-row my-4">
      <div className="flex w-12 h-12 bg-blue-300 rounded-full mr-4">{icon}</div>
      <div className="flex flex-col">
        <span className="text-xl font-semibold">{title}:</span>
        <span>{content}</span>
      </div>
    </div>
  );
};

const CustomInput = ({ label, placeholder }) => {
  return (
    <div>
      <label className="block">
        <span className="block text-sm font-medium text-slate-700">
          {label}
        </span>
        <input
          type="text"
          placeholder={placeholder}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 
  "
        />
      </label>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="h-auto w-full bg-white flex flex-col p-8">
      <div className="flex flex-col w-full max-w-5xl self-center">
        <div className="flex flex-col">
          <span className="text-3xl font-semibold text-blue-900">Contact</span>
          <div className="line-1 bg-blue-300" />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 lg:mr-3 flex flex-col shadow-lg p-6 mt-6">
            <ContactInfo
              icon={<FiMapPin className="text-white m-auto h-8 w-8" />}
              title="Location"
              content="Dhaka"
            />
            <ContactInfo
              icon={<FiMessageCircle className="text-white m-auto h-8 w-8" />}
              title="Email"
              content="Dhaka"
            />
            <ContactInfo
              icon={<FiPhoneCall className="text-white m-auto h-8 w-8" />}
              title="Phone"
              content="Dhaka"
            />
          </div>
          <div className="w-full lg:w-2/3 lg:ml-3 p-6 mt-6 shadow-lg flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="m-3 w-full">
                <CustomInput label="Your Name" placeholder="Your Name" />
              </div>
              <div className="m-3 w-full">
                <CustomInput label="Your Email" placeholder="Your Email" />
              </div>
            </div>
            <div className="m-3">
              <CustomInput label="Subject" placeholder="Subject" />
            </div>
            <div className="m-3">
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Message
                </span>
                <textarea
                  placeholder="Message"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 
"
                />
              </label>
            </div>
            <div className="flex w-full">
              <div className="px-8 py-2 m-auto rounded-lg bg-blue-600 hover:bg-blue-500">
                <span className="text-xl text-white">Send Message</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40" />
    </div>
  );
};
export default Contact;