function HomeChooseBox({ item1, item2, item3 }) {
  return (
    <div className="group hover:translate-y-[8px] duration-300 ease-in-out ">
      <div
        className="lg:w-[13rem] lg:h-[10.8rem] md:w-[12rem] md:h-[10.8rem] w-[6rem] h-[5.8rem] rounded-xl bg-[#02021E] group-hover:bg-[#1f1f38] group-hover:border group-hover:border-[#13bbac]"
        style={{ clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)" }}
      ></div>

      <div className="lg:w-[27rem] lg:h-[9.3rem] md:w-[26rem] md:h-[9.4rem] w-[20rem] h-[5.2rem] bg-[#02021E] absolute lg:mt-[-9.3rem] md:mt-[-9.4rem] mt-[-5.2rem] rounded-xl group-hover:bg-[#1f1f38] md:pt-0 pt-3">
        <div className=" flex pl-2 pr-2">


          <div className=" lg:w-[4rem] lg:h-[4rem] md:w-[2.7rem] md:h-[2.7rem] w-[3.5rem] h-[3.5rem] bg-[#13bbac] text-white rounded-full flex justify-center items-center ">
            {item1}
          </div>
          
          <div className="lg:text-3xl md:text-2xl text-3xl  text-[#13bbac] font-semibold md:mt-3 mt-1 ml-1">
            {item2}
          </div>


        </div>
        <div className=" pl-2 pr-1  text-white md:block hidden ">{item3}</div>
      </div>
    </div>
  );
}

export default HomeChooseBox;
