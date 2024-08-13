import  { useContext, useEffect } from "react";
import Button from "./Button";
import ScrollReveal from "scrollreveal";
import ScrollBottom from "./ScrollBottom";
import { refContext } from "../App";
import bg from "../../dist/assets/images/background.png"


const HeaderContainer = () => {

  const {works,contact} = useContext(refContext)



  const scrollToSection = (section) => {
    window.scrollTo({
      top: section.current.offsetTop - 55,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "left",
      distance: "30px",
      duration: 2000,
      reset: false,
    });

    sr.reveal(".sub-container", {
      // Add specific animation options for this class if needed
    });
  }, []);

  return (
    <div className="container absolute  flex items-center justify-center md:justify-normal min-w-full   top-0" style={{backgroundImage:`url(${bg})`, backgroundPosition:"center" ,backgroundSize:"cover"}}>
      
        <div className="sub-container  z-40 w-[80%] md:w-[45%] min-w-[250px]  flex flex-col items-center md:items-baseline 
            mx-[7%] mt-[1.5rem] mb-[3.5rem] md:mb-[1.2rem] ">
          <h1 className="relative  font-Ginerin text-[4rem] lg:text-[5.8rem] text-white select-none">
            Fouad
            <sub
              className="absolute  top-[4.6rem] left-[3.8rem]  lg:top-[6.5rem] lg:left-[5.65rem] font-Wind font-bold
                        text-[#FFBF00] text-[5rem]  lg:text-[7.1rem]">
              Ounadi
            </sub>
          </h1>
          <p className="text-[#e7e7e789] md:my-10 my-[15%] flex-wrap text-center md:text-left select-none">
          Specializing in web development, I'm committed to creating high-performance websites 
          that prioritize a seamless UI/UX design. My expertise lies in merging technical excellence with captivating 
          user experiences to deliver top-tier websites.
          </p>

          <div className=" select-none flex  gap-5  items-center  rounded-xl cursor-pointer">
            <Button
              onClick={() => scrollToSection(works)}
              style={{
                color: "white",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
                background: "transparent",
              }}
              value={"My Works"}
            />

            <Button onClick={() => scrollToSection(contact)} bold={"font-bold"} background={"bg-white"}  value={"Contact Me"} />
          </div>
        </div>
      

      <ScrollBottom />
    </div>
  );
};

export default HeaderContainer;
