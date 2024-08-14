import React, { useEffect } from "react";
import img from "/assets/images/bg.jpg";
import ScrollReveal from "scrollreveal";

const Shape = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "right",
      distance: "55px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(".shape", {
      opacity: 1,
    });
  }, []);

  return (
    <div className="shape  z-30 absolute top-0 right-[15%]">
      <div className="circles duration-300 hidden md:block h-screen w-[15rem]"></div>

      <div className="hidden duration-300 md:flex absolute top-0 backdrop-blur-[15px]  h-[calc(100vh+27rem)] w-[15rem] bg-opacity-10 bg-white shadow-md flex-col items-center justify-center gap-4 text-gray-200">
        <img
          className="w-[10rem] duration-300 h-[10rem] mb-[27rem] rounded-full border-solid border-[3.5px] border-[#e7e7e789]"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Shape;
