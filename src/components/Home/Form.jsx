import HomeAndContactForm from "../HomeReuseableCompo/HomeAndContactForm";
import From from "/Images/Home/Form.gif";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

function Form() {
  
  return (
     <>
       <HomeAndContactForm 
       Img={<img src={From} alt="Form" className=" lg:w-[30rem] lg:h-[35rem] md:w-[22rem] md:h-[30rem] " />}
       item1={<>Ready when you are! Given us the<br /> scoop on your project?</>}
       item2={<>Enquire</>}
       />
     </>
  );
}

export default Form;
