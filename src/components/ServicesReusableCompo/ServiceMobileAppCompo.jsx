import './../../Css/ServiceMobileAppCompo.css';
import { TbHexagon3D } from "react-icons/tb";

function ServiceMobileAppCompo({item1,item2,item3,item4,item5,item6,item7,Icons}){
    return(
        <>
         <div className=" flex justify-center folder-wrapper  lg:w-full lg:h-[30.2rem] md:w-[48rem] md:h-[33rem] mt-[5rem] font-Poppins max-w-[100rem] group">
            <div className=" folder-shape lg:w-full lg:h-[30rem] md:w-[48rem] md:h-[33rem] bg-[#02021E] hover:bg-white  rounded-2xl md:pl-10 md:pr-10 pl-2 pr-2">
                 <div className=' flex lg:pt-14 pt-16'>
                     {/* icon */}
                      <div className=' bg-[#31BBAC]  md:w-[8rem] md:h-[7rem] w-[5rem] h-[4rem] rounded-full flex justify-center items-center'>
                         <div className=' text-white text-7xl'>{Icons}</div>
                      </div>
                      {/* heading */}
                      <div className=' lg:text-5xl md:text-4xl text-xl text-[#31BBAC] ml-4 '>{item1} </div>
                 </div>

                 <div className=' text-white group-hover:text-black  md:text-xl text-sm md:mt-4 mt-2'>{item2} </div>
                 <div className=' lg:text-4xl md:text-3xl text-lg text-[#31BBAC] md:mt-5 mt-2'>{item3}</div>

                 <div className=' flex text-white group-hover:text-black  md:mt-5 mt-2'>
                    <div className=' xl:text-xl md:text-lg text-sm font-semibold flex'>{item4}</div>
                    <div className=' xl:text-xl md:text-lg text-sm '>{item5}</div>
                 </div>

                 <div className=' flex text-white group-hover:text-black mt-2'>
                    <div className=' xl:text-xl md:text-lg text-sm font-semibold flex'>{item6}</div>
                    <div className=' xl:text-xl md:text-lg text-sm '>{item7}</div>
                 </div>
            </div>
         </div>   
        </>
    )
}
export default ServiceMobileAppCompo;

  