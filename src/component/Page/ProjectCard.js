// ProjectCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import '../Page/Project.css'


const ProjectCard = ({ title, description, imageUrl, demoUrl, githubUrl }) => {
  return (
    <>
      <a href={demoUrl} target="_blank" rel="noopener noreferrer">
        <div className="w-100% h-[290px] rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105 flex flex-row justify-between mb-6 mt-6 projec"> {/* Add "project" class here */}
          <div className="relative w-1/2 pect">
            <img className="w-full h-[240px] object-cover imge" src={imageUrl} alt={title} />
            <div className="px-4 py-2 text-center foe ">
              <div className="font-roboto text-xl text-white mb-2 tti">
                {title}
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white ml-6">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-md w-1/2 p-8 font-roboto-mono des">{description}</p>
        </div>
      </a>
      <div style={{ borderTop: '1px solid white', marginTop: '17px' }}></div>
    </>
  );
};

export default ProjectCard;
