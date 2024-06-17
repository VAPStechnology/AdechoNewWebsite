import HomeBlogCompoLeft from "../HomeReuseableCompo/HomeBlogCompoLeft";
import HomeBlogCompoRight from "../HomeReuseableCompo/HomeBlogCompoRight";
import Blog1 from "/Images/Home/Blog1.jpg";
import Blog2 from "/Images/Home/Blog2.jpg";
import Blog3 from "/Images/Home/Blog3.jpg";
import Blog4 from "/Images/Home/Blog4.jpg";
import Blog5 from "/Images/Blog/Blog5.jpg"
import Blog9 from "/Images/Blog/Blog9.jpg"
import Blog8 from "/Images/Blog/Blog8.jpg"
import { Link } from "react-router-dom";
import BlogFirstReusableCompo from "../BlogReuseableCompo/BlogFirstReusableCompo";
import BlogButtonCompo from "../BlogReuseableCompo/BlogButtonCompo";

function BlogTwo(){
    return(
        <>
          <div className=" min-h-screen  bg-[#02021E] md:pl-10 md:pr-10 pl-8 pr-8 pt-[6rem]">
            <BlogFirstReusableCompo />
        {/* Laptop view */} 
        <div className=" md:block hidden lg:ml-[3rem]">

          <div className=" flex justify-evenly ml-[5rem]">

           {/* 1st div */}
           <div>
           <div className="mr-4 ">
            <HomeBlogCompoLeft
              item2={<img src={Blog8} />}
              customClassName={{ backgroundColor: "#CE7EFB" }}
            > </HomeBlogCompoLeft>
            </div>
            <div className=" lg:text-2xl md:text-xl text-white lg:mt-[-5rem] md:mt-[-10rem] left-0 ml-[-3rem]">What Audience Want's From Your<br /> Speaking Engagement. </div>
           </div>

           {/* 2nd div */}
           <div>
           <div className=" mr-[6rem]">  
            <HomeBlogCompoRight
              item2={<img src={Blog2} />}
              customClassName={{ backgroundColor: "#8467ff" }}
            ></HomeBlogCompoRight>
            </div>
            <div className="lg:text-2xl md:text-xl text-white lg:mt-[-4rem] md:mt-[-10rem]">3 Clear Warning That say Your Gole<br /> Are To Small.</div>
           </div>
            
          </div>

          <div className="flex  md:ml-[-5rem] lg:ml-[11rem]">
         {/* 3rd div */}
         <div>
         <div className="md:ml-[10rem] mr-2">  
            <HomeBlogCompoLeft
              item2={<img src={Blog9} />}
              customClassName={{ backgroundColor: "#90BFED" }}
            ></HomeBlogCompoLeft>
            </div> 
            <div className="ml-[10rem] mr-2 lg:text-2xl md:text-xl text-white lg:mt-[-5rem] md:mt-[-10rem] ">The Dynamic Universe Of SEO:<br />Navigating Essentail Imperatives.</div>
         </div>


          </div>

          </div>

          {/* mobile view starts */}
          <div className=" md:hidden">
        <div className=" flex  flex-col justify-center items-center text-center ">

          <div className="flex  flex-col justify-center items-center ml-[-10rem]">
          <div >
            <HomeBlogCompoRight
              item2={<img src={Blog8} />}
              customClassName={{ backgroundColor: "#CE7EFB" }}
            ></HomeBlogCompoRight>
          </div>
          <div className=" text-white text-xl mt-[-13rem] ml-[10rem]">Influencer Marketing:Answering the rising need in a digital era.</div>
          </div>

          <div className="flex  flex-col justify-center items-center ml-[-10rem]">
          <div className="">
            <HomeBlogCompoRight
              item2={<img src={Blog2} />}
              customClassName={{ backgroundColor: "#8467ff" }}
            ></HomeBlogCompoRight>
          </div>
          <div className=" text-white text-xl mt-[-13rem] ml-[10rem]">The Digital Marketing Metamorphosis:Pioneering the Business Landscape of Tomorrow.</div>
          </div>

          <div className="flex  flex-col justify-center items-center ml-[-10rem]">
          <div  className=" ">
            <HomeBlogCompoRight
              item2={<img src={Blog9} />}
              customClassName={{ backgroundColor: "#90BFED" }}
            ></HomeBlogCompoRight>
          </div>
          <div className=" text-white text-xl mt-[-13rem] ml-[10rem]">How Wireless Technology more Changing Business.</div>
          </div>
          </div>
          </div>

          <BlogButtonCompo></BlogButtonCompo>
          </div>
        </>
    )
}
export default BlogTwo;