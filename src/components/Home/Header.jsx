import React from 'react';
import Img from "/Images/Home/Header.png";
import './../../Css/HomeHeader.css';

function Header() {
  return (
    <>
      <div className="relative overflow-x-hidden z-10 md:h-[50rem] h-[25rem] overflow-hidden">
        <img
          src={Img}
          className="lg:w-full md:w-full sm:w-full w-full md:h-[50rem] h-[25rem] bg-cover bg-center opacity-95 "
        />
        
        {/* Laptop view */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 text-white text-center container mt-[7rem] md:block hidden font-sans">
          <div className="animate-move-down ">
            <div className="lg:text-2xl md:text-xl">Adecho Technologies</div>
            <div className="lg:text-[3rem] md:text-[2rem] font-semibold">BOOSTING BUSINESSES BEYOND BOUNDARIES</div>
            <div className=' lg:text-lg md:text-md'>We combine our global reach with a profound understanding of local markets, our tailored solutions, we amplify your brands, Voice<br/> ensuring it resonates across the digital landscape</div>
          </div>
          <br /><br /><br /><br /><br /><br />
          <div className="animate-move-up ">
            <div className="lg:text-2xl md:text-xl">Adecho Technologies</div>
            <div className="lg:text-[3rem] md:text-[2rem] font-semibold">REVOLUTIONIZING DIGITAL EXCELLENCE</div>
            <div className='lg:text-lg md:text-md'>We combine our global reach with a profound understanding of local markets. our tailored solutions, we amplify your brands,<br/> Voice ensuring it resonates across the digital landscape</div>
          </div>
        </div>

        {/* Mobile View*/}
        <div className=' absolute top-20 left-0 text-white  mt-[7rem] font-sans md:hidden block'>
          <div className=' text-lg'>Adecho Technologies</div>
          <div className=' text-2xl font-bold mt-3'>REVOLUTIONIZING DIGITAL<br /> EXCELLENCE</div> 
        </div>

      </div>
    </>
  );
}

export default Header;
