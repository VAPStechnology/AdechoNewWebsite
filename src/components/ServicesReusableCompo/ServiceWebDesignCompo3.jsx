import ServiceWebDesignCompo2 from "../ServicesReusableCompo/ServiceWebDesignCompo2.jsx";

function ServiceWebDesignCompo3({item1,item2,item3,item4,item5,item6,item7,item8,Img}){
    return(
        <>
        <div className="flex items-center justify-center">
          <ServiceWebDesignCompo2 item1={Img} />
        </div>

        <div className="flex flex-col w-full lg:flex-row mt-10 text-white">
          {/* 1st */}
          <div className="grid flex-grow lg:h-[30rem] md:h-[20rem] h-[30rem] w-full card  rounded-box">

             <div className=" lg:text-4xl md:text-3xl text-2xl text-[#13bbac] left-0">{item1}</div>
             <div className=" lg:text-xl md:text-lg text-md">{item2}</div>
             <div className=" flex md:text-lg text-md lg:hover:bg-[#2e2e61] lg:hover:translate-y-2 h-[5rem] rounded-xl p-1"><span className=" lg:w-16 lg:h-12 w-[3rem] h-[2rem] rounded-full bg-[#85c4be] flex items-center justify-center mr-2 ">1</span>{item3}</div>
             <div className=" flex md:text-lg text-md lg:hover:bg-[#2e2e61] lg:hover:translate-y-2 h-[5rem] rounded-xl p-1"><span className=" lg:w-14 lg:h-12 w-[2.5rem] h-[2rem]  rounded-full bg-[#85c4be] flex items-center justify-center mr-2">2</span>{item4}</div>

          </div>
          {/* 2nd */}
          <div className=" lg:divider-horizontal bg-white lg:w-1"></div>
          <div className="grid flex-grow lg:h-[30rem]  md:h-[20rem] h-[30rem] w-full card  rounded-box ">

             <div className=" lg:text-4xl md:text-3xl text-2xl text-[#13bbac]">{item5}</div>
             <div className=" lg:text-xl md:text-lg text-md">{item6}</div>
             <div className=" flex md:text-lg text-md lg:hover:bg-[#2e2e61] lg:hover:translate-y-2 h-[5rem] rounded-xl p-1"><span className=" lg:w-14 lg:h-12 w-[2.5rem] h-[2rem]  rounded-full bg-[#85c4be] flex items-center justify-center mr-2">1</span>{item7}</div>
             <div className=" flex md:text-lg text-md lg:hover:bg-[#2e2e61] lg:hover:translate-y-2 h-[5rem] rounded-xl p-1"><span className=" lg:w-16 lg:h-12 w-[3rem] h-[2rem]  rounded-full bg-[#85c4be] flex items-center justify-center mr-2">2</span>{item8}</div>
         
         </div>
         </div>
        </>
    )
}
export default ServiceWebDesignCompo3;