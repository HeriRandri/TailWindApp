import React, { useState } from "react";
import dev from "../assets/imgSvg/dev.svg";
import github from "../assets/imgSvg/github.svg";
import like from "../assets/imgSvg/linkedin.svg";

export default function Navbar() {
  const [click, setClcik] = useState(false);
  const handleClick = () => {
    setClcik(!click);
  };
  return (
    <div>
      <header className=" top-0 w-full  ">
        <nav
          id="main-nav"
          className=" text-gray-100 bg-slate-800 max-w-5xl mx-auto font-sans p-6 flex items-center justify-between shadow-lg shadow-slate-900/60 border-b-2 rounded-lg"
        >
          <div className="flex">
            <a href="#" className="text-lg lg:text-2xl logo font-bold">
              Hery
            </a>
            <img src={dev} style={{ width: "30px", height: "30px" }} />
          </div>
          <button
            onClick={handleClick}
            aria-label="toggle button"
            aria-expand="false"
            className="cursor-pointer w-7 md:hidden"
          >
            {click ? "Menu" : "Close"}
          </button>
          <ul className="w-full absolute top-full left-0 -translate-y-full -z-10  border-b border-gray-200 flex flex-col items-center md:static md:z-10 md:w-min md:transform-none md:border-none md:flex-row mx-8">
            <li className="py-4 md:py-0 md:mr-6 cursor-pointer border-solid rounded-lg bg-gray-600 p-8 ">
              <a
                href="/"
                className="text-sm uppercase font-semibold w-full hover:text-emerald-500"
              >
                Home
              </a>
            </li>
            <li className="py-4 md:py-0 md:mr-6 cursor-pointer border-solid rounded-lg bg-gray-600 p-8">
              <a
                href="/contact"
                className="text-sm uppercase font-semibold w-full hover:text-emerald-500"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/linkedin">
                <img
                  src={like}
                  style={{ width: "30px" }}
                  className="py-4 md:py-0 md:mr-6 cursor-pointer border-solid rounded-lg "
                />
              </a>
            </li>
            <li className="ms-3">
              <a href="/github">
                <img
                  src={github}
                  style={{ width: "30px" }}
                  className=" mr-8 py-4 md:py-0 md:mr-6 cursor-pointer border-solid rounded-lg  "
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
