import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Project = ({
  img,
  title,
  height,
  showMoreInfo,
  setShowMoreInfo,
  ProjectIndex,
  description,
  link

}) => {
  const removeMoreInfo = () => {
    if (!showMoreInfo.show) {
      document.body.style.overflow = "hidden";
      setShowMoreInfo({
        show: true,
        clickedProjectIndex: ProjectIndex,
      });
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, type: "tween" }}
      className={` flex flex-col items-center text-white`}
    >
      <div className={`relative group ${height} cursor-pointer`}>
        <div className="overflow-hidden rounded-[18px] h-full w-full">
          <img
            src={img}
            alt=""
            className="h-full w-full duration-300 ease-linear group-hover:scale-[1.3] group-hover:rotate-12"
          />
        </div>

        <div className="px-[6%] py-[4%] rounded-[16.5px] overflow-hidden h-full w-full flex flex-col justify-between   ease-linear bg-black right-0 bg-opacity-80  absolute  top-0 duration-300 opacity-0  group-hover:opacity-100  ">
          <p className=" md:leading-8 w-full opacity-0 ease duration-500  group-hover:opacity-100 delay-200 transform translate-x-20 group-hover:translate-x-0">
            {description}
          </p>

          <div className=" opacity-0 -transform translate-y-4 transition-[transform,opacity] ease group-hover:translate-y-0 duration-500  group-hover:opacity-100 delay-200">
            <div className="relative flex gap-[6%]  ">
              <a href="">Github</a>
              <a className=" hover:text-[#FFBF00]" href={link}>
                Link
              </a>
              <button
                onClick={removeMoreInfo}
                className="absolute bottom-0 right-0  "
              >
                More Info »
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-base mt-3">{title}</h2>
    </motion.div>
  );
};

export default Project;
