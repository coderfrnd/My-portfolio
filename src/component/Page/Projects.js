// Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import mypro from '../../component/cryp1.png';
import mypr from '../../component/plastic.png';
import mype from '../../component/attflix.png';
// Update the image import path

const projects = [
  
  {
    title: 'Plastic-Hunt',
    description: 'This is E-commerce website and with this website we sell Bricks and Furnituer which is made from the plastic  The goal of project is to learn React and CSS and devlope a Ecosystem Where we can use a waste plastic I used React.js and CSS and some ES6 features"Plastic Hunt" is an organization that sells bricks, furniture, and tiles made from plastic. with the help of this web any one can order   ',
    imageUrl: mypr,
    demoUrl:'https://plasti.vercel.app/',
    githubUrl:'https://github.com/coderfrnd/Plasti'
  },
  {
    title: 'NetFlix Clone',
    description: 'Welcome to my Netflix clone project! With this project, users can browse through a variety of movie and TV show titles, view trailers, and add items to their watchlist. This is a web application built using React, Tailwind, and Firebase The UI has been carefully crafted using Tailwind CSS, ensuring a seamless and responsive experience across all devices. In addition to the frontend, this project also makes use of Firebase for its backend functionalities. User authentication, data storage, and hosting are all handled by Firebase, making it easy to deploy and scale the app as needed     ',
    imageUrl: mype,
    demoUrl:'https://attflix.vercel.app/',
    githubUrl:'https://github.com/coderfrnd/Attflix'

  },
  {
    title: 'Crypto-GEN',
    description: 'My aim for this project is Any one can know any Crypto price without signup in any plateform   Goal was to learn React.js and Material-UI and provide a platform for a user to see the detailed information of any Crypto token I used React and ES6 to develop the project',
    imageUrl: mypro,
    demoUrl:'https://cryptogen.netlify.app/',
    githubUrl:'https://github.com/coderfrnd/price'
  },
  // Add more project objects here
];


      
const Projects = () => {
  return (
    <div className="container mx-auto mt-2">
      <div className="p-6 flex justify-center">
        <h2 className="mb-0 text-3xl text-teal-400">Projects</h2>
      </div>

      {/* Project Cards */}
      <div className="">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-black rounded-lg shadow-lg xl:flex ${
              index % 2 !== 0 ? 'flex-row-reverse' : ''
            }`}
          >
            <img
              src={project.imageUrl}
              alt=""
              className="rounded-t-lg xl:w-[50%] text-teal-400 hover:white border border-teal-400 px-4 py-2 rounded m-2"
            />
            <div className="p-6 flex justify-center flex-col items-center xl:w-[50%]">
              <h2 className="mb-2 text-2xl text-teal-400">{project.title}</h2>
              <p className="text-white font-roboto text-xl mb-2">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.demoUrl}
                  className="text-teal-400 hover:text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:border-teal-500"
                >
                  Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="text-teal-400 hover:text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:border-teal-500"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
