import React from "react";
import ItemsContainer from "./ItemCont";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import SocialIcons from "./SocialIco";
import { Icons } from "./Menu";

const Footer = () => {
  return (

    <footer className="bg-black-900 text-white">
      {/* <SocialIcons */}
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-black py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Contact</span> Me
        </h1>
        <form action="https://formspree.io/f/mwkdpwez" method="POST">
        <div className="m-6">
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none "
          />
           <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
           <input
            type="text"
            placeholder="Text"
            name="text"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none "
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full mt-3"
          >
            Submit
          </button>
        </div>


        </form>
       
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Devloped By Abhishek Jaiswal All rights reserved.</span>
       
        {/* <SocialIcons Icons={Icons} /> */}
        {/* <FontAwesomeIcon icon={faLinkedin} size="3x"  className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-500 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 " /> */}
         <div className="text-teal-500">
         <FontAwesomeIcon icon={faLinkedin} size="3x"  className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-500 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 " />
         <FontAwesomeIcon icon={faInstagram} size="3x"  className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-500 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 " />
         <FontAwesomeIcon icon={faGithub} size="3x"  className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-500 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 " />
         <FontAwesomeIcon icon={faFolder} size="3x"  className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-500 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 " />
        {/* <SocialIcons  size='3x' Icons={Icons}/> */}
    </div>
    {/* <SocialIcons Icons={Icons}/> */}
      </div>
    </footer>
  );
};

export default Footer;