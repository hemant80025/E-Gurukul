import React from 'react';
import CompImage from "../../../assets/Images/comanies.png";
import HighlightText from './HighlightText';

const Companies = () => {
  return (
    <div className="relative pt-40 pb-12 -mt-[200px] z-10">
      <div className="w-11/12 max-w-[1080px] mx-auto relative flex flex-col md:flex-row">
        <div className="flex flex-col justify-center w-full md:max-w-[calc(100%-500px)] sm:my-16">

        <div className="text-4xl font-semibold text-center">
        Join Our Network of 100+ 
            <HighlightText text={"Supporting Businesses"} />
          </div>
          
          
          
          <div className="w-6 h-1 bg-greenLight my-4 mb-10"></div>
          <p className="font-mullish ">
          E-Gurukul is proudly supported by a diverse array of leading companies who believe in our mission to provide quality education to all.
           Their collaboration and support help us bring the best learning resources and opportunities to our users.
          </p>
          <span className="font-edu-sa text-xl font-bold italic text-blue-300 mt-3">
          Empowering education with cutting-edge technology solutions.
          </span>
          
          
        </div>
        
        <div className="image-container">
          <div className="image-gradient-top"></div>
          <img src={CompImage} alt="Comparison of various companies" className="moving-image" />
          <div className="image-gradient-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
