import Logo from '/Images/Home/logo.png'

function HomeLogo({StyleLogo,StyleFont1,StyleFont2}){
    return(
        <>
                  <div className="flex text-white">
            <img
              src={Logo}
              className=" lg:w-[8rem] lg:h-[8rem] w-[5rem] h-[5rem]  lg:mt-[-1.5rem] md:mt-[0.1rem] mt-[-0.8rem]"
              style={StyleLogo}
            ></img>
            <div>
              <div className=" font-bold lg:text-[1.8rem] md:text-[1.5rem] lg:tracking-widest md:tracking-wider"
              style={StyleFont1}
              >
                ADECHO
              </div>
              <div className="lg:text-[1.5rem] md:text-[1.1rem] "
              style={StyleFont2}
              >
                TECHNOLOGIES
              </div>
            </div>
          </div>
        </>
    )
}
export default HomeLogo;