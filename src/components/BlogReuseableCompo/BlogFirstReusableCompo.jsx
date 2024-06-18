import { useState,useEffect } from "react";
import HomeBlogCompoLeft from "../HomeReuseableCompo/HomeBlogCompoLeft";
import HomeBlogCompoRight from "../HomeReuseableCompo/HomeBlogCompoRight";
import BlogMain from "/Images/Blog/BlogMain.jpeg"
import { FaRegHandPointDown } from "react-icons/fa";


function BlogFirstReusableCompo() {
    const [email, setEmail] = useState('');
    const [bounce, setBounce] = useState(false);

    console.log(email);

    useEffect(() => {
      const interval = setInterval(() => {
        setBounce(prev => !prev);
      }, 500); // Toggle bounce state every 500ms for a 1s cycle
  
      return () => clearInterval(interval);
    }, []);
  
    const iconStyle = {
      transform: bounce ? 'translateY(4px)' : 'translateY(0)',
      transition: 'transform 0.5s',
    };
  return (
    <>
      <div className=" flex justify-center">
        <div className=" flex justify-center folder-wrapper  lg:w-full lg:h-[30.2rem] md:w-[48rem] md:h-[30rem] w-full h-[40rem] mt-[5rem] font-Poppins max-w-[100rem] group">
          <div className=" folder-shape lg:w-full lg:h-[30rem] md:w-[48rem] md:h-[30rem] w-full h-[40rem] bg-[#02021E]   rounded-2xl md:pl-10 md:pr-10 pl-2 pr-2 md:flex md:flex-row md:justify-evenly flex flex-col  items-center">
              
              {/* first div */}
              <div>
                 <div className=" text-white lg:text-7xl md:text-5xl text-3xl lg:pt-20  pt-10">Useful Blog's</div>
                 <div className=" text-white lg:text-2xl md:mt-10 mt-5 flex"><FaRegHandPointDown style={iconStyle}  className=" mt-2 mr-2 lg:text-7xl md:text-5xl text-4xl text-[#cab87c] "/>stay Plugged in and keep up with all<br /> news and updates!</div>
                 <hr className=" lg:w-[30rem] w-[20rem] md:mt-10 mt-10 bg-[#31BBAC]"></hr>

              </div>

              <div className="bg-[#13bbac] w-[0.2rem] h-[23rem]"></div>



              {/* 2nd div */}
              <div className=" mr-[10rem] lg:mt-16 md:mt-32">  
            <HomeBlogCompoRight
              item2={<img src={BlogMain} />}
              customClassName={{ backgroundColor: "black" }}
            ></HomeBlogCompoRight>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogFirstReusableCompo;
