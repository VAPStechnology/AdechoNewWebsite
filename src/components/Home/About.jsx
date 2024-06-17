import React from 'react';
import Vid from '/Images/Home/About.gif';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className=" w-full md:flex md:flex-row md:justify-around flex flex-col-reverse justify-center items-center  bg-[#02021E] text-white md:pl-20 md:pr-20 pl-8 pr-8 font-Poppins md:pt-[5rem] pt-[1rem] lg:h-[40rem] md:h-[30rem] h-[50rem] pb-10 ">
      {/* Content */}
      <div className='lg:w-[40rem] md:w-[25rem]'>
        <div className="lg:text-[1.8rem] md:text-[1.5rem] text-xl  font-semibold text-[#31BBAC]">ABOUT US</div>
        <div className="lg:text-[2.5rem] md:text-[1.8rem] font-bold text-[1.5rem]">Discover the Difference with Us!</div>
         <div className="flex lg:text-lg md:text-sm text-[0.8rem]  flex-nowrap">
             <p>
             In our Digital Agency, we're not just a team; we're your partners in success. With years of hands-on experience and a track record of happy clients, we prioritize excellence and honesty. Over 25 clients have not just been served; they've been delighted. Our mission is simple: we aim to provide digital solutions that genuinely boost your business. What sets us apart? We're all about you - your satisfaction and growth are at the heart of everything. Experience the power of new-gen digital empowerment with us like never before... <Link to={"/AboutUs"} className=' text-[#31BBAC]'>Read More</Link>

             </p>
         </div>
      </div>

      {/* Video */}
      <div className='lg:w-[40rem] md:w-[25rem] '>
        <img src={Vid} alt="About GIF" className="lg:w-[35rem] md:w-[28rem] border border-dashed border-[#31BBAC]" />
      </div>
    </div>
  );
}

export default About;
