import ServiceSecondDivCompo from "../ServicesReusableCompo/SeriveSecondDivCompo";
import ServiceContentMarketingCompo from "../ServicesReusableCompo/ServiceContentMarketingCompo";
import ServiceFirstDivCompo from "../ServicesReusableCompo/ServiceFirstDivCompo";
import ContentMarketing1 from "/Images/Service/ContentMarketing1.gif"

function ContentMarketing(){
    return(
        <>
    <div className="bg-[#02021E] min-h-full w-full   pl-10 pr-10  font-Poppins overflow-y-hidden">

           {/* 1st div */}
          <div className=" ">
           <ServiceFirstDivCompo
           item1={"Content Marketing"}
           Img={ContentMarketing1}
           item3={"35+"}
           item4={"Projects"}
           item5={"25+"}
           item6={"Client"}
           ></ServiceFirstDivCompo>
           </div>
        {/* 1st div end */}

         <div className="text-[#31BBAC] lg:text-5xl md:text-4xl text-2xl text-center mt-14 font-semibold ">Content Marketing</div>
         <div className=" text-white lg:text-2xl md:text-xl text-md text-center mt-9">As technology evolves, so does content marketing. AdEcho Technologies visualize a future where content is not just consumed but experienced. Virtual reality, enhanced reality, and immersive storytelling are on the skyline, and Adecho is at the cutting edge, prepared to rethink the content landscape</div>         
    
        {/* 2nd div */}
         <div className="flex justify-center items-center pt-[5rem]">

          <div className="flex flex-col lg:w-[100rem] md:w-[70rem]  ">
           <div className="grid md:w-full w-[21rem] md:h-[55rem] h-[90rem] card bg-white  rounded-box">
             <div className="md:text-5xl text-3xl font-bold left-0 pl-8 pt-8">Our Mastery</div>
             <div className=" flex flex-col mt-[-10rem]">
                   <div className=" md:flex md:flex-row md:justify-evenly flex flex-col justify-center items-center">
                 
                   <ServiceContentMarketingCompo
                   item1={"Revelaing the SEO Magic"}
                   item2={"Search Engine Optimization (SEO) is the mystery sauce that produces content discoverable. Adecho Technologies gets it to this and optimizes their content for search engines without sacrificing the quality of the message. It's not around keywords it's about delivering value while being search-friendly."}
                   ></ServiceContentMarketingCompo>
                   
                   <ServiceContentMarketingCompo
                   item1={"Enlighten Technology"}
                   item2={"One of Adecho's qualities is the capacity to humanize Innovation. They break down complex concepts into digestible content, making it available to everybody, in a world filled with tech Jargon, Adecho stands out by simplifying the narrative, making it relatable"}
                   ></ServiceContentMarketingCompo>
                   </div>
                   <div className="  md:flex md:flex-row md:justify-evenly flex flex-col justify-center items-center">
                   <ServiceContentMarketingCompo
                   item1={"Metrics That Matter"}
                   item2={"Adecho Technologies doesn't just create content blindly they measure its impact. By centering on key measurements like engagement, change rates, and social shares, they continuously refine their strategy. It's not almost about making content it's about creating content that drives results."}
                   ></ServiceContentMarketingCompo>
                   <ServiceContentMarketingCompo
                   item1={"Integration Across Platform"}
                   item2={"Adecho Technologies consistently coordinating content across platforms, making a cohesive digital narrative. The move from site blogs to social media posts is fluid, keeping up brand consistency whereas catering to the unique nuances of each platform. "}
                   ></ServiceContentMarketingCompo>
                   </div>
               </div>
             </div>
           </div>
          </div>
     {/* 2nd div ends */}
        
   </div>
        </>
    )
}
export default ContentMarketing;