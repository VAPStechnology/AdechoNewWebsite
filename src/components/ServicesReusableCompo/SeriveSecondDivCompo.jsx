

function ServiceSecondDivCompo({item1,item2Mob,item3,Style}) {
  return (
    <>

 
      <div className="flex justify-center items-center pt-[10rem] ">

        <div className="flex flex-col lg:w-[100rem] md:w-[70rem]  ">
          <div className="grid md:w-full w-[21rem] md:h-[55rem] h-[45rem] card bg-white  rounded-box"
          style={Style}
          >
              <div className="md:text-5xl text-3xl font-bold left-0 pl-8 pt-8">Our Mastery</div>
             {item1}
             {item2Mob}
          </div>
        </div>
      </div>
    </>
  );
}
export default ServiceSecondDivCompo;
