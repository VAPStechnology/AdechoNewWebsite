import { Link } from "react-router-dom";

function ServiceOptionMob(){
    return(
        <>
       <div className=" absolute  w-[20rem] h-[23rem] bg-white rounded-box mt-[-2.5rem] font-Poppins z-20 ml-[-2.5rem]">
     <ul className="menu text-xl text-black  text-center ">
        <div className=" text-3xl text-center font-semibold">Service</div>
       
        <Link to={"/WebDesign"}>
        <li>
          <a className="hover:text-[#13bbac] text-lg">Web Design & Devlopment</a>
        </li>
        </Link>
        <Link to={"/MobileAppDevelopment"}>
        <li>
          <a className="hover:text-[#13bbac] text-lg">Mobile App Devlopment</a>
        </li>
        </Link>
       <Link to={"/SeoBacklinking"}>
       <li>
          <a className="hover:text-[#13bbac] text-lg">SEO & Backlinking</a>
        </li>
       </Link>

        <Link to={"/SocailMediaMarketing"}>
        <li>
         <a className="hover:text-[#13bbac] text-lg">Social Media Marketing</a>
        </li>
        </Link>

        <Link to={"/ContentMarketing"}>
        <li>
          <a className="hover:text-[#13bbac] text-lg">content Marketing</a>
        </li>
        </Link>

        <Link to={'/LeadGenration'}>
        <li>
          <a className="hover:text-[#13bbac] text-lg">Lead Genration</a>
        </li>
        </Link>
       
      </ul>
   
     </div>
        </>
    )
}
export default ServiceOptionMob;