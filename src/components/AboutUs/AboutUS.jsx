import About from "../Home/About.jsx"
import AboutUs1 from "/Images/AboutUs/AboutUs1.gif"

function AboutUs(){
    const clipPathStyle1 = {
        clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
      };

      const clipPathStyle = {
        clipPath: "polygon(0 0, 15% 0, 0 15%, 0 100%, 100% 100%, 100% 0)",
      };
    return(
        <>
         <div className="bg-[#02021E]">
            <div className=" lg:pt-[4rem] md:pt-[6rem] pt-[4rem]"><About></About></div>
            <div className=" w-full flex flex-col justify-center items-center md:flex md:flex-row md:justify-between bg-white md:pl-20 md:pr-20 pl-8 pr-8 font-Poppins md:pt-[5rem] pt-[1rem] lg:h-[30rem] md:h-[30rem] h-[40rem] ">
                 <div>
                 <div className=" lg:text-3xl text-2xl font-semibold">We're poised to achieve exceptional<br /> outcomes through our relentless<br /> focus on <span className="text-[#13bbac]">product excellence.</span></div>
                 <div className="flex space-x-10 mt-5">
                    <div className="lg:w-[15rem] lg:h-[10rem] md:w-[12rem] md:h-[8rem] w-[9rem] h-[6rem] lg:text-3xl text-2xl font-semibold bg-[#02021E] hover:bg-[#13bbac] hover:text-[#02021E] text-[#13bbac] rounded-xl flex items-center justify-center"
                    style={clipPathStyle}
                    >
                    Project 35+
                    </div>
                    <div className="lg:w-[15rem] lg:h-[10rem] md:w-[12rem] md:h-[8rem] w-[9rem] h-[6rem] lg:text-3xl text-2xl font-semibold bg-[#02021E] hover:bg-[#13bbac] hover:text-[#02021E] text-[#13bbac] rounded-xl flex items-center justify-center"
                    style={clipPathStyle1}
                    >
                    Client 25+
                    </div>
                </div>

                 </div>
                  <div><img src={AboutUs1} className=" lg:w-[30rem] lg:h-[30rem] md:w-[27rem] md:h-[27rem] lg:mt-[-10rem] w-[20rem] h[20rem] md:mt-[-7rem]"></img></div>
            </div>
         </div>
        </>
    )
}
export default AboutUs;