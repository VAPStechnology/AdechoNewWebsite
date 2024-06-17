import Lead from "/Images/Service/Lead.gif"
function ServiceThirdCompo({item1,item2,item3,item4,item5,item6,item7,item8,item9,item11,item10,Img,Img2}){
    return(
        <>
          <div className=" flex justify-center">
            <div className=" md:flex md:flex-row flex flex-col folder-shape lg:w-[90rem] lg:h-[42rem] md:w-[50rem] md:h-[40rem] bg-white mt-[5rem] rounded-xl">

              <div className=" md:block hidden">
                 <img src={Img} 
                 className=" w-[70rem] h-[40rem]"
                 />
              </div>

              <div className="flex  flex-col p-4 md:p-0">
              <div className=" mt-[5rem]">
                  <div className=" lg:text-[2.5rem] md:text-[2rem] text-xl md:pt-0 pt-[3rem] text-center md:text-start font-semibold text-[#13bbac] ">{item1}</div>
                  <div className="md:hidden flex items-center justify-center"><img src={Img2} className=" "></img></div>
                  <div  className=" lg:text-xl md:text-lg text-md  text-[#13bbac] mt-1">{item2}</div>
                  <div className=" lg:text-xl md:text-lg text-md text-black mt-1">{item3}</div>
                  <div  className="  lg:text-xl md:text-lg text-md  text-[#13bbac] mt-1">{item4}</div>
                  <div className=" lg:text-xl md:text-lg text-md text-black mt-1">{item5}</div>
              </div>

              <div>
                  <div className=" flex">
                    <div className=" lg:text-lg md:text-md text-sm text-[#13bbac] mt-1 mr-3">{item6}</div>
                    <div className=" lg:text-lg md:text-md text-sm   text-black mt-2">{item7}</div>
                  </div>
                  <div className=" flex mt-4">
                    <div className="  lg:text-lg md:text-md text-sm   text-[#13bbac] mt-1 mr-3">{item8}</div>
                    <div className=" lg:text-lg md:text-md text-sm  text-black mt-2">{item9}</div>
                  </div>
                  <div className=" flex mt-4">
                    <div className="  lg:text-lg md:text-md text-sm   text-[#13bbac] mt-1 mr-3">{item10}</div>
                    <div className=" lg:text-lg md:text-md text-sm  text-black mt-2">{item11}</div>
                  </div>
              </div>
              </div>

            </div>
          </div>
        </>
    )
}
export default ServiceThirdCompo;