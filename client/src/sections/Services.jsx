import React from "react";
import img from "/assets/images/77108000_133044601466386_5568512050876907520_n.jpg";
import webdev from "/assets/images/coding.svg";
import ui from "/assets/images/ui.svg";
import support from "/assets/images/support.svg"

const Services = ({ sectionRef , bg}) => {
  const headerStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 1) ,rgba(0, 0, 0, 0.850)) ,url('./src/assets/images/bg-2.jpg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <section
      ref={sectionRef}
      className="  overflow-hidden relative flex flex-col  h-auto py-[5rem]  items-center justify-center  gap-[5rem]  "
    >
      <div style={{backgroundImage:`url(${bg})`, backgroundPosition:"center" ,backgroundSize:"cover"}} className="absolute top-0 place-self-start h-[60%] w-full " />

      <h1 className="z-40 text-white text-center text-3xl  ">Services</h1>

      <span className="absolute  bg-[#FFBF00] h-[1px] left-[7.4%] w-[17%]  lg:w-[34%] top-[6.2rem] md:left-[6.2%]  md:w-[29%]"></span>
      <span className=" absolute bg-white h-[1px] right-[7.4%] w-[17%] lg:w-[34%] top-[6.2rem] md:right-[6.2%]  md:w-[29%] "></span>

      {/* <div className='z-10 absolute bottom-0 place-self-start h-[25rem] w-full ' style={headerStyles} /> */}
      <div className=" z-40 h-auto bg-background-gray w-[88%] rounded-lg shadow-2xl p-2  gap-2 ">
        <ul className=" bg-white w-full rounded-md   h-fit flex flex-col  lg:flex-row">
          <li className="flex-1  p-10  text-center  ">
            <div className="flex flex-col items-center gap-5 mb-5 ">
              <img src={webdev} alt="" className="h-11" />
              <h2 className="text-2xl font-black text-center ">
                Web Development
              </h2>
            </div>

            <div className="leading-9">
              - Full-Stack Development <br />
              - Front-end development (HTML, CSS, JavaScript , React) <br />
              - Back-End Development (Node.js,Express.js) <br />
              - Responsive web design <br />
              - Cross-browser compatibility <br />
              - Web performance tuning <br />
            </div>
          </li>

          <li className="flex-1  text-center border-y-[1.5px] border-x-0 lg:border-y-0  lg:border-x-[1.5px]  p-10 ">
            <div className="flex flex-col items-center gap-5 mb-5">
              <img  src={ui} alt="" className="h-11" />
              <h2 className="text-2xl font-black text-center ">
                UI/UX Design
              </h2>
            </div>

            <div className="leading-9 ">
              - User Interface (UI) Design <br />
              - User Experience (UX) Design <br />
              - Prototyping <br />
              - Information Architecture <br />
              - Tools : Figma <br />
            </div>
          </li>

          <li className="flex-1  text-center border-y-[1.5px] border-x-0 lg:border-y-0  lg:border-x-[1.5px]  p-10 ">
            <div className="flex flex-col items-center gap-5 mb-5">
              <img  src={support} alt="" className="h-11" />
              <h2 className="text-2xl font-black text-center ">
                  Website Support
              </h2>
            </div>

            <div className="leading-9 ">
              - Keeping Your Website Update <br />
              - Staying Secure <br />
              - Content Management <br />
              - Faster Loading <br />
              - Enhancing your site's search engine visibility through SEO best practices. <br />
            </div>
          </li>
        


        </ul>
      </div>
    </section>
  );
};

export default Services;
