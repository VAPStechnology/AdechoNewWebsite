import { Link } from "react-router-dom";

function ServicesOption() {
  
  return (
    <>
    <style>
        {`
        @keyframes slide-down {
          from {
            transform: translateY(-10rem);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .slide-down {
          animation: slide-down 0.4s ease-out;
        }
        `}
  </style>

      <ul className="slide-down menu bg-base-200  lg:w-[20rem] md:w-[17rem] rounded-box absolute mt-10  text-black  p-1 lg:text-lg md:text-md z-10"
      
      >
        <Link to={'/WebDesign'}>
        <li>
          <a className="hover:text-[#13bbac]">Web Design & Devlopment</a>
        </li>
        </Link>
        
        <Link to={'/MobileAppDevelopment'}>
        <li>
         <a className="hover:text-[#13bbac]">Mobile App Devlopment</a>
        </li>
        </Link>
         
        <Link to={'/SeoBacklinking'}>
        <li>
         <a className="hover:text-[#13bbac]">SEO & Backlinking</a>
        </li>
        </Link>
       
        <Link to={"/SocailMediaMarketing"}>
        <li>
         <a className="hover:text-[#13bbac]">Social Media Marketing</a>
        </li>
        </Link>

        <Link to={"/ContentMarketing"}>
        <li>
         <a className="hover:text-[#13bbac]">content Marketing</a>
        </li>
        </Link>

       <Link to={'/LeadGenration'}>
       <li>
         <a className="hover:text-[#13bbac]">Lead Genration</a>
        </li>
       </Link>
      </ul>
    </>
  );
}
export default ServicesOption;
