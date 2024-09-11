import React, { useEffect, useState } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Project from "../components/Project";
import FilterProjects from "../components/FilterProjects";
import Button from "../components/Button";
import ProjectInformation from "../components/ProjectInformation";
import projects from "../Projects.json";

const Works = ({ sectionRef , bg }) => {

  const [activeItem, setActive] = useState("All");
  const [filtred, setFiltred] = useState(Object.values(projects));
  const [projectsToShow, setProjectsToShow] = useState(6);
  const [showMoreInfo, setShowMoreInfo] = useState({
    show: false,
    clickedProjectIndex: null,
  });

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "0px",
      duration: 500,
      reset: true,
    });
    sr.reveal(".li", {
      interval: 100,
    });
  }, []);

  const handleShowClick = () => {
    projectsToShow < filtred.length
      ? setProjectsToShow(projectsToShow + 3)
      : setProjectsToShow(projectsToShow - 3);
  };

  const toggleMoreInfo = (index) => {
    setShowMoreInfo({
      ...showMoreInfo,
      showMoreInfo: true,
      clickedButtonIndex: index,
    });
  };

  return (
    <section
      className="relative overflow-x-hidden w-full bg-[#F7F7F8] py-[3.5rem] flex flex-col items-center"
      ref={sectionRef}
    >

      <h1 className=" text-3xl font-bold">My Projects</h1>
      <h4 className=" mt-2 mb-[3rem] ">Browse my works</h4>

      <div className=" w-full  flex flex-col  justify-center">
        <FilterProjects
          setProjectsToShow={setProjectsToShow}
          setActive={setActive}
          activeItem={activeItem}
          setFiltred={setFiltred}
          projects={Object.values(projects)}
        />
        {showMoreInfo.show && (
          <ProjectInformation
            setShowMoreInfo={setShowMoreInfo}
            project={projects[showMoreInfo.clickedProjectIndex + 1]}
          />
        )}

        <div style={{backgroundImage:`url(${bg})`, backgroundPosition:"center" ,backgroundSize:"cover"}} className="  w-full pt-[5rem] p-[5rem]  mt-8 flex flex-col items-center gap-14">
          {filtred.length > 0 ? (
            <motion.ul className="relative h-fit   w-full  text-text-color grid  justify-center grid-cols-projects  gap-x-16 gap-y-10 md:gap-y-8 ">
              {filtred.slice(0, projectsToShow).map((proj, index) => (
                <li className={`project `} key={index}>
                  <Project
                    setShowMoreInfo={setShowMoreInfo}
                    showMoreInfo={showMoreInfo}
                    toggleMoreInfo={() => toggleMoreInfo(index)}
                    height={
                      filtred.length === 1
                        ? "md:h-[22rem]"
                        : filtred.length === 2
                        ? "md:h-[17rem] "
                        : "md:h-[14rem]"
                    }
                    ProjectIndex={index}
                    key={index}
                    img={proj.images.main}
                    title={proj.title}
                    description2={proj.description2}
                    link={proj.link}
                  />
                  
                </li>
              ))}
            </motion.ul>
          ) : (
            <h1 className=" text-white text-center text-3xl">No {activeItem!=="All" && activeItem} {activeItem !=="Additional Expertise" && "Projects"} </h1>
          )}

          {projectsToShow < filtred.length ? (
            <Button
              value={"Show More"}
              background={"bg-white"}
              onClick={handleShowClick}
            />
          ) : (
            projectsToShow > 6 && (
              <Button
                value={"Show Less"}
                background={"bg-white"}
                onClick={handleShowClick}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
