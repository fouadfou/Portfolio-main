import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skill = ({ title, value }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let intervalId;

    if (inView) {
      controls.start({ width: `${value}%` });
      intervalId = setInterval(() => {
        setCurrentValue((prevValue) => {
          if (prevValue < value) {
            return prevValue + 1;
          } else {
            clearInterval(intervalId);
            return prevValue; // Return the current value when the animation is done
          }
        });
      }, 17);
    }

    return () => {
      // Cleanup function to clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [inView, controls, value]);

  return (
    <div className=" md:mb-4">
      <div className=" flex justify-between items-center mb-2 ">
        <h3 className=" font-bold">{title}</h3>
        <span className="font-semibold text-sm">{currentValue} %</span>
      </div>
      <div className="h-3 bg-[#E8E8E8] rounded-full">
        <motion.div
          ref={ref}
          className="sub-skill h-full rounded-md bg-[#FFBF00] bg-opacity-60"
          initial={{ width: 0 }}
          animate={controls}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Skill;
