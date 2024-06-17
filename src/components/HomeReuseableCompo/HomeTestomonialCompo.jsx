import { RiChatSmile2Fill } from "react-icons/ri";

function HomeTestomonialCompo({ item2,item3,ClientName4,OurService5}){
    return(
    <>
     <div className=" lg:w-[28rem] lg:h-[23rem] md:w-[23rem] md:h-[15rem] w-[19rem] h-[15rem] border border-[#13bbac] rounded-xl flex flex-col justify-center items-center  font-Poppins space-y-4 pl-3 pr-3 hover:translate-y-[5px]  duration-300 ease-in-out"
   >


            
            <div className=" md:text-2xl text-lg  text-[#13bbac] font-semibold flex">
            <RiChatSmile2Fill className=" text-3xl "></RiChatSmile2Fill>&nbsp;Our Clients Says
            </div>

            <div className=" text-center  text-white md:text-[0.8rem] lg:text-[1rem] text-sm">
                {item2}
            </div>
            <div className=" flex text-white  md:space-x-8 mt-2">
               <div>
                {item3}
               </div>
               <div className=" ">
                   <div className=" md:text-xl text-lg">{ClientName4}</div>
                   <div className=" text-[#13bbac] md:text-md text-sm">{OurService5}</div>
               </div>
            </div>

     </div>  
    </>
    )
}
export default HomeTestomonialCompo;