import  { useEffect} from "react";
import img from "../../dist/assets/images/77108000_133044601466386_5568512050876907520_n.jpg";
import Skills from "../components/Skills";

import resume from '../cv.pdf'


const About = ({ sectionRef, bg }) => {


  useEffect(() => {
    const sr = ScrollReveal({
      origin: "right",
      distance: "120px",
      duration: 1000,
      reset: true,
    });
    sr.reveal(".right-to-left", {
      // Start with an opacity of 0 (fully transparent)
    });
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(".skill", {
      opacity: 0.5,
    });
  }, []);


  return (
    <section>
      <div
        ref={sectionRef}
        className="about-me overflow-hidden  relative flex flex-col  h-auto py-[5rem]  mt-[calc(100svh-3.47rem)] items-center justify-center  gap-[5rem]  "
      >
        <div style={{backgroundImage:`url(${bg})`, backgroundPosition:"center" ,backgroundSize:"cover"}} className="absolute top-0 place-self-start h-[60%] w-full rotate-180" />

        <h1 className=" z-40 text-white text-center text-3xl  ">
          About Me
        </h1>

        <span className=" absolute  bg-[#FFBF00] h-[1px] left-[7%] w-[17%]  lg:w-[34%] top-[6.2rem] md:left-[6.2%]  md:w-[29%]"></span>
        <span className=" absolute bg-white h-[1px] right-[7%] w-[17%] lg:w-[34%] top-[6.2rem] md:right-[6.2%]  md:w-[29%] "></span>

        {/* <div className='z-10 absolute bottom-0 place-self-start h-[25rem] w-full ' style={headerStyles} /> */}
        <div className=" z-40 h-auto bg-background-gray w-[88%] rounded-lg shadow-2xl p-2 flex gap-2 flex-col md:flex-row">
          <div className="hidden lg:block bg-white p-2 md:min-h-full    md:w-1/5 w-full  rounded-md">
            <img
              loading="lazy"
              role="presentation"
              sizes="(max-width:800px) 100vw 50vw"
              decoding="async"
              src={img}
              alt=""
              className=" h-full  w-full  rounded-md object-center object-cover  "
            />
          </div>

          <div className=" overflow-hidden bg-white flex flex-col justify-between flex-1  rounded-md p-8">
            <h2 className="text-3xl mb-3">
              <b>Hi I am</b> <b className="text-[#FFBF00] ">Fouad Ounadi</b>{" "}
              <b>, Web Developer</b> <br />
            </h2>
            <p className="text-lg mb-6">
              Hello, I'm Fouad Ounadi, a web developer dedicated to crafting
              outstanding web experiences. With a strong focus on sleek design
              and peak performance, I create websites that seamlessly blend
              aesthetics and functionality. Let's collaborate to bring your web
              project to life, with a commitment to top-tier performance at
              every step.
            </p>
            <h3 className="text-xl mb-1">
              <b>Contact Me</b>
            </h3>

            <div className="flex md:flex-row flex-col relative gap-7  md:justify-between ">
              <ul className="flex  h-full items-end  md:self-end gap-4 text-[#aaaaaa] text-[14.5px]">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100042825400985"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook text-lg"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.telegram.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-telegram text-lg"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/2fou_ou/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                </li>
              </ul>

              
              <a className="bg-[#FFBF00]  font-bold w-fit  py-2 px-4 text-sm rounded-md " href={resume} target="_blank" rel="noreferrer">Check my CV</a>
              
            </div>
          </div>
        </div>
      </div>

      <Skills />
    </section>
  );
};

export default About;
