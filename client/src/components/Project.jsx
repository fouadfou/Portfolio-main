
import { motion } from "framer-motion";

const Project = ({
  img,
  title,
  height,
  showMoreInfo,
  setShowMoreInfo,
  ProjectIndex,
  description2,
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
      className="flex flex-col items-center text-white  "
    >
      <div className={`relative group ${height} cursor-pointer`}>
        <div className="overflow-hidden rounded-[18px] h-full w-full">
          <img
            src={img}
            alt=""
            className="h-full w-full duration-300 ease-linear group-hover:scale-[1.3] group-hover:rotate-12"
          />
        </div>

        <div className="sm:px-[6%] sm:py-[4%] px-[5%] py-[4%] rounded-[16.5px] overflow-hidden h-full w-full flex flex-col justify-between   ease-linear bg-black right-0 bg-opacity-80  absolute  top-0 duration-300 opacity-0  group-hover:opacity-100  ">
          <p className=" md:leading-8 w-full text-[10px]  sm:text-base opacity-0 ease duration-500  group-hover:opacity-100 delay-200 transform translate-x-20 group-hover:translate-x-0">
            {description2}
          </p>

          <div className=" opacity-0 -transform translate-y-4 transition-[transform,opacity] ease group-hover:translate-y-0 duration-500  group-hover:opacity-100 delay-200">
            <div className="relative flex gap-[6%] text-[9px] sm:text-base  ">
              <a href="" className=" hover:text-[#FFBF00]">Github</a>
              <a target="_blank" rel="noopener noreferrer" className=" hover:text-[#FFBF00]" href={link}>
                Link
              </a>
              <button
                onClick={removeMoreInfo}
                className="absolute bottom-0 right-0 hover:text-[#FFBF00] "
              >
                More Info »
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-[12px] sm:text-base mt-3 sm:mt-4">{title}</h2>
    </motion.div>
  );
};

export default Project;
