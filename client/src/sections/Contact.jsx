import  { useState } from "react";
import img from "/assets/images/shaking hands.png";
import bg from "/assets/images/contact-bg.svg"
import axios from "axios";


const Contact = ({ sectionRef }) => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ounadi.onrender.com/send_mail",
        formData
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      style={{backgroundImage:`url(${bg})`, backgroundPosition:"center" ,backgroundSize:"cover"}}
      className="h-fit md:h-[calc(100vh-3.5rem)] px-[5%]  md:px-[8rem] flex-wrap  flex md:flex-row flex-col  items-center justify-center"
      ref={sectionRef}
    >
      <div className=" flex-1 w-full  md:min-w-[410px]  flex flex-col  justify-center p-16 gap-2 ">
        <h1
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
          className="text-[40px] font-bold "
        >
          Let's chat, <br /> Tell me about your <br /> project.{" "}
        </h1>
        <div className="flex gap-2 items-center ">
          <p
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)" }}
            className="text-sm"
          >
            Let's create somthing together
          </p>
          <img src={img} alt="" className="h-[1.3rem] mt-[5px]" />
        </div>

        <div className="flex mt-5 mb-2 gap-3">
          <i
            className="fa fa-envelope border-[#aaaaaa] border-[1px] border-opacity-10 text-[#aaaaaa] p-3 text-[16px] rounded-xl bg-opacity-20 bg-[#FFBF00] shadow-inner"
            aria-hidden="true"
          ></i>

          <div className="flex flex-col justify-center mb-[5px] text-[13px] ">
            <h6
              style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" }}
              className="font-semibold h-[1rem]"
            >
              Mail me at
            </h6>
            <a
              style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" }}
              className="text-[#FFBF00] h-[1rem] "
              href="mailto:ounadifouad@gmail.com?subject = Feedback&body = Message"
            >
              ounadifouad@gmail.com
            </a>
          </div>
        </div>

        <ul className="flex  h-full ml-2 mt-3  gap-4 text-[#aaaaaa] text-[15px]">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100042825400985"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.telegram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/2fou_ou/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/fouad-ounadi-9b8484298/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="h-fit flex-1 w-full md:min-w-[410px] flex flex-col   justify-center  pb-16 lg:pb-0 px-12 gap-6   rounded-xl ">
        <h2 className="text-[22px] font-bold">Send me a message 🚀</h2>

        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full py-2 px-3 text-sm h-[2.2rem] duration-300 focus:border-opacity-70  focus:border-[1.5px] border-[1.5px] border-transparent focus:border-[#FFBF00] bg-[#f4f4f4] rounded-lg outline-none "
            type="text"
            placeholder="Full name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full py-2 px-3 text-sm h-[2.2rem] duration-300 focus:border-opacity-70 focus:border-[1.5px] border-[1.5px] border-transparent focus:border-[#FFBF00] bg-[#f4f4f4] rounded-lg outline-none "
            type="email"
            placeholder="Email adress"
            required
          />
          <input
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full py-2 px-3 text-sm h-[2.2rem] duration-300 focus:border-opacity-70 focus:border-[1.5px] border-[1.5px] border-transparent focus:border-[#FFBF00] bg-[#f4f4f4] rounded-lg outline-none "
            type="text"
            placeholder="Subject"
            required
          />

          <label className="text-sm font-semibold mt-2" htmlFor="userMessage">
            Share your thoughts with me
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full mb-4 leading-6 px-3 py-1 text-sm h-[7rem] duration-300 focus:border-opacity-70 focus:border-[1.5px] border-[1.5px] border-transparent  focus:border-[#FFBF00] bg-[#f4f4f4] rounded-lg outline-none resize-none"
            id="userMessage"
            rows="4"
            cols="50"
          ></textarea>
          <input
            className="bg-[#FFBF00] rounded-lg p-2 font-semibold text-sm  hover:scale-[1.015] ease-linear cursor-pointer duration-200 "
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
