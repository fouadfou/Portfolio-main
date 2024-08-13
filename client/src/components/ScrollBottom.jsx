import React , {useContext} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { refContext } from "../App";

const ScrollArrow = () => {

  const {about} = useContext(refContext)
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight ,
      behavior: "smooth",
    });
  };

  

  return (
    <>
      <AnimatePresence>
        <motion.svg
          onClick={() => scrollToBottom()}
          className="scroll-bottom  cursor-pointer arrows w-[20px] h-[35px] absolute bottom-[7%] md:bottom-12 left-1/2  -translate-x-1/2 text-text-color"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <path className="a1 arrow" d="M0 0 L10 12 L20 0"></path>
          <path className="a2 arrow" d="M0 10 L10 22 L20 10"></path>
          <path className="a3 arrow" d="M0 20 L10 32 L20 20"></path>
        </motion.svg>
      </AnimatePresence>
    </>
  );
};

export default ScrollArrow;
