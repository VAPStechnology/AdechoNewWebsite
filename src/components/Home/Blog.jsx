import Blog1 from "/Images/Home/Blog1.jpg";
import Blog2 from "/Images/Home/Blog2.jpg";
import Blog3 from "/Images/Home/Blog3.jpg";
import Blog4 from "/Images/Home/Blog4.jpg";
import HomeBlogCompoLeft from "../HomeReuseableCompo/HomeBlogCompoLeft";
import HomeBlogCompoRight from "../HomeReuseableCompo/HomeBlogCompoRight";

function Blog() {
  return (
    <>
      <div className=" min-h-screen  bg-[#02021E] md:pl-10 md:pr-10 pl-8 pr-8 pt-[6rem]">
        <div className="lg:text-[1.8rem] md:text-[1.5rem] text-xl  font-semibold text-[#31BBAC] text-center">
          Our Blog
        </div>
        <div className="lg:text-[2.5rem] md:text-[1.8rem] font-bold text-[1.5rem] text-center text-white">
          Discover the Difference with Us!
        </div>

        {/* Laptop view */} 
        <div className=" md:block hidden lg:ml-[3rem]">

          <div className=" flex justify-evenly ml-[5rem]">

           {/* 1st div */}
           <div>
           <div className="mr-4 ">
            <HomeBlogCompoLeft
              item2={<img src={Blog1} />}
              customClassName={{ backgroundColor: "#398dff" }}
            > </HomeBlogCompoLeft>
            </div>
            <div className=" lg:text-2xl md:text-xl text-white lg:mt-[-5rem] md:mt-[-10rem] left-0">Influencer Marketing:Answering the<br /> rising need in a digital era.</div>
           </div>

           {/* 2nd div */}
           <div>
           <div className=" mr-[6rem]">  
            <HomeBlogCompoRight
              item2={<img src={Blog2} />}
              customClassName={{ backgroundColor: "#8467ff" }}
            ></HomeBlogCompoRight>
            </div>
            <div className="lg:text-2xl md:text-xl text-white lg:mt-[-4rem] md:mt-[-10rem]">The Digital Marketing Metamorphosis:<br />Pioneering the Business Landscape of Tomorrow.</div>
           </div>

          </div>
          
          
          <div className="flex justify-evenly ml-[-5rem]">
         {/* 3rd div */}
         <div>
         <div className="md:ml-[10rem] mr-2">  
            <HomeBlogCompoLeft
              item2={<img src={Blog3} />}
              customClassName={{ backgroundColor: "#8579ff" }}
            ></HomeBlogCompoLeft>
            </div> 
            <div className="ml-[10rem] mr-2 lg:text-2xl md:text-xl text-white lg:mt-[-5rem] md:mt-[-10rem]">How Wireless Technology more<br /> Changing Business.</div>
         </div>

            {/*4th div  */}
           <div>
           <div className=" mr-[6rem]"> 
            <HomeBlogCompoRight
              item2={<img src={Blog4} />}
              customClassName={{ backgroundColor: "#8c71fe" }}
            ></HomeBlogCompoRight>
            </div>
            <div className="mr-[6rem] lg:text-2xl md:text-xl text-white lg:mt-[-5rem] md:mt-[-10rem]">3 Clear Warnings That say your Goals<br /> are too small.</div>
           </div>

          </div>
        </div>

        {/* Mobile view start */}
        <div className=" md:hidden">
        <div className=" flex  flex-col justify-center items-center text-center ">

          <div className="flex  flex-col justify-center items-center ml-[-10rem]">
          <div >
            <HomeBlogCompoRight
              item2={<img src={Blog1} />}
              customClassName={{ backgroundColor: "#398dff",}}
            ></HomeBlogCompoRight>
          </div>
          <div className=" text-white text-xl mt-[-13rem] ml-[10rem]">Influencer Marketing:Answering the rising need in a digital era.</div>
          </div>

          <div className="flex  flex-col justify-center items-center ml-[-10rem]">
          <div className="">
            <HomeBlogCompoRight
              item2={<img src={Blog2} />}
              customClassName={{ backgroundColor: "#8467ff",  }}
            ></HomeBlogCompoRight>
          </div>
          <div className=" text-white text-xl mt-[-13rem] ml-[10rem]">The Digital Marketing Metamorphosis:Pioneering the Business Landscape of Tomorrow.</div>
          </div>

          <div className="flex  flex-col justify-center items-center ml-[-10rem]">
          <div  className=" ">
            <HomeBlogCompoRight
              item2={<img src={Blog3} />}
              customClassName={{ backgroundColor: "#8579ff" }}
            ></HomeBlogCompoRight>
          </div>
          <div className=" text-white text-xl mt-[-13rem] ml-[10rem]">How Wireless Technology more Changing Business.</div>
          </div>

          <div className="flex  flex-col justify-center items-center ml-[-10rem]">
          <div  className=" ">
            <HomeBlogCompoRight
              item2={<img src={Blog4} />}
              customClassName={{ backgroundColor: "#8c71fe" }}
            ></HomeBlogCompoRight>
          </div>
          <div className=" text-white text-xl mt-[-13rem] ml-[10rem]">3 Clear Warnings That say your Goals are too small.</div>
          </div>
          
        </div>
      </div>
      </div>
    </>
  );
}
export default Blog;
