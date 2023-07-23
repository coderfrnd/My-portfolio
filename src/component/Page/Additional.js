import React,{useEffect} from 'react';
import AOS from 'aos';

const Additional = ({ name, completion }) => {
  const progressBarStyles = {
    width: `${completion}%`,
    background: '#4CAF50',
    height: '14px',
    borderRadius: '0', // Remove the border-radius to make it square
  };

//   useEffect(() => {
//     AOS.init(); // Initialize AOS on component mount
//   }, []);
  return (
    <div className="mb-6" data-aos="fade-right" data-aos-duration="2000">
      <div className="flex justify-between items-center">
        <span>{name}</span>
        <span>{completion}%</span>
      </div>
      <div className=" overflow-hidden h-6"> 
        <div style={progressBarStyles} />
      </div>
    </div>
  );
};

export default Additional;
