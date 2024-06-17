function HomeServiceCompoMob({item1, item2,customStyle}){
    return(
        <>
        <div className=" border border-[#13bbac] w-[20rem] h-[5rem] rounded-xl flex  items-center space-x-4 p-5"
        style={customStyle}
        >
            <div className=" w-[3rem] h-[2.5rem] bg-white rounded-full flex justify-center items-center">
                {item1}
            </div>

            <div className="text-[#13bbac] font-semibold text-xl">
                {item2}
            </div>
        </div>
        </>
    )
}
export default HomeServiceCompoMob;