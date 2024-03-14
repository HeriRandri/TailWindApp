import React from "react";
import logo from "../assets/hery-removebg.png";
import image from "../assets/images.png";

function Header() {
  const style = { height: "300px", width: "300px" };
  return (
    <div className=" italic max-w-5xl mx-auto justify-center flex flex-col items-center">
      <div className="max-w-5xl mx-auto flex">
        <img
          src={image}
          alt="Sary"
          style={style}
          className=" my-8 rounded-full  bg-gradient-to-r from-gray-900 to-gray-900 w-"
        />
      </div>

      <h1 className="text-gray-100 text-6xl sm:text-4xl blur-[1px] ">
        Hello, I'm Hery Randri{" "}
      </h1>
      <h3 className="text-gray-400 text-4xl "> 👨‍💻 Full Stack developer 👨‍💻</h3>
      <p className="text-gray-100 text-2xl text-center">
        Enthusiatic and motivated self-learining about information technology.
        Focused on web development and web application. Now I am looking for
        more experince in my field
      </p>
      <div className="svg flex justify-center items-center "></div>
    </div>
  );
}

export default Header;
