import ServiceSecondDivCompo from "../ServicesReusableCompo/SeriveSecondDivCompo";
import ServiceFirstDivCompo from "../ServicesReusableCompo/ServiceFirstDivCompo";
import Nav from "../Ui/Nav";
import Lead2 from "/Images/Service/Lead2.gif"
import Lead from "/Images/Service/Lead.gif"
import Lead3 from "/Images/Service/LeadMob3.png"
import HomeServiceCompo from "../HomeReuseableCompo/HomeServiceCompo";
import { FaArrowRight } from "react-icons/fa6";
import { IoAnalyticsSharp } from "react-icons/io5";
import ServiceThirdCompo from "../ServicesReusableCompo/ServiceThirdCompo";
import HomeServiceCompoMob from "../HomeReuseableCompo/HomeServiceCompoMob";

function LeadGenration() {
  return (
    <>
      
      <div className="bg-[#02021E] min-h-full w-full   pl-10 pr-10  font-Poppins overflow-y-hidden">


        {/* 1st div */}
        <div className=" ">
        <ServiceFirstDivCompo
           item1={"Lead Generation"}
           Img={Lead2}
           item3={"35+"}
           item4={"Projects"}
           item5={"25+"}
           item6={"Client"}
           ></ServiceFirstDivCompo>
        </div>
        {/* 1st div end */}

        <div className="text-[#31BBAC] lg:text-5xl md:text-4xl text-2xl text-center mt-14 font-semibold ">The Adecho Advantages:Unmatched excellence in SMM</div>
        <div className=" text-white lg:text-2xl md:text-xl text-lg text-center mt-9">In a world flooded with digital noise, AdEcho Technologies rises as the symphony of social media success. Our commitment to advancement, accuracy, and client fulfillment sets them separated.</div>
        
       <div className=" mt-[-4rem]">
       <ServiceSecondDivCompo
        
        item1={<div className=" space-y-8 md:block hidden">
        <div className=" flex justify-evenly space-x-1">
           <HomeServiceCompo
           item1={<IoAnalyticsSharp className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]"></IoAnalyticsSharp >}
           item2={"Strategy Targeting"}
           item3={"AdEcho Technologies utilizes progressed, focusing on methodologies to recognize and reach your perfect clients. We analyze market trends, customer behavior, and industry insights to optimize your lead generation efforts."}
           customClassName1={{backgroundColor:'#02021E'}}
           ></HomeServiceCompo>

          <HomeServiceCompo
           item1={<IoAnalyticsSharp className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]"></IoAnalyticsSharp >}
           item2={"Multi-Channel Approach"}
           item3={"Our lead generation service utilizes a multichannel approach, including social media, email marketing, content marketing, and more. This guarantees most extreme receivability over assorted stages, capturing leads where they are most dynamic."}
           customClassName1={{backgroundColor:'#02021E'}}
           ></HomeServiceCompo>

          <HomeServiceCompo
           item1={<IoAnalyticsSharp className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]"></IoAnalyticsSharp >}
           item2={"Transparent Reporting"}
           item3={"Adecho Technologies believes in transparency. We offer point by point reports on the execution of your lead era campaigns, permitting you to track advance and make educated choices."}
           customClassName1={{backgroundColor:'#02021E'}}
           ></HomeServiceCompo>
        </div>
        <div className=" flex justify-evenly">
           <HomeServiceCompo
           item1={<IoAnalyticsSharp className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]"></IoAnalyticsSharp >}
           item2={"Analytics and Monitoring"}
           item3={"Frequently screen social media measurement to gage the execution of different compaigns & analyze the Information to get it what content resonates best"}
           customClassName1={{backgroundColor:'#02021E'}}
           ></HomeServiceCompo>

          <HomeServiceCompo
           item1={<IoAnalyticsSharp className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]"></IoAnalyticsSharp >}
           item2={"Customized Campaigns"}
           item3={"Every business is unique. Adecho Technologies tailors lead era campaigns to adjust along with your particular objectives, Industry nuances, and torget demographics."}
           customClassName1={{backgroundColor:'#02021E'}}
           ></HomeServiceCompo>

          <HomeServiceCompo
           item1={<IoAnalyticsSharp className=" text-[#13bbac] lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem]"></IoAnalyticsSharp >}
           item2={"Lead Nurturing"}
           item3={"Our service goes beyond generating leads, we center on supporting them through the sales funnel. With personalized content and engagement methodologies, we offer assistance to change over leads into faithful clients"}
           customClassName1={{backgroundColor:'#02021E'}}
           ></HomeServiceCompo>
        </div>
        </div>}

        item2Mob={<>
          <div className="md:hidden">
           <div className="flex flex-col justify-center items-center space-y-5">
             <HomeServiceCompoMob
             item1={<IoAnalyticsSharp className="text-3xl text-[#13bbac]"></IoAnalyticsSharp>}
             item2={"Strategy Targeting"}
             customStyle={{backgroundColor:'#02021E'}}
             ></HomeServiceCompoMob>

             <HomeServiceCompoMob
             item1={<IoAnalyticsSharp className="text-3xl text-[#13bbac]"></IoAnalyticsSharp>}
             item2={"Strategy Targeting"}
             customStyle={{backgroundColor:'#02021E'}}
             ></HomeServiceCompoMob>

             <HomeServiceCompoMob
             item1={<IoAnalyticsSharp className="text-3xl text-[#13bbac]"></IoAnalyticsSharp>}
             item2={"Strategy Targeting"}
             customStyle={{backgroundColor:'#02021E'}}
             ></HomeServiceCompoMob>

             <HomeServiceCompoMob
             item1={<IoAnalyticsSharp className="text-3xl text-[#13bbac]"></IoAnalyticsSharp>}
             item2={"Strategy Targeting"}
             customStyle={{backgroundColor:'#02021E'}}
             ></HomeServiceCompoMob>

             <HomeServiceCompoMob
             item1={<IoAnalyticsSharp className="text-3xl text-[#13bbac]"></IoAnalyticsSharp>}
             item2={"Strategy Targeting"}
             customStyle={{backgroundColor:'#02021E'}}
             ></HomeServiceCompoMob>

             <HomeServiceCompoMob
             item1={<IoAnalyticsSharp className="text-3xl text-[#13bbac]"></IoAnalyticsSharp>}
             item2={"Strategy Targeting"}
             customStyle={{backgroundColor:'#02021E'}}
             ></HomeServiceCompoMob>
           </div>
          </div>
        </>}
        >
        </ServiceSecondDivCompo>
       </div>

       <div>
         <ServiceThirdCompo
         Img={Lead}
         item1={<>The Role of Adecho in Succes</>}
         Img2={Lead3}
         item2={<>Revolutionary The Future Of Lead Generation</>}
         item3={<>Adecho Technologies doesn't follow trends; they set them. Remain ahead of the curve with strategies that evolve alongside the ever-changing scene of social media.</>}
         item4={<>Lead Generation For Enterprise Businesses</>}
         item5={<>Personalized Strategies for Maximum Impact:-</>}
         item6={<>Customize Solutions For Your Business Needs:</>}
         item7={<>AdEcho Technologies gets it that one estimate doesn't fit all. Their personalized lead generation strategies guarantee that your trade stands out in a crowd, making significant associations together with your target group of audience. Perfect Blending of technology</>}
         item8={<>Customize Solutions For Your Business Needs:</>}
         item9={<>Unleashed Grasping the control of innovation, Adecho consistently coordinating cutting-edge apparatuses to optimize lead era. From Al-driven analytics to intuitive platforms, Adecho consistently coordinating cutting-edge apparatuses to optimize lead era. From Al-driven analytics to natural stages, they take off no stone unturned in conveying come about.</>}
         ></ServiceThirdCompo>
       </div>
      </div>
    </>
  );
}
export default LeadGenration;
