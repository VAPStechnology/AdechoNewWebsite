import React, { useState, useEffect } from 'react';
import './../../Css/HomeBlogRightLeft.css';

function HomeBlogCompoRight({ item2, customClassName }) {
  const [isHover, setIsHover] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define clip path styles
  const clipPathStyle = {
    clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
  };

  // Handle hover styles based on screen size and customClassName prop
  const hoverStyle = isLargeScreen ? '' : 'hover:none;';

  return (
    <div
      className="group duration-300 ease-in-out h-[30rem] mt-10 opacity-100 relative"
      onMouseEnter={() => isLargeScreen && setIsHover(true)}
      onMouseLeave={() => isLargeScreen && setIsHover(false)}
    >
      <div
        className={`lg:w-[22rem] lg:h-[20.8rem] md:w-[16rem] md:h-[17.8rem] w-[7rem] h-[10.8rem] rounded-xl overflow-hidden`}
        style={{ ...clipPathStyle, ...customClassName, ...{hoverStyle} }}
      ></div>

      <div className="circle lg:w-[31rem] lg:h-[20.8rem] md:w-[22rem] md:h-[16.4rem] w-[18rem] h-[15.2rem] absolute lg:mt-[-18rem] md:mt-[-16.4rem] mt-[-9.8rem] rounded-xl md:pt-0 pt-3">
        {item2 && React.cloneElement(item2, {
          className: "inset-0 w-full h-full object-cover rounded-2xl",
        })}

        <div className={`hoverDiv ${isHover ? 'hover' : ''} folder-shape absolute lg:mt-[-20.9rem] md:mt-[-18rem] lg:w-[494px] lg:h-[380px] md:w-[22rem] md:h-[10rem]`}></div>
      </div>
    </div>
  );
}

export default HomeBlogCompoRight;
