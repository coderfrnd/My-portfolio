import React from 'react';
import Additional from './Additional';
import '../Page/skill.css'

const skills = [
  { name: 'REACT-JS', completion: 90 },
  { name: 'EXPRESS-JS', completion: 70 },
  { name: 'NODE-JS', completion: 70 },
  { name: ' JAVASCRIPT', completion: 80 },
  { name: 'FIREBASE', completion: 90 },
  { name: 'C++', completion: 90 },
  { name: 'C', completion: 90 },
  { name: 'POSTMAN', completion: 100 },
  { name: 'CSS', completion: 90 },
  { name: 'GIT & GITHUB', completion: 100 },
  { name: 'PYTHON', completion: 80 },
  { name: 'VS-CODE', completion: 90 },
  { name: 'HTML', completion: 100 },
 
 
];
const Skills = () => {
  return (
    <div className="container mx-auto mt-2">
      <div className="p-auto h-auto w-auto m-4 mt-0 lg:mt-8 lg:p-6 lg:w-[1460px] lg:h-[1000px] lg:ml-[40px] text-white bar">
        <h2 className="lg:text-3xl md:text-4xl font-roboto flex justify-center skell">Skills</h2>
        <div className="xl:flex xl:flex-row xl:m-4">
          <div className="every xl:w-[50%]">
            {skills.map((skill, index) => (
              <Additional key={index} name={skill.name} completion={skill.completion} />
            ))}
          </div>
          <div className="xl:w-[44%] xl:m-4 xl:ml-16">
            <div className="flex flex-wrap space-x-3 space-y-3 xl:space-x-6 xl:space-y-6 ">
              <a
                href=""
                className="bg-black text-black hidden "
              >
                React
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 border border-teal-400 px-6 py-2 rounded hover:bg-teal-400 hover:border-teal-500 "
              >
               React-JS
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:border-teal-500"
              >
                CSS
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:border-teal-500"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:border-teal-500"
              >
                C++
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:border-teal-500"
              >
                JAVASCRIPT
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:border-teal-500"
              >
                NODE-JS
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:border-teal-500"
              >
                PYTHON
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:border-teal-500"
              >
                VS-CODE
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:border-teal-500"
              >
                EXPRESS-JS
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:border-teal-500"
              >
                C language
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:border-teal-500"
              >
                POSTMAN
              </a>   
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:border-teal-500"
              >
               FIREBASE
              </a>  
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:border-teal-500"
              >
               HTML
              </a>    
            </div>
          </div>
        </div>

        <div className="flex justify-center xl:hidden mt-4 space-x-4">
         
        </div>
      </div>
    </div>
  );
};

export default Skills;
