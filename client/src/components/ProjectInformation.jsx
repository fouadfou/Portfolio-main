import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import bg from "/assets/images/background2.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProjectInformation = ({ setShowMoreInfo, project }) => {
  const [activeItem, setActiveItem] = useState(0);

  const removeMoreInfo = () => {
    setShowMoreInfo(false);
    document.body.style.overflowY = "auto";
  };

  /* useEffect( () => {

        const sr3 =  ScrollReveal({
          origin: 'center',
          distance: '0',
          duration:500,
          reset:false,
        });
       
        sr3.reveal('.MoreInfo', {
            });
          
        },[ ]) */

  return (
    <div
      className={`MoreInfo flex flex-col    z-50 fixed top-0 bg-white  h-screen w-screen overflow-y-auto`}
    >
      <div style={{backgroundImage:`url(${bg})`}} className="background-image w-full relative px-[10%]  pb-9 pt-5  h-fit bg-[#F7F7F8]">
        <Swiper
          style={{
            "--swiper-pagination-color": "#FFBF00",
            "--swiper-pagination-bullet-inactive-opacity": 0.5,
            "--swiper-pagination-bullet-inactive-color": "#e7e7e7e0",
          }}
          className="w-full py-[75px] px-3 md:px-0  h-fit "
          effect="coverflow"
          grabCursor={true}
          centeredSlides
          speed={500}
          loop
          // install Swiper modules
          modules={[Navigation, Pagination, EffectCoverflow]}
          spaceBetween={70}
          slidesPerView={1}
          pagination={{ pagEl: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 100,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.7,
            },
          }}
        >
          {Object.values(project.images).map((img, index) => (
            <SwiperSlide
              key={index}
              className={` p-1 swiper-slide transition-all ease-linear duration-500 bg-opacity-20  bg-gray-100 h-[350px] w-[250px] rounded-xl shadow-md`}
            >
              <img className="h-full w-full rounded-lg" src={img} alt="" />
            </SwiperSlide>
          ))}

          {/* <SwiperSlide className={`swiper-slide  transition-all ease-linear duration-500  bg-red-300 h-[300px] w-[250px] rounded-xl ${activeItem === 4 ? "opacity-100":"opacity-50"}`}>Slide 5</SwiperSlide> */}
        </Swiper>

        <div
          /* onClick={() => activeItem > 0 ? setActiveItem(prev => prev - 1 ): setActiveItem(4)} */ className="z-10  swiper-button-prev h-full top-0 left-[3.5%]   text-text-color opacity-70  duration-300 hover:opacity-100 hover:text-white "
        ></div>
        <div
          /* onClick={() => activeItem < 4 ? setActiveItem(prev => prev + 1) : setActiveItem(0)} */ className="z-10  swiper-button-next h-full top-0 right-[3.5%]  text-text-color opacity-70 duration-300 hover:opacity-100 hover:text-white"
        ></div>
        <div className="swiper-pagination absolute bottom-0 text-black"></div>
      </div>

      <i
        onClick={removeMoreInfo}
        className="fas fa-times z-20 cursor-pointer bg-[#FFBF00] duration-200 bg-opacity-70 hover:bg-opacity-100  rounded-full p-1 px-[7px] absolute top-[1rem] right-[1.2rem] text-[16px] text-center shadow-md "
      ></i>

      <div className=" p-10">
        <div className="p-12 flex flex-col  gap-2 bg-[#F7F7F8]  rounded-lg border-[2px] border-opacity-70 border-[#FFBF00]">

          <div className="flex items-center gap-3 ">
            <span className="bg-[#FFBF00] h-4 w-4 rounded-full"></span>
            <h1 className="text-2xl  font-bold">
                Project Details :
              </h1>
          </div>

          <p className="ml-7 mt-2">
            <strong>Project Description : </strong>
            {project.description}
          </p>
          
         {/* 

          
          <h2>
            <strong>Project Title : </strong>
            {project.title}
          </h2>
          <h2>
            <strong>Project Type : </strong>
            {project.type}
          </h2>
         
         {project.type !== "Design" && (
            <div className="flex gap-1">
              <h2>
                <strong>Github Link : </strong>
              </h2>
              <a href={project.githubLink}>{project.githubLink}</a>
            </div>
          )} 

          {project.type == "Design" && (
            <h2>
              <strong>Tools : </strong>
              {project.tools}
            </h2>
          )}*/}

          {project.type !== "Design" && (
            <div className="dev-technologies flex flex-col gap-1 ">
              

              <div className="flex items-center gap-3 mt-6 ">
            <span className="bg-[#FFBF00] h-4 w-4 rounded-full"></span>
            <h1 className="text-2xl  font-bold">
            Development Technologies :
              </h1>
          </div >
          <div className="pl-7 mt-2">
              {project.technologies.front && (
                <div>
                  <h2 className="font-semibold">Front-End :</h2>
                  <p>- {project.technologies.front}</p>
                </div>
              )}

              {project.technologies.back && (
                <div className="mt-2">
                  <h2 className="font-semibold ">Back-End :</h2>
                  <p>- {project.technologies.back}</p>
                </div>
              )}

              {project.technologies.dataBase && (
                <div className=" mt-2">
                  <h2 className="font-semibold">Data-Base :</h2>
                  <p>- {project.technologies.dataBase}</p>
                </div>
              )}
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectInformation;
