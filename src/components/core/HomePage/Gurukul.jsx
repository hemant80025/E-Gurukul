import React, { useState } from 'react';
import gurukulimage from "../../../assets/Images/Gurukul.png"
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"
import HighlightText from "./HighlightText"

const Gurukul = () => {
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  
    const handleMouseMove = (event) => {
      const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - left - width / 2;
      const y = event.clientY - top - height / 2;
      const rotateX = -y / 20;
      const rotateY = x / 20;
      setTilt({ rotateX, rotateY });
    };
  
    const handleMouseLeave = () => {
      setTilt({ rotateX: 0, rotateY: 0 });
    };
  
    return (
      <div >
        <div className='w-full flex justify-between mt-20'>
          <div className='w-1/2 flex flex-col items-center justify-center'>
            
          <Link to={"/signup"}>
            <div className=' flex flex-col group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'>

                <div className='flex flex-row tilt-image items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
                    <p>Become a Guru</p>
                    <FaArrowRight />
                </div>
            </div>

        </Link>

        <div className='text-center text-4xl font-semibold mt-7'>
        Integrate   
            <HighlightText text={"Culture "} />
            Through
            <HighlightText text={"Technology"} />


        </div>


        </div>
          <div 
            className='w-1/3 flex items-center justify-center'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img 
              src={gurukulimage} 
              className='tilt-image'
              style={{ 
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)` 
              }}
              alt='Gurukul'
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Gurukul;