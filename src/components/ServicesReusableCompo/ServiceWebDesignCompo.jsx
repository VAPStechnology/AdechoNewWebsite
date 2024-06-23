import { useState } from "react";

function ServiceWebDesignCompo({item1,item2}) {
    const[isHover,setIsHovered]=useState(false)

    const clipPathStyle = {
        clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
      };
      const clipPathStyleHover = {
        clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
      };
  return (
    <>
      <div
        className=" bg-gray-300 lg:w-[15rem] lg:h-[20rem] md:w-[10rem] md:h-[15rem] w-[13rem] h-[15rem] mr-2 rounded-xl flex items-center justify-center flex-col opacity-50 hover:opacity-100"
        style={isHover ? clipPathStyleHover:clipPathStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div></div>
       <div>{item1}</div>
       <div className=" lg:text-3xl text-2xl font-semibold text-center">{item2}</div>
      </div>
    </>
  );
}
export default ServiceWebDesignCompo;
