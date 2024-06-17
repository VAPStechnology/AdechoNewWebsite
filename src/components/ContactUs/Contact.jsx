import HomeAndContactForm from "../HomeReuseableCompo/HomeAndContactForm";
import Contact from '/Images/Contact/Contact.gif'
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

function Form() {
  
  return (
     <>
       <div className=" lg:pt-[10rem] md:pt-[15rem] pt-[20rem] bg-[#02021E]">
       <HomeAndContactForm 
       Img={<img src={Contact} alt="Form" className=" lg:w-[30rem] lg:h-[35rem] md:w-[22rem] md:h-[30rem] " />}
       item1={<><div className="lg:text-[2.7rem]">Let's Talk</div></>}
       item2={<>Enquire</>}
      
       />
       </div>
     </>
  );
}

export default Form;
