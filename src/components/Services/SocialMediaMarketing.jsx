import ServiceFirstDivCompo from "../ServicesReusableCompo/ServiceFirstDivCompo";
import social1 from "/Images/Service/SocialMarketing1.gif"
import social2 from "/Images/Service/socailMarketing2.gif"
import social3 from "/Images/Service/SocialMarketing3.png"
import ServiceSecondDivCompo from "../ServicesReusableCompo/SeriveSecondDivCompo";
import HomeServiceCompoMob from "../HomeReuseableCompo/HomeServiceCompoMob";
import HomeServiceCompo from "../HomeReuseableCompo/HomeServiceCompo";
import { IoAnalyticsSharp } from "react-icons/io5";
import ServiceThirdCompo from "../ServicesReusableCompo/ServiceThirdCompo";



function SocialMediaMarketing(){
    return(
        <>
        
        <div className="bg-[#02021E] min-h-full w-full   pl-10 pr-10  font-Poppins overflow-y-hidden">
           {/* 1st div */}
        <div className=" ">
        <ServiceFirstDivCompo
           item1={"Social Media Marketing"}
           Img={social1}
           item3={"35+"}
           item4={"Projects"}
           item5={"25+"}
           item6={"Client"}
           ></ServiceFirstDivCompo>
        </div>
        {/* 1st div end */}

        <div className="text-[#31BBAC] lg:text-5xl md:text-4xl text-2xl text-center mt-14 font-semibold ">The Adecho Advantages:Unmatched excellence in SMM</div>
        <div className=" text-white lg:text-2xl md:text-xl text-lg text-center mt-9">In a world flooded with digital noise, AdEcho Technologies rises as the symphony of social media success. Our commitment to advancement, accuracy, and client fulfillment sets them separated.</div>        

        {/* 2nd div */}
        <div className=" mt-[-4rem]">
       <ServiceSecondDivCompo
        
        item1={<div className=" space-y-8 md:block hidden">
        <div className=" flex justify-evenly space-x-1">
           <HomeServiceCompo
           item1={<IoAnalyticsSharp className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]"></IoAnalyticsSharp >}
           item2={"Strategy Development"}
           item3={"Adecho Technologies devises custom plans organise together with your business goals, recognizing key stages content types to engage your audience oppropriately"}
           customClassName1={{backgroundColor:'#02021E'}}
           ></HomeServiceCompo>

          <HomeServiceCompo
           item1={<IoAnalyticsSharp className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]"></IoAnalyticsSharp >}
           item2={"Content Creation"}
           item3={"They create effective and relevant content, Including images, videos, articles, and Infographics, optimized for each social media channel we involves with your audiences."}
           customClassName1={{backgroundColor:'#02021E'}}
           ></HomeServiceCompo>

          <HomeServiceCompo
           item1={<IoAnalyticsSharp className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]"></IoAnalyticsSharp >}
           item2={"Adaption and Innovation"}
           item3={"Remain upgraded with most recent social media patterns and adjust procedures in like manner. Explore with Modern highlights, groups to stay relevant and capture audience attention."}
           customClassName1={{backgroundColor:'#02021E'}}
           ></HomeServiceCompo>
        </div>
        <div className=" flex justify-evenly">
           <HomeServiceCompo
           item1={<IoAnalyticsSharp className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]"></IoAnalyticsSharp >}
           item2={"Call-to- Action (CTA)"}
           item3={"Comprises clear and compelling CTA's in posts to empower clients to require porticular activities, such as visiting the websites, downloading resource, or signing up for newsletter."}
           customClassName1={{backgroundColor:'#02021E'}}
           ></HomeServiceCompo>

          <HomeServiceCompo
           item1={<IoAnalyticsSharp className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]"></IoAnalyticsSharp >}
           item2={"Influencer Partnerships"}
           item3={"We Collaborate with influencers to amplify brand perceivability and validity inside particular niches or demographics."}
           customClassName1={{backgroundColor:'#02021E'}}
           ></HomeServiceCompo>

          <HomeServiceCompo
           item1={<IoAnalyticsSharp className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]"></IoAnalyticsSharp >}
           item2={"Analytics "}
           item3={"Frequently screen social media measurement to gage the execution of different compaigns & analyze the Information to get it what content resonates best."}
           customClassName1={{backgroundColor:'#02021E'}}
           ></HomeServiceCompo>
        </div>
        </div>}

        item2Mob={<>
          <div className="md:hidden">
           <div className="flex flex-col justify-center items-center space-y-5">
             <HomeServiceCompoMob
             item1={<IoAnalyticsSharp className="text-3xl text-[#13bbac]"></IoAnalyticsSharp>}
             item2={"Strategy Development"}
             customStyle={{backgroundColor:'#02021E'}}
             ></HomeServiceCompoMob>

             <HomeServiceCompoMob
             item1={<IoAnalyticsSharp className="text-3xl text-[#13bbac]"></IoAnalyticsSharp>}
             item2={"Content Creation"}
             customStyle={{backgroundColor:'#02021E'}}
             ></HomeServiceCompoMob>

             <HomeServiceCompoMob
             item1={<IoAnalyticsSharp className="text-3xl text-[#13bbac]"></IoAnalyticsSharp>}
             item2={"Adaption and Innovation"}
             customStyle={{backgroundColor:'#02021E'}}
             ></HomeServiceCompoMob>

             <HomeServiceCompoMob
             item1={<IoAnalyticsSharp className="text-3xl text-[#13bbac]"></IoAnalyticsSharp>}
             item2={"Call-to- Action (CTA)"}
             customStyle={{backgroundColor:'#02021E'}}
             ></HomeServiceCompoMob>

             <HomeServiceCompoMob
             item1={<IoAnalyticsSharp className="text-3xl text-[#13bbac]"></IoAnalyticsSharp>}
             item2={"Influencer Partnerships"}
             customStyle={{backgroundColor:'#02021E'}}
             ></HomeServiceCompoMob>

             <HomeServiceCompoMob
             item1={<IoAnalyticsSharp className="text-3xl text-[#13bbac]"></IoAnalyticsSharp>}
             item2={"Analytics"}
             customStyle={{backgroundColor:'#02021E'}}
             ></HomeServiceCompoMob>
           </div>
          </div>
        </>}
        >
        </ServiceSecondDivCompo>
       </div>
       {/* 2nd div ends */}

       {/* 3rd div */}
       <div>
         <ServiceThirdCompo
         Img={social2}
         item1={<div className=" mt-7">The Role of Adecho in Succes</div>}
         Img2={social3}
         item6={<div className=" md:mt-3 ">Innovation Over Boundaries:</div>}
         item7={<div className="md:mt-3 ">Adecho Technologies doesn't follow trends; they set them. Remain ahead of the curve with strategies that evolve alongside the ever-changing scene of social media.</div>}
         item8={<div className="md:mt-3 ">Measurable Results:</div>}
         item9={<div className="md:mt-3">Measurements matter, and Adecho conveys. Trackyour ROI with comprehensive analytics, assuring that every marketing dollar is well spent and brings actualresults.</div>}
         item10={<div className="md:mt-3">Customer-Centric Approach:</div>}
         item11={<div className="md:mt-3">Measurements matter, and Adecho conveys. Trackyour ROI with comprehensive analytics, assuring that every marketing dollar is well spent and brings actualresults.</div>}
         ></ServiceThirdCompo>
       </div>
       {/* 3rd div ends*/}
        </div>
        </>
    )
}

export default SocialMediaMarketing;