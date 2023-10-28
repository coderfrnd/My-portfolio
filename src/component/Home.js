import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import mypic from '../component/myimg2 .png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import Footer from './Footer';
import About from './Page/About';
import Projects from './Page/Projects';
import Skills from './Page/Skills';
// import '../component/Home.css'
import SocialIcons from "./SocialIco";
// import { Icons } from "./Menu";


const Card = ({ name, icon, link }) => {
  return (
    <div className=' w-[100px] mt-4 xl:flex xl:mt-4 xl:w-[110px] xl:flex-col '>
      <a href={link} target='_blank' rel='noopener noreferrer' data-tip={name}>
        <FontAwesomeIcon icon={icon} className='sm:text-6xl text-5xl xl:text-7xl ml-2 text-teal-400' />
      </a>
      <div className='mt-1 text-2xl xl:flex xl:ml-0'>
        <span>{name}</span>
      </div>
    </div>
  );
};
const Home = () => {

  return (
    <>
      <div className='text-white  h-[1150px] sm:h-[970px]  w-auto flex flex-col  xl:flex xl:flex-row xl:h-[800px]'>
      {/* <div className='absolute w-full h-screen bg-gradient-to-l from-black'></div> */}
        <div className=' flex justify-center  mt-4 xl:h-[660px] xl:ml-[140px] xl:mt-10'>
        <img className=" sm:w-[50%] xl:w-full h-auto rounded-full myim" src={mypic} alt="" />
        </div>
        <div className=' mt-2 xl:flex-col xl:flex xl:justify-start xl:h-[660px] xl:w-[660px] xl:ml-12 xl:mt-10'>
           <div className=' text-teal-400 h-[60px] w-auto flex    justify-center xl:justify-start xl:h-[80px] xl:w-auto xl:text-5xl xl:mt-28 xl:flex xl:items-center'>
            <span className=' text-4xl mt-2 ml-8  xl:ml-0 xl:text-5xl '>Abhishek Jaiswal</span>
          
           </div>
           <div className='  flex justify-center text-2xl h-[40px] xl:flex xl:justify-start xl:h-[50px] xl:w-auto xl:text-3xl xl:m-0 xl:ml-1' ><span>A bit About me</span></div>
           <div className='para p-2 sm:p-6 sm:pt-0 xl:p-0 sm:h-[330px] md:h-[240px]  w-auto flex justify-center xl:h-[290px] xl:w-auto xl:mt-0'>
           <p className=" ml-2 sm:ml-2 info font-roboto-mono text-2xl  ">
                "I am a final-year student at MJPRU with a strong passion for front-end development.and enjoy playing cricket in my free time. Excited to contribute my skills as a front-end developer to make a positive impact in the digital world. To improve my programming skill/Data Structures i've been doing Leetcode Codeforces and solved over 500+ questions."
              </p>
               </div>
               <div className=' justify-center flex flex-row mt-2 lg:mt-0  sm:mt-0 xl:mt-0 xl:h-[126px] xl:flex xl:flex-row xl:w-auto xl:justify-start'>
                   <div className=' w-[60px] mt-4 xl:flex xl:mt-4 xl:w-[90px] '>
                   <a href="https://www.linkedin.com/in/abhishek-20ei02/" target="_blank" rel="noopener noreferrer" data-tip="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin}  className=" text-5xl sm:text-6xl xl:text-7xl text-teal-400" />
                </a>
                   </div>
                   <div className='  w-[60px] mt-4 xl:flex xl:mt-4 xl:w-[90px] '>
                   <a href="https://www.instagram.com/attackerfrnd/" target="_blank" rel="noopener noreferrer" data-tip="Instagram">
                  <FontAwesomeIcon icon={faInstagram}  className=" text-5xl xl:text-7xl text-teal-400  sm:text-6xl" />
                </a>
                   </div>
                   <div className='  w-[60px] mt-4 xl:flex xl:mt-4 xl:w-[90px] '>
                   <a href="https://github.com/coderfrnd" target="_blank" rel="noopener noreferrer" data-tip="Github">
                  <FontAwesomeIcon icon={faGithub}  className=" text-5xl xl:text-7xl text-teal-400  sm:text-6xl" />
                </a>
                   </div>
                   <a href="https://drive.google.com/file/d/1syp8RaP1dziqgyV-Kkc4O1s5efI5g2Ng/view?usp=sharing" target="_blank" rel="noopener noreferrer" data-tip="LinkedIn">
                   <Card name='Resume' icon={faFolder} />
                   </a>
                  
               </div> 
        </div>

      </div>
    <Skills/>
    <About/> 
    <Projects/>
    {/* <Skills/> */}
     <Footer/>

    </>
  );
};

export default Home;
