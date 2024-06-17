import { useState } from 'react';
import React from 'react';
import './../../Css/HomeBlogRightLeft.css';

function HomeBlogCompoLeft({ item2,customClassName  }) {
  const [isHover, setIsHover] = useState(false);
  const clipPathStyle = {
    clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
  };
  const clipPathStyle2 = {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 85%)",
  };

  const flipStyle = {
    transform: "scaleX(-1)",
  };

  return (
    <div className="group hover:translate-y-[8px] duration-300 ease-in-out h-[30rem] mt-10 relative" style={flipStyle}
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`lg:w-[22rem] lg:h-[23rem] md:w-[16rem] md:h-[17.8rem] w-[6rem] h-[10.8rem] rounded-xl overflow-hidden`}
        style={{...clipPathStyle, ...customClassName}}    //merge multiple sets of props or style 
      >
      </div>

      <div className="lg:w-[31rem] lg:h-[20.9rem] md:w-[22rem] md:h-[16.4rem] w-[20rem] h-[15.2rem] absolute lg:mt-[-20.3rem] md:mt-[-16.4rem] mt-[-9.8rem] md:pt-0 pt-3">
        {item2 && React.cloneElement(item2, {
          className: "absolute inset-0 w-full h-full object-cover rounded-2xl",
        })}

        <div className={`hoverDiv ${isHover ? 'hover' : ''}   folder-shape absolute lg:w-[494px] lg:h-[380px] md:w-[22rem] md:h-[10rem]  lg:mt-[-0.2rem] md:mt-[-1.8rem]  `}></div>

      </div>
    </div>
  );
}

export default HomeBlogCompoLeft;
