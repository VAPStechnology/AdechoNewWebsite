import ServiceFirstDivCompo from "../ServicesReusableCompo/ServiceFirstDivCompo";
import ServiceMobileAppCompo from "../ServicesReusableCompo/ServiceMobileAppCompo";
import MobileAppDevelopment1 from "/Images/Service/MobileAppDevelopment1.gif"
import { TbHexagon3D } from "react-icons/tb";
import { LuPlane } from "react-icons/lu";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';


function MobileAppDevelopment(){
    return(
        <>
        <div className=" bg-[#02021E] pl-10 pr-10">
        {/* 1st div */}
        <div className=" ">
        <ServiceFirstDivCompo
           item1={"Mobile App Development"}
           Img={MobileAppDevelopment1}
           item3={"35+"}
           item4={"Projects"}
           item5={"25+"}
           item6={"Client"}
           ></ServiceFirstDivCompo>
        </div>
        {/* 1st div end */}

        {/* second div */}
        <div className=" flex flex-col justify-center items-center">
            {/* 1st div */}
            <ServiceMobileAppCompo
            Icons={<TbHexagon3D />}
            item1={"On-Demand App Development Services in Dynamic Urban"}
            item2={"Explore leading on-demand app development services tailored to thrive in the dynamic urban environment. These expert services are poised to transform your ideas into cutting-edge applications that resonate with the fast-paced nature of modern city life."}
            item3={"Tailored Solutions"}
            item4={"Crafted Websites :"}
            item5={" Dive into innovative solutions designed to meet the unique demands of today's bustling urban spaces."}
            item6={"User Centric Design :"}
            item7={"Prioritizing user satisfaction, we ensure your website captivates visitors, driving tangible results."}
            ></ServiceMobileAppCompo>
            {/* 2nd div */}
             <ServiceMobileAppCompo
            Icons={<LuPlane></LuPlane>}
            item1={"Premier Mobile App Developers for Startup Ventures"}
            item2={"Embark on your Startup journey with seasoned professionals offering the best mobile app development services. These experts are dedicated to transforming your startup concepts into standout applications."}
            item3={"Tailored Solutions"}
            item4={"Innovative Solutions: "}
            item5={"Benefit from the expertise of developers who understand the unique challanges and oppourtunities faced by startups"}
            item6={"Customized Development: "}
            item7={"Prioritizing user satisfaction, we ensure your website captivates visitors, driving tangible results."}
            ></ServiceMobileAppCompo>
            {/* 3rd div */}
            <ServiceMobileAppCompo
            Icons={<TbDeviceMobileCode />}
            item1={"Bespoke Mobile App Development Solutions"}
            item2={"Explore mobile app development services crafted to meet the distinctive needs of the local environment. These Services are designed to resonate With the unique characteristics and preferences of the community"}
            item3={"Tailored Solutions"}
            item4={"City-Centric Solutions:"}
            item5={"Benefit from the expertise of developers who understand the unique challanges and oppourtunities faced by startups."}
            item6={"Customized Development: "}
            item7={"From Concept to execution, experience a comprehensive approach to bringing your digital ideas to life"}
            ></ServiceMobileAppCompo>
            {/* 4th div */}
            <ServiceMobileAppCompo
            Icons={<FaArrowUpShortWide />}
            item1={"Unlock Flexibility by Hiring Freelance Mobile App Developers"}
            item2={"Embrace the Flexibility of Freelance expertise by hiring professionals committed to personalized and efficient app development, This approach seamlessly aligns with the specific Requirements of your projects."}
            item3={"Tailored Solutions"}
            item4={"Flexible Development:"}
            item5={"Tap into a flexible development approach with freelance experts tailored to your projects needs."}
            item6={"Efficient Collaboration: "}
            item7={"Experience efficient development cycles with dedicated professionals focused on realizing your visions"}
            ></ServiceMobileAppCompo>
            {/* 5th div */}
            <ServiceMobileAppCompo
            Icons={<FontAwesomeIcon icon={faHandshakeAngle} />}
            item1={"Expert Android App Developement"}
            item2={"Embrace the Flexibility of Freelance expertise by hiring professionals committed to personalized and efficient app development, This approach seamlessly aligns with the specific Requirements of your projects."}
            item3={"Tailored Solutions"}
            item4={"Flexible Development:"}
            item5={"Tap into a flexible development approach with freelance experts tailored to your projects needs."}
            item6={"Efficient Collaboration: "}
            item7={"Experience efficient development cycles with dedicated professionals focused on realizing your visions"}
            ></ServiceMobileAppCompo>
        </div>

        {/* Content */}
        <div className=" flex flex-col mt-10 md:pl-20 md:pr-20 pl-3 pr-3">
             <div className=" md:text-5xl text-4xl font-semibold text-[#13bbac]">Guaranteeing Quality Affirmation and Testing</div>
             <div className=" md:text-3xl text-2xl text-[#13bbac] mt-6">Seamless ios App Development Tailored to user Prefrences</div>
             <div className=" md:text-xl text-lg text-white mt-4">For those engaged in the Apple ecosystem, access iOS app development services providing seamless and immersive experiences tailored to the preferences of iOS users.</div>
             <div className=" md:text-xl text-lg text-white mt-10"><span className=" font-bold">Apple Ecosystem Proficiency:</span> Leverage our proficiency in iOS development for a seamless and engaging user experience.</div>
             <div className=" md:text-xl text-lg text-white mt-3"><span className=" font-bold">Platform-Specific Solutions:</span> Crafted solutions that align with the high standards of the Apple user community.</div>
        </div>
        <div className=" flex flex-col mt-20 md:pl-20 md:pr-20 pl-3 pr-3">
             <div className="md:text-3xl text-2xl text-[#13bbac]">Harness Cross-Platform Capabilities with Hybrid App Development</div>
             <div className=" md:text-xl text-lg text-white mt-4">Experience the best of both worlds with hybrid app development services designed to maximize audience reach without compromising on performance or user experience.</div>
             <div className=" md:text-xl text-lg text-white mt-10"><span className=" font-bold">Cross-Platform Excellence: </span>Develop apps that seamlessly function across various platforms, optimizing your audience reach.</div>
             <div className=" md:text-xl text-lg text-white mt-3"><span className=" font-bold">Performance and User Experience: </span>Ensure your hybrid app meets high-performance standards while delivering a user- friendly experience</div>
        </div>
        <div className=" flex flex-col mt-20 md:pl-20 md:pr-20 pl-3 pr-3">
             <div className=" md:text-3xl text-2xl text-[#13bbac]">Elevate Your Business with Tailored E-commerce App Development</div>
             <div className=" md:text-xl text-lg text-white mt-4">Step into the realm of online commerce with specialized e-commerce app development services. These services create engaging and user-friendly apps to propel your business to new heights.</div>
             <div className=" md:text-xl text-lg text-white mt-10"><span className=" font-bold">E-commerce Expertise: </span>Tap into our knowledge of e-commerce trends and technology to enhance your online business.</div>
             <div className=" md:text-xl text-lg text-white mt-3"><span className=" font-bold">User-Centric Design:</span> Crafted with the end-user in mind, our e-commerce apps priortize a seamless and enjoyable shopping experience.</div>
        </div>

        </div>
        </>
    )
}
export default MobileAppDevelopment;