import HServiceCompo from "../HomeReuseableCompo/HomeServiceCompo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine,faChartSimple,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { TbWorld } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import HomeServiceCompoMob from "../HomeReuseableCompo/HomeServiceCompoMob";

function Services(){
    return(
        <>
     <div className=" h-[60rem] bg-[#02021E]  md:pl-20 md:pr-20 pl-8 pr-8 pt-10 w-full">
        <div className=" md:text-center text-[#13bbac] font-semibold text-xl">OUR SERVICES</div>
        <div className=" md:text-center text-white lg:text-[3rem] md:text-[2rem] text-[1.5rem] font-bold">Empowering Growth - Inspring Success</div>
        
        {/* Loptop view */}
        <div className="space-y-12 mt-10 md:block hidden ">
            <div className=" flex justify-evenly  space-x-4 ">
              <HServiceCompo 
                customClassName1={{ display: 'flex', flexDirection: 'column' }}
                item1={<TbWorld className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]"></TbWorld>}
                item2={"Web Design & Devlopment"}
                item3={<>The Process of Building websites, design, coding and functionality to deliver a user-centric, visually appealing online <br /> presence</>}
              />
              <HServiceCompo 
                customClassName1={{ display: 'flex', flexDirection: 'column' }}
                item1={< FaMobileAlt className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]" />}
                item2={"Mobile App Developement"}
                item3={<>Creating software applications that runs on mobile devices and utilizes a network connection to work with remote computing resources</>}
              />
              <HServiceCompo 
                customClassName1={{ display: 'flex', flexDirection: 'column' }}
                item1={<FaPython className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]" />}
                item2={"Social Media Marketing"}
                item3={<>We use of social platforms to connect with audiences build brand and promote products or service through content and strategic advertising</>}
              />
            </div>

            <div className=" flex justify-evenly  space-x-4 ">
              <HServiceCompo 
                customClassName1={{ display: 'flex', flexDirection: 'column' }}
                item1={<TbWorld className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]"></TbWorld>}
                item2={"SEO & Backlink"}
                item3={<>The Process of Building websites, design, coding and functionality to deliver a user-centric, visually appealing online <br /> presence</>}
              />
              <HServiceCompo 
                customClassName1={{ display: 'flex', flexDirection: 'column' }}
                item1={ <FontAwesomeIcon icon={faChartSimple} className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]" />}
                item2={"Lead Generation"}
                item3={<>Strategic process of identifying and nurturing potential customers, guiding them through the sales funnel</>}  
              />  
              <HServiceCompo 
                customClassName1={{ display: 'flex', flexDirection: 'column' }}
                item1={<FontAwesomeIcon icon={faPenToSquare} className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]" />}
                item2={"Content Marketing"}
                item3={<>Strategic Approach to creating and distributing valuable, relevant content to attract and engage a target audience</>}
              />
            </div>
        </div> 
         {/* Mobile view */}
         <div className="md:hidden">
              <div className=" flex justify-center items-center flex-col space-y-8 mt-8">
                 <HomeServiceCompoMob
                 item1={<TbWorld className=" text-[#13bbac] h-[2rem] w-[2.4rem]"></TbWorld>}
                 item2={<>Web Design & Devlopment</>}
                  />

                 <HomeServiceCompoMob
                 item1={<FaMobileAlt className=" text-[#13bbac] h-[2rem] w-[2rem]" />}
                 item2={"Mobile App Developement"}
                 />

                 <HomeServiceCompoMob
                 item1={<FaPython className=" text-[#13bbac] h-[2rem] w-[2rem]" />}
                 item2={"Social Media Marketing"}
                 />

                 <HomeServiceCompoMob
                 item1={<TbWorld className=" text-[#13bbac] h-[2rem] w-[2rem]" />}
                 item2={"SEO & Backlink"}
                 />

                 <HomeServiceCompoMob
                 item1={<FontAwesomeIcon icon={faChartSimple} className=" text-[#13bbac] h-[2rem] w-[2rem]" />}
                 item2={"Lead Generation"}
                 ></HomeServiceCompoMob>

                 <HomeServiceCompoMob
                 item1={<FontAwesomeIcon icon={faPenToSquare} className=" text-[#13bbac] h-[2rem] w-[2rem]" />}
                 item2={"Content Marketing"}
                 ></HomeServiceCompoMob>
             </div>
        </div>
     </div>
        </>
    )
}
export default Services;