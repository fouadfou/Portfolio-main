import  { useEffect } from "react";
import { useState } from "react";


const NavBar = ({ refs }) => {
  const [Open, setOpen] = useState(false);
  const [Scroll, setScroll] = useState(false);

  const [home, about, services, works, contact] = refs;

  const NavBarStyles = {
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  const scrollToSection = (elemntRef) => {
    window.scrollTo({
      top: elemntRef.current.offsetTop - 55,
      behavior: "smooth",
    });
    setOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 1500,
      reset: false,
    });
    sr.reveal(".navbar", {});
  }, []);

  return (
    <nav
      className={`navbar z-50 flex  items-center sticky top-0 h-[3.5rem] text-text-color    ${
        Scroll &&
        !Open &&
        "transition-all ease-linear duration-300 bg-opacity-80  md:bg-opacity-50 bg-black backdrop-blur-[20px]"
      }`}
    >
      <div className="hidden md:flex font-Wind  w-[5rem] h-full bg-opacity-80 md:bg-opacity-50 bg-black items-center justify-center ">
        <span className="text-lg font-normal">F</span>
      </div>

      <div
        className={` md:z-0  z-20  ${
          !Open
            ? "h-[3rem]  bg-opacity-10  "
            : "  rounded-br-3xl rounded-bl-3xl h-[80vh] bg-opacity-70 bg-black backdrop-blur-[100px] "
        } 
            transition-[colors,height] ease-out duration-400 md:transition-none w-full    absolute top-0  flex  justify-between md:justify-normal md:place-items-center 
              md:h-full px-4 z-10 md:z-0 py-[8px] md:py-3 md:px-2  md:rounded-none md:static md:backdrop-blur-none   `}
        style={NavBarStyles}
      >
        <div className="hidden  md:flex h-5 min-w-[0.125rem] mr-9  bg-white rounded-full shadow-3xl"></div>

        {/* <div className="group flex place-items-center justify-center gap-2 h-fit md:mt-0 mt-[9.5px]  hover:border-b-[0.05rem] border-text-color md:ml-10 md:mr-6 border-solid border-0 
                  cursor-pointer ">
                    <i className="fas fa-search text-[15px] md:text-sm"></i>
                    <input className="w-0  md:group-hover:w-40 group-hover:w-80 border-none outline-none
                      text-[14px] bg-transparent focus:w-40 " style={{transition: '0.5s'}} type="text" />
                </div> */}

        <ul
          className={`nav-list transform md:transform-none -translate-x-1/2 -translate-y-1/2 absolute left-1/2 md:top-0 md:left-0 
                md:h-fit md:relative flex-col md:flex-row flex items-center gap-9 md:gap-7 list-none opacity-0 ease-linear
                md:opacity-100 ${
                  Open
                    ? "opacity-100 top-1/2 transition-opacity   delay-200   duration-300"
                    : "-top-40"
                }`}
        >
          <li
            onClick={() => scrollToTop()}
            className="custom-link"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection(about)}
            className="custom-link"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection(services)}
            className="custom-link"
          >
            Services
          </li>
          <li
            onClick={() => scrollToSection(works)}
            className="custom-link"
          >
            Works
          </li>
          <li
            onClick={() => scrollToSection(contact)}
            className="custom-link"
          >
            Contact
          </li>
        </ul>
        <div className="select-none absolute right-[3.5%]  md:hidden cursor-pointer flex  text-[30px] mt-1">
          <ion-icon 
            onClick={(event) => {
              setOpen(!Open);
              Open === false
                ? event.target.setAttribute("name", "close-outline")
                : event.target.setAttribute("name", "menu-outline");
            }}
            name={Open === false ? "menu-outline" : "close-outline"}
          ></ion-icon>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
