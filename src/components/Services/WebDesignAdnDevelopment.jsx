import ServiceFirstDivCompo from "../ServicesReusableCompo/ServiceFirstDivCompo";
import ServiceWebDesignCompo from "../ServicesReusableCompo/ServiceWebDesignCompo";
import webDesign1 from "/Images/Service/webDesign1.gif";
import WebDesign2 from "/Images/Service/webDesign2.jpg";
import { FaLaptopFile } from "react-icons/fa6";
import { BsDeviceHdd } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { LuHeartHandshake } from "react-icons/lu";
import ServiceContentMarketingCompo from "../ServicesReusableCompo/ServiceContentMarketingCompo";
import HomeBlogCompoLeft from "../HomeReuseableCompo/HomeBlogCompoLeft.jsx";
import ServiceWebDesignCompo2 from "../ServicesReusableCompo/ServiceWebDesignCompo2.jsx";
import ServiceWebDesignCompo3 from "../ServicesReusableCompo/ServiceWebDesignCompo3.jsx";

function WebDesignAdnDevelopment() {
  return (
    <>
      <div className="bg-[#02021E] min-h-full w-full   md:pl-20 md:pr-20 pl-10 pr-10  font-Poppins overflow-y-hidden">
        {/* 1st div */}
        <div className=" ">
          <ServiceFirstDivCompo
            item1={"Web Design & Devlopment"}
            Img={webDesign1}
            item3={"35+"}
            item4={"Projects"}
            item5={"25+"}
            item6={"Client"}
          ></ServiceFirstDivCompo>
        </div>

        {/* Text 2nd div */}
        <div className="md:pl-10 md:pr-10 pl-3 pr-3 pt-12">
          <div className="text-[#13bbac] lg:text-5xl md:text-4xl text-2xl">
            Web Development & Design
          </div>
          <div className=" text-white lg:text-2xl md:text-xl text-lg md:pt-5">
            Are you in search of a dedicated website development service to
            bring your online vision to life? Look no further! Our expert is
            committed to creating captivating digital platforms that seamlessly
            blend aesthetics and functionality.
          </div>
        </div>
        <div className="md:pl-10 md:pr-10 pl-5 pr-5  pt-10">
          <div className="text-[#13bbac] lg:text-5xl md:text-4xl text-2xl">
            Tailored Solutions
          </div>
          <div className=" text-white lg:text-2xl md:text-xl md:pt-5 text-lg">
            Crafted Websites:
          </div>
          <div className=" text-white lg:text-2xl md:text-xl md:pt-5 text-lg">
            User Centric Design:
          </div>
        </div>

        {/* 3rd div */}
        <div className=" flex justify-center items-center mt-10">
          <div className="flex flex-col w-full max-w-[100rem]">
            <div className=" w-full md:h-[33rem] h-[70rem] card bg-white rounded-box   ">
              <div className="md:text-5xl text-3xl font-bold left-0 pl-8 pt-8">
                Our Mastery
              </div>
              <div className="md:flex md:flex-row flex flex-col  items-center justify-evenly md:space-y-0 space-y-2 mt-[3rem]">
                <ServiceWebDesignCompo
                  item1={
                    <FaLaptopFile className="lg:text-9xl text-7xl   text-[#13bbac]"></FaLaptopFile>
                  }
                  item2={
                    <>
                      Fully
                      <br /> Resposive
                    </>
                  }
                ></ServiceWebDesignCompo>

                <ServiceWebDesignCompo
                  item1={
                    <BsDeviceHdd className="lg:text-9xl text-7xl text-[#13bbac]" />
                  }
                  item2={
                    <>
                      Device <br /> Testing
                    </>
                  }
                ></ServiceWebDesignCompo>

                <ServiceWebDesignCompo
                  item1={
                    <RiComputerLine className="lg:text-9xl text-7xl text-[#13bbac]" />
                  }
                  item2={
                    <>
                      Clean
                      <br />& <br />
                      Modern
                    </>
                  }
                ></ServiceWebDesignCompo>

                <ServiceWebDesignCompo
                  item1={
                    <LuHeartHandshake className=" lg:text-9xl text-7xl text-[#13bbac]" />
                  }
                  item2={
                    <>
                      Great
                      <br /> Experience
                    </>
                  }
                ></ServiceWebDesignCompo>
              </div>
            </div>
          </div>
        </div>

         {/* 4th */}
          <ServiceWebDesignCompo3
          Img={"/Images/Service/webDesign2.jpg"}
          item1={<>E-Commerce Website<br /> Development Cost</>}
          item2={"Curious about the investment for your e-commerce venture? Our transparent approach to e-commerce website development costs ensures you get the best value for your budget."}
          item3={"Detailed Quotations: Receive comprehensive quotes detailing the costs associated with development, maintenance, and additional features."}
          item4={"Scalable Solutions: Our pricing structures are designed to accommodate your business growth without breaking the bank."}

          item5={"Website Maintenance Service"}
          item6={"Maintaining your website is as crucial as its development. Our website maintenance services guarantee your online presence remains flawless."}
          item7={"Regular Updates: Stay current with the latest trends and technologies through our routine website updates."}
          item8={"Proactive Security: Our team ensures your website is protected against potential threats, providing you with peace of mind."}
          ></ServiceWebDesignCompo3>

          {/* 5th */}
          <ServiceWebDesignCompo3
          Img={"/Images/Service/webDesign3.jpg"}
          item1={<>WordPress Development<br />Company</>}
          item2={"Looking for a reliable partner for your WordPress project? Our WordPress development company is your go-to source for expert solutions."}
          item3={"User-Friendly CMS: Enjoy the flexibility of WordPress with our intuitive and user-friendly content management solutions."}
          item4={"Scalable Solutions: Our pricing structures are designed to accommodate your business growth without breaking the bank."}

          item5={<>Affordable Website<br /> Development</>}
          item6={"Quality website development doesn't have to come with a hefty price tag. Our affordable website development services offer cost-effective solutions without compromising on quality."}
          item7={"Regular Updates: Stay current with the latest trends and technologies through our routine website updates."}
          item8={"Proactive Security: Our team ensures your website is protected against potential threats, providing you with peace of mind."}
          ></ServiceWebDesignCompo3>

          {/* 6th */}
          <ServiceWebDesignCompo3
          Img={"/Images/Service/webDesign4.png"}
          item1={<>WordPress Development<br />Company</>}
          item2={"Looking for a reliable partner for your WordPress project? Our WordPress development company is your go-to source for expert solutions."}
          item3={"User-Friendly CMS: Enjoy the flexibility of WordPress with our intuitive and user-friendly content management solutions."}
          item4={"Scalable Solutions: Our pricing structures are designed to accommodate your business growth without breaking the bank."}

          item5={<>Affordable Website<br /> Development</>}
          item6={"Quality website development doesn't have to come with a hefty price tag. Our affordable website development services offer cost-effective solutions without compromising on quality."}
          item7={"Regular Updates: Stay current with the latest trends and technologies through our routine website updates."}
          item8={"Proactive Security: Our team ensures your website is protected against potential threats, providing you with peace of mind."}
          ></ServiceWebDesignCompo3>

      </div>
    </>
  );
}
export default WebDesignAdnDevelopment;
