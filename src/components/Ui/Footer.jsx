import HomeLogo from "../HomeReuseableCompo/HomeLogo";
import { IoLocationSharp } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { CiLocationArrow1 } from "react-icons/ci";


function Footer() {
    const [email, setEmail] = useState('');

    console.log(email);

  return (
    <>
      <div className="bg-[#02021E] md:pl-10 md:pr-10 pl-5 pr-5 font-Poppins text-white md:h-[46rem] h-[99rem]  lg:pt-[6rem]">

        {/* first part */}
        <div className=" md:flex md:flex-row flex flex-col justify-center items-center md:justify-between">
          <div>
            <HomeLogo
            StyleLogo={{width:'10rem', height:'6rem'}}
            StyleFont1={{fontSize:'1.9rem'}}
            StyleFont2={{fontSize:'1.5rem'}}
            ></HomeLogo>
          </div>
          <div>
             <div className=" lg:text-[1.5rem] text-xl mt-8">Empowering Solution, Enrichig Lives</div>
             <div className=" flex mt-4 text-black">
                <input
                type="text"
                placeholder="      Your email address"
                className=" lg:w-[18rem] lg:h-[3rem] md:w-[15rem] md:h-[2.5rem] w-[14rem] h-[2.3rem] rounded-l-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                ></input>
                <CiLocationArrow1 className="absolute text-xl text-gray-400 md:mt-[0.8rem] mt-[0.5rem]" />
                <div 
                className=" lg:w-[8rem] lg:h-[3rem] md:w-[6rem] md:h-[2.5rem]  bg-[#13bbac] rounded-r-xl flex justify-center items-center text-black lg:text-xl md:text-lg "
                >
                   Subscribe
                </div>
            </div>
          </div>
        </div>
        {/* 1st part end */}
        <hr className=" mt-10"></hr>
        {/* 2nd part start */}
        <div className="flex flex-col md:flex  md:flex-row justify-center items-center md:justify-evenly mt-6 lg:space-x-3 space-x-7"> 
            {/* our service */}
             <div>
                   <div className=" lg:text-[1.5rem] md:text-xl text-2xl font-semibold mb-8">Our Services</div>
                  <div className=" lg:text-[1.20rem] md:text-[0.9rem] text-xl space-y-6">
                    <div  className="hover:text-[#13bbac]">Web Design & Devlopment</div>
                    <div  className="hover:text-[#13bbac]">Mobile App Devlopment</div>
                    <div  className="hover:text-[#13bbac]">SEO & Backlinking</div>
                    <div  className="hover:text-[#13bbac]">Social Media Marketing</div>
                    <div  className="hover:text-[#13bbac]">content Marketing</div>
                    <div  className="hover:text-[#13bbac]">Lead Genration</div>
                  </div>
             </div>
            
             <hr className=" mt-10 md:hidden text-white w-full h-[1rem]"></hr>
            {/* Recent post */}
             <div className=" lg:text-[1.20rem] md:text-[0.9rem] text-[1.20rem] space-y-6">
                 <div className="lg:text-[1.5rem] md:text-[1.25rem] text-2xl font-semibold mb-8">Recent post</div>

                 <div  className="hover:text-[#13bbac]">The Imperative of Responsive<br /> Web Design in the Dynamic<br /> Landscape of 2023.
                  <br/>6 January 2020
                </div>

                <div  className="hover:text-[#13bbac]">The Crucial Significance of<br /> Lead Generation in Business<br /> Success.<br />
                     6 January 2020
               </div>

            </div>
            <hr className=" mt-10 md:hidden text-white w-full h-[1rem]"></hr>
            {/* Address */}
             <div className=" space-y-8  lg:text-[1.20rem] md:text-[0.9rem] text-[1.05rem] md:mt-0 mt-20">
                 <div className=" flex"><IoLocationSharp className=" lg:text-3xl text-2xl mt-2 mr-2" />Office no.6 Second floor, Plot No.<br /> 56,Jwala Heri Market, Delhi-110063</div>
                 <div className=" flex"><IoCall  className="lg:text-3xl text-2xl mr-2"/>+91 9868423018</div>
                 <div className="   flex"><FaHeadphones  className="lg:text-3xl text-2xl mr-2"/>Support@adechotechnologies.com</div>
                 <div className=" flex md:text-lg  space-x-5 ml-3"><FaFacebook /><IoLogoLinkedin /><AiFillInstagram /><FontAwesomeIcon icon={faPinterest} /></div>
             </div>


        </div>
        <hr className=" mt-10"></hr>
        {/* End  */}
        <div className=" md:flex md:flex-row md:justify-between flex flex-col justify-center items-center">
        <div className=" lg:text-xl md:text-md text-md mt-2">&copy; 2024 Adecho Technologies.All Rights Reserved.</div>
        <div className="">
            <div className="flex lg:space-x-5 md:space-x-2 lg:text-lg md:text-md text-md space-x-3 mt-3">
              <div className="hover:text-[#13bbac] mt-2">Home</div>
              <div className="hover:text-[#13bbac] mt-2">About us</div>
              <div className="hover:text-[#13bbac] mt-2 relative">Services</div>
              <div className="hover:text-[#13bbac] mt-2">Blog</div>
              <div className="hover:text-[#13bbac] mt-2">Contact Us</div>
  
            </div>
          </div>
        </div>
      </div>
    </> 
  );
}
export default Footer;
