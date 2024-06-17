import Button from "../HomeReuseableCompo/Button";
import From from "/Images/Home/Form.gif";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

function Form({Img,item1,item2,style}) {
  const [email, setEmail] = useState('');
  const[name,SetName]=useState('');
  const[About,setAbout]=useState('');

   

  const clipPathStyle = {
    clipPath: "polygon(0 0, 15% 0, 0 15%, 0 100%, 100% 100%, 100% 0)",
  };
  const inputStyle = {
    border: "none",
    borderBottom: "2px solid  #cccccc",
    outline: "none",
    padding: "8px 0",
    width: "100%",
  };

  return (
    <div className="h-[40rem] bg-[#02021E] flex justify-center font-Poppins md:pr-8 md:pl-8 pr-8 pl-8 lg:mt-0 md:mt-[-5rem] mt-[-10rem]"
    style={{style}}
    >

      <div
        className={`lg:w-[70rem] lg:h-[35.8rem] md:w-[48rem] md:h-[30.8rem] w-[40rem] h-[35.8rem] rounded-xl overflow-hidden bg-white  flex justify-evenly`}
        style={{ ...clipPathStyle }}
      >
        {/* GIF */}
        <div className=" md:block hidden">
          {Img}
        </div>
       
       {/* All Inputs */}
        <div className="pt-10 lg:ml-[-5rem] pl-3 pr-3">
          <div className=" lg:text-[2rem] md:text-[1.5rem] font-bold text-[1.5rem] md:ml-0 ml-3">
            {item1}
          </div>

          <div className=" md:flex justify-between mt-3">
            <div>
              <div className=" lg:text-xl md:text-lg text-[#cccccc]">Full Name</div>
              <input type="text"
               placeholder="Enter text" 
               style={inputStyle}
               value={name}
               onChange={(e)=>SetName(e.target.value)}
               />
            </div>
            <div>
              <div className=" lg:text-xl md:text-lg text-[#cccccc]">Email</div>
              <input type="text" 
              placeholder="Enter text" 
              style={inputStyle} 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="lg:text-xl md:text-lg mt-10 text-[#cccccc]">About Project</div>
            <input type="text" 
            placeholder="Enter text" 
            style={inputStyle} 
            value={About}
            onChange={(e)=>setAbout(e.target.value)}
            />
          </div>

          <div className=" flex mt-20 text-[#cccccc]">
              <div className=" mr-5 text-sm">By sending this form i confirm that I have<br /> read and accept the Privacy Policy </div>
              <button className="btn  lg:w-[10rem] lg:h-[2rem] md:w-[7rem] md:h-[1.5rem] w-[7rem] bg-[#13bbac] text-white hover:text-black  ">{item2} <FaArrowRightLong /></button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Form;
