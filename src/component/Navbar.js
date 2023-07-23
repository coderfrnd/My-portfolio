import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import faTimes for the close icon

const Navbar = () => {
  let [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className='flex xl:flex-row  text-white xl:h-28'>
      
      <div className='hidden xl:w-[30%] xl:font-poppins xl:flex justify-start p-6 xl:items-center'>
        <span className='xl:text-3xl xl:ml-6 xl:mt-2'>🟢 Abhishek Jaiswal</span>
      </div>

      <div className='xl:w-3/4 xl:flex xl:justify-end xl:p-6 justify-end'>
        {/* For xl and above screens */}
        <ul className='hidden xl:flex xl:items-center xl:text-xl'>
          <li className='mr-6 hover:underline'>
            <Link to='/'>Home</Link>
          </li>
          <li className='mr-6 hover:underline'>
            <Link to='/about'>About</Link>
          </li>
          <li className='mr-6 hover:underline'>
            <Link to='/skill'>Skills</Link>
          </li>
          <li className='mr-6 hover:underline'>
            <Link to='/project'>Projects</Link>
          </li>
        </ul>

        {/* For below xl screens */}
        {/* <div>Abhishek</div> */}
        <div className='xl:hidden flex flex-col'>
          {/* Show the menu or the close icon based on the 'open' state */}
          {open ? (
            <>
           
            {/* <div>Abhishek</div> */}
            <div className=' bg-black-800 '>
              
              <FontAwesomeIcon
                className='text-teal-400 text-2xl my-6 ml-10 cursor-pointer'
                icon={faTimes}
                onClick={handleToggle}
              />
              
              <ul className='flex flex-col items-center text-xl mt-4 w-screen h-[300px] text-teal-400 '>
                <li className='my-2 hover:underline'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='my-2 hover:underline'>
                  <Link to='/about'>About</Link>
                </li>
                <li className='my-2 hover:underline'>
                  <Link to='/skill'>Skills</Link>
                </li>
                <li className='my-2 hover:underline'>
                  <Link to='/project'>Projects</Link>
                </li>
              </ul>
              <div style={{ borderTop: '2px solid white', marginTop: '8px' }}></div>
            </div>
            </>
          ) : (
            <FontAwesomeIcon
              className='text-white text-2xl my-6 ml-10 cursor-pointer'
              icon={faBars}
              onClick={handleToggle}
            />
           
          )}
          {/* <div>Abhsihek</div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
