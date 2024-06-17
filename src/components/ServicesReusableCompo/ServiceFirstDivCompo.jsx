import Lead from "/Images/Service/Lead.gif"
import { FaArrowRight } from "react-icons/fa6";

function ServiceFirstDivCompo({item1,Img,item3,item4,item5,item6}){
    const clipPathStyle = {
        clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
      };
    return(
        <>
    <div className="flex justify-center items-center pt-[10rem] overflow-hidden">
          
          {/* blue div */}
          <div className="flex flex-col w-full max-w-[100rem]">
                <div className="grid w-full md:h-[30rem] h-[25rem] card bg-[#31BBAC] rounded-box place-items-center"></div>
            </div>
          {/* whie div */}
          <div 
                className="card grid rounded-box place-items-center w-[70%] max-w-[70rem] h-[23rem] bg-white absolute p-10 overflow-hidden"
                style={clipPathStyle}
            >
            <div>

                <div className=" flex justify-between">
                  <div className=" lg:text-6xl md:text-5xl text-3xl font-semibold mt-6">{item1}</div>
                  <div><img src={Img} className=" w-[20rem] h-[18rem] mt-[-2rem] md:block hidden"></img></div>
               </div>

               <hr className=" bg-black h-[0.1rem]"></hr>

               <div className="md:flex md:flex-row flex flex-col md:justify-between mt-3">
                  <div className=" md:flex md:flex-row flex flex-col">
                    <div className=" lg:text-3xl md:text-2xl text-2xl flex font-semibold">{item3} <p className=" text-gray-600">{item4}</p></div>
                    <div className=" w-10 h-[0.1rem] bg-black rotate-90 mt-5 md:block hidden"></div>
                    <div className="  lg:text-3xl md:text-2xl text-2xl flex  font-semibold">{item5} <p className=" text-gray-600">{item6}</p></div>
                  </div>
                  <button className="btn bg-[#31BBAC]">Lets Collaborate <FaArrowRight /></button>
               </div>
               
            </div>

         </div>

    </div>
        </>
    )
}
export default ServiceFirstDivCompo;