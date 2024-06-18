import React, { useState, useRef, useEffect } from "react";
import ServicesOption from "../Home/ServicesOption";
import { IoMenuOutline } from "react-icons/io5";
import "../../App.css";
import MobNavOptions from "../Home/MobNavOptions";
import Button from "../HomeReuseableCompo/Button";
import Logo from '/Images/Home/logo.png'
import HomeLogo from "../HomeReuseableCompo/HomeLogo";
import { Link } from "react-router-dom";

function Nav() {
  const [servicesVisible, setServicesVisible] = useState(false);
  const [mobnav, setMobnav] = useState(false);
  const servicesRef = useRef(null);

  function visibleMob(){
     setMobnav(!mobnav)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesVisible(false);
        setMobnav(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesRef]);

  return (
    <div className="absolute w-full z-20 ">
      <div className="text-white pt-10  pl-5 pr-5 font-Poppins lg:w-full md:w-full sm:w-full">
        <div className="flex justify-between">
          {/* Logo */}
           <div>
               <HomeLogo></HomeLogo>
           </div>

          {/* Buttons */}
          <div className="md:block hidden">
            <div className="flex lg:space-x-5 md:space-x-2 lg:text-lg text-md">
              <Link to={""}><div className="hover:text-[#13bbac] mt-2">Home</div></Link>
              <Link to={"/AboutUs"}><div className="hover:text-[#13bbac] mt-2">About us</div></Link>
              <div
                className="hover:text-[#13bbac] mt-2 relative"
                onMouseEnter={() => setServicesVisible(true)}
              >
                Services
                {servicesVisible && (
                  <div ref={servicesRef}>
                    <ServicesOption />
                  </div>
                )}
              </div>

              <Link to={"/blog1"}>
              <div className="hover:text-[#13bbac] mt-2">Blog</div>
              </Link>

              <Link to={'/Contact'}>
                 <div className="hover:text-[#13bbac] mt-2">Contact Us</div>
              </Link>

             <Link to={"/Contact"}>
             <Button
              item1={"Enquriy"}
              ></Button>
             </Link>
            </div>
          </div>

          {/* Mobile menu*/}
          <div className="md:hidden">
             < IoMenuOutline className=" w-[2rem] h-[2rem]" onClick={visibleMob}></ IoMenuOutline>
             {mobnav && <div ref={servicesRef}><MobNavOptions></MobNavOptions></div>}
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Nav;
