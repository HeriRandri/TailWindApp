import React, { useState } from "react";
import dev from "../assets/imgSvg/dev.svg";
import github from "../assets/imgSvg/github.svg";
import like from "../assets/imgSvg/linkedin.svg";
import Hamburger from "hamburger-react";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleToggle = () => {
    setClick(!click);
  };

  return (
    <div>
      <header className="top-0 w-full">
        <nav
          id="main-nav"
          className={`text-gray-100 bg-slate-800 max-w-5xl mx-auto font-sans p-6 flex items-center justify-between shadow-lg shadow-slate-900/60 border-b-2 rounded-lg ${click ? "flex-col" : "flex-row"}`}
        >
          <div className="flex items-center">
            <a href="#" className="text-lg lg:text-2xl logo font-bold">
              Hery
            </a>
            <img
              src={dev}
              style={{ width: "30px", height: "30px" }}
              alt="dev"
            />
          </div>
          <div className="lg:hidden">
            <Hamburger toggled={click} toggle={handleToggle} />
          </div>
          <ul
            className={`lg:flex lg:justify-end ${click ? "flex-col mt-4" : "hidden lg:flex"}`}
          >
            <li className="py-4 md:py-0 md:mr-6 cursor-pointer border-solid rounded-lg bg-gray-600 p-2 md:p-8">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase font-semibold w-full hover:text-emerald-500"
              >
                Home
              </a>
            </li>
            <li className="py-4 md:py-0 md:mr-6 cursor-pointer border-solid rounded-lg bg-gray-600 p-2 md:p-8">
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase font-semibold w-full hover:text-emerald-500"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nandrianina-randri-949727239/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={like}
                  style={{ width: "30px" }}
                  alt="linkedin"
                  className="py-4 md:py-0 md:mr-6 cursor-pointer border-solid rounded-lg p-2"
                />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://github.com/HeriRandri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  style={{ width: "30px" }}
                  alt="github"
                  className="mr-8 py-4 md:py-0 md:mr-6 cursor-pointer border-solid rounded-lg p-2"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
