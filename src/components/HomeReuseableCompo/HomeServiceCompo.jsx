function HomeServiceCompo({item1 ,item2,item3,customClassName1}){
    return(
    <>
     <div className="flex-col lg:w-[22rem] lg:h-[23rem] md:w-[15rem] md:h-[18rem] border border-[#13bbac] rounded-xl flex justify-center items-center  font-Poppins space-y-4 pl-3 pr-3 hover:translate-y-[5px]  duration-300 ease-in-out"
    style={customClassName1}>


            <div className=" lg:w-[4rem] lg:h-[4rem] md:w-[3rem] md:h-[3rem] bg-white rounded-full flex justify-center items-center ">
                {item1}
            </div>

            <div className=" lg:text-xl md:text-[0.78rem] text-[#13bbac] font-semibold">
                {item2}
            </div>

            <div className=" text-center  text-white md:text-[0.8rem] lg:text-[1rem]">
                {item3}
            </div>
     </div>  
    </>
    )
}
export default HomeServiceCompo;