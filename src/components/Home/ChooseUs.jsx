import HomeChooseBox from "../HomeReuseableCompo/HomeChooseBox";
import Img from "/Images/Home/ChooseUs.gif";
import { FaPython } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io"; 
import { IoCall } from "react-icons/io5";
import { FaIndustry } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";


function ChooseUs() {
  return (
    <>
      <div className="hero min-h-screen  bg-[#02021E] md:pl-20 md:pr-20 pl-8 pr-8  lg:mt-0">
             <div className=" text-center text-white lg:mt-[-50rem] md:mt-[-60rem] mt-[-66rem]">
             <div className="lg:text-[1.8rem] md:text-[1.5rem] text-xl  font-semibold text-[#31BBAC]">WHY CHOOSE US</div>
        <div className="lg:text-[2.5rem] md:text-[1.8rem] font-bold text-[1.5rem]">Discover the Difference with Us!</div>
             </div>
        <div className="hero-content flex-col  lg:flex-row md:flex-row flex ">

            {/* Img */}
            {/* <div className=" bg-blue-500 lg:w-[30rem] lg:h-[30rem] md:w-[25rem] md:h-[20rem] ml-[-10rem]"> */}
          
           <img
              src={Img}
              className="lg:w-[50rem] lg:h-[40rem] lg:ml-[-27rem] md:w-[35rem] md:h-[40rem] w-[40rem] h-[30rem] md:ml-[-21rem] md:mt-0 mt-[10rem]"
            /> 
     
          {/* </div> */}

          {/* Box */}
          <div className=" md:mt-[10rem] lg:space-y-5 space-y-3 lg:ml-[5rem] md:ml-0 ml-[-13rem]">
          <HomeChooseBox
          item1={<FaIndustry className="  lg:w-[2.5rem] lg:h-[3rem] w-[1.8rem] h-[1.8rem]" />}
          item2={"Best In Industry"}
          item3={<>Discover the best-in-class Il solutions provider offering cutting-edge technology solutions tailored to meet the evolving needs of businesses.</>}
          ></HomeChooseBox>

          <HomeChooseBox
          item1={<IoIosContacts className="  lg:w-[2.5rem] lg:h-[3rem] w-[1.8rem] h-[1.8rem]" />}
          item2={"Skillful Mastery"}
          item3={<>Discover the best-in-class Il solutions provider offering cutting-edge technology solutions tailored to meet the evolving needs of businesses</>}
          ></HomeChooseBox>

          <HomeChooseBox
          item1={< BsPeopleFill className="  lg:w-[2.5rem] lg:h-[3rem] w-[1.8rem] h-[1.8rem]" />}
          item2={"Professional Staff"}
           item3={<>Discover the best-in-class Il solutions provider offering cutting-edge technology solutions tailored to meet the evolving needs of businesses</>}
          ></HomeChooseBox>

          <HomeChooseBox
          item1={< IoCall className="  lg:w-[2.5rem] lg:h-[3rem] w-[1.8rem] h-[1.8rem]" />}
          item2={"24/7 Live Support"}
           item3={<>Discover the best-in-class Il solutions provider offering cutting-edge technology solutions tailored to meet the evolving needs of businesses</>}
          ></HomeChooseBox>
           
          </div>
        </div>
      </div>
    </>
  );
}
export default ChooseUs;
