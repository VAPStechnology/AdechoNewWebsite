import { useState } from "react";
import Button from "../HomeReuseableCompo/Button";
import ServiceOptionMob from "./ServiceOptionMob";
import { Link } from "react-router-dom";

function MobNavOptions() {
  const[isClick,SetIsClick]=useState(false);

  function click(){
    SetIsClick(!isClick);
  }

  return (
    <>
    <style>
      {`
      @keyframes slideRight {
        from {
          transform: translateX(10rem);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          
        }
      }
      
      .slide-Right {
        animation: slideRight 0.4s ease-out;
      }
      `}
    </style>
     <div className="slide-Right  bg-base-200 w-[20rem] h-[17rem] rounded-box absolute ml-[-18rem] font-Poppins">
     <ul className="menu text-xl text-black text-center p-10 ">
       <Link to={"/"}>
         <li>
          <a className="hover:text-[#13bbac]">Home</a>
        </li>
       </Link>
        <li>
          <a className="hover:text-[#13bbac] "
          onClick={click}
          >Service</a>
          {isClick && <ServiceOptionMob />}
        </li>

       <Link to={"/Blog1"}>
       <li>
          <a className="hover:text-[#13bbac]">Blog</a>
        </li>
       </Link>

        <Link to={"/AboutUs"}>
        <li>
          <a className="hover:text-[#13bbac]">About Us</a>
        </li>
        </Link>

        <Link to={"/Contact"}>
        <li>
          <a className="hover:text-[#13bbac]">Contact us</a>
        </li>
        </Link>

      </ul>
     <div className=" mt-[3rem] flex justify-center">
    <Link to={"/Contact"}>
    <Button
      item1={"Enquire"}
      ></Button>
    </Link>
     </div>
     </div>
    </>
  );
}
export default MobNavOptions;
