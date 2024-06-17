function ServiceContentMarketingCompo({item1,item2}){
    return(
        <>
         <div className=" flex justify-center ml-2 mt-5 ">
            <div className=" md:flex md:flex-row flex flex-col folder-shape bg-[#02021E] mt-[5rem] rounded-xl">
               <div className=" md:pt-10 pt-7 md:pl-4 pl-2 pr-2  lg:w-[30rem] lg:h-[20rem] md:w-[24rem] md:h-[17rem] w-[17rem] h-[14rem]">
                 <div className=" md:text-2xl text-xl text-[#31BBAC] font-semibold">{item1}</div>
                 <div className=" lg:text-lg md:text-md text-sm text-white md:mt-8 mt-1">{item2}</div>
               </div>
            </div>
         </div>   
        </>
    )
}
export default ServiceContentMarketingCompo;