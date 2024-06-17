import { FaArrowRightLong } from "react-icons/fa6";

function Button({item1 ,customClassName}){
    return(
        <>
        <button className="btn btn-wide lg:w-[12rem] md:w-[8.5rem] rounded-2xl lg:text-lg text-md hover:bg-[#13bbac]"
        style={customClassName}>
                {item1} <FaArrowRightLong />
              </button>
        </>
    )
}
export default Button;