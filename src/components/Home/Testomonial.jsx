import React, { useRef } from 'react';
import HomeTestomonialCompo from '../HomeReuseableCompo/HomeTestomonialCompo';
import Blog3 from '/Images/Home/Blog3.jpg';

function Testomonial() {
  const carouselRef = useRef(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.querySelector('.carousel-item').offsetWidth;
      carouselRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.querySelector('.carousel-item').offsetWidth;
      carouselRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="w-full bg-[#02021E] flex flex-col justify-center items-center h-[50rem] md:pl-10 md:pr-10 pl-8 pr-8 md:mt-0 ">
        <div className="flex justify-center items-center flex-col mb-10">
          <div className="lg:text-[1.8rem] md:text-[1.5rem] text-xl font-semibold text-[#31BBAC]">
          OUR TESTOMONIAL
          </div>
          <div className="lg:text-[2.5rem] md:text-[1.8rem] font-bold text-[1.5rem] text-white">
            Discover the Difference with Us!
          </div>
        </div>
        <div className="flex space-x-4 mb-4 lg:ml-[57rem] md:ml-[43rem] ml-[15rem]">
          <button onClick={scrollPrev} className="bg-slate-300 w-10 h-10 rounded-full text-2xl font-bold mt-1">
            {'<'}
          </button>
          <button onClick={scrollNext} className="bg-slate-300 w-10 h-10 rounded-full text-2xl font-bold mt-1">
            {'>'}
          </button>
        </div>
        <div
          ref={carouselRef}
          className="carousel rounded-box lg:w-[65rem] md:w-[50rem] w-[20rem] h-[27rem] space-x-6 overflow-x-scroll scrollbar-hide"
        >
          <div className="carousel-item">
            <HomeTestomonialCompo
              item2={
                <>
                  I own Suman Garments, a Boutique that offers customized and
                  fashionable garments for women. I wanted to expand my business
                  and reach more customers online, but I didn't have the.
                </>
              }
              item3={
                <img
                  src={Blog3}
                  className="lg:w-[4rem] lg:h-[4rem] md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem] rounded-full"
                  alt="testomonial"
                />
              }
              ClientName4="Suman Garments"
              OurService5="App Developer"
            />
          </div>

          <div className="carousel-item">
            <HomeTestomonialCompo
              item2={
                <>
                  I have been using Adecho Technologies services, and I am very
                  satisfied with the results, They helped me design and develop
                  a user. friendly website for my brand, Nikhil Garment, that
                  showcase
                </>
              }
              item3={
                <img
                  src={Blog3}
                  className="lg:w-[4rem] lg:h-[4rem] md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem] rounded-full"
                  alt="testomonial"
                />
              }
              ClientName4="Nikhil Enterprises"
              OurService5="Owner"
            />
          </div>

          <div className="carousel-item">
            <HomeTestomonialCompo
              item2={
                <>
                  As the owner of Harsh Enterprise looking for a way to improve
                  my presence and reach new markı That's when I came across Ade
                  Technologies services, a comp.
                </>
              }
              item3={
                <img
                  src={Blog3}
                  className="lg:w-[4rem] lg:h-[4rem] md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem] rounded-full"
                  alt="testomonial"
                />
              }
              ClientName4="Harsh Enterprises"
              OurService5="web designer"
            />
          </div>

          <div className="carousel-item">
            <HomeTestomonialCompo
              item2={
                <>
                  I run Khushihal Baba Garment, a small business that sells
                  traditional and ethnic garments online. I wanted to grow my
                  business and reach more customers, but I didn't have the
                </>
              }
              item3={
                <img
                  src={Blog3}
                  className="lg:w-[4rem] lg:h-[4rem] md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem] rounded-full"
                  alt="testomonial"
                />
              }
              ClientName4="Khushihal Baba Garment"
              OurService5="App Developer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testomonial;
