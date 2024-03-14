// import React, { useState } from "react";
// import dev from "../assets/imgSvg/dev.svg";
// import github from "../assets/imgSvg/github.svg";
// import like from "../assets/imgSvg/linkedin.svg";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleToggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const menuList = [
//     { name: "home", link: "/" },
//     { name: "contact", link: "/contact" },
//     { name: "linkedin", link: "/linkedin" },
//     { name: "github", link: "//github" },
//   ];

//   return (
//     <div>
//       <header className=" top-0 w-full  ">
//         <nav
//           id="main-nav"
//           className={`top-0 left-0 text-gray-100 bg-slate-800 max-w-5xl mx-auto font-sans p-6 flex items-center justify-between shadow-lg shadow-slate-900/60 border-b-2 rounded-lg lg:hidden sm:block w-full`}
//         >
//           <div className="flex">
//             <a href="#" className="text-lg lg:text-2xl logo font-bold">
//               Hery
//             </a>
//             <img
//               src={dev}
//               style={{ width: "30px", height: "30px" }}
//               alt="dev icon"
//             />
//           </div>

//           <ul
//             className={`md:block hidden px-7 py-2 font-medium ${isMenuOpen ? "hidden" : ""}`}
//           >
//             {menuList.map((menuItem, index) => (
//               <li
//                 key={index}
//                 className="py-4 md:py-0 md:mr-6 cursor-pointer border-solid rounded-lg bg-gray-600 p-8"
//               >
//                 <a
//                   href={menuItem.link}
//                   className="text-sm uppercase font-semibold w-full hover:text-emerald-500"
//                 >
//                   {menuItem.name}
//                 </a>
//               </li>
//             ))}
//             <li>
//               <a href="/linkedin">
//                 <img
//                   src={like}
//                   style={{ width: "30px" }}
//                   className="py-4 md:py-0 md:mr-6 cursor-pointer border-solid rounded-lg "
//                   alt="linkedin icon"
//                 />
//               </a>
//             </li>
//             <li className="ms-3">
//               <a href="/github">
//                 <img
//                   src={github}
//                   style={{ width: "30px" }}
//                   className=" mr-8 py-4 md:py-0 md:mr-6 cursor-pointer border-solid rounded-lg  "
//                   alt="github icon"
//                 />
//               </a>
//             </li>
//           </ul>

//           <button
//             onClick={handleToggleMenu}
//             aria-label="toggle button"
//             className={`cursor-pointer w-7 md:hidden m-5 text-gray-900 ${isMenuOpen ? "open" : ""}`}
//           >
//             {isMenuOpen ? "Close" : "Menu"}
//           </button>
//         </nav>
//       </header>
//     </div>
//   );
// }
// /**
//  *
//  * import React, { useState, useEffect } from 'react';

// const HeuresListe = () => {
//   const [heures, setHeures] = useState([]);

//   useEffect(() => {
//     const genererHeures = () => {
//       const heuresArray = [];
//       const dateActuelle = new Date();
//       const heureActuelle = dateActuelle.getHours();
//       const heureDebut = 8; // Heure de début, par exemple 8h
//       const heureFin = 20; // Heure de fin, par exemple 20h

//       for (let i = heureDebut; i <= heureFin; i++) {
//         heuresArray.push(i);
//       }

//       setHeures(heuresArray);
//     };

//     genererHeures();
//   }, []); // Exécuté uniquement lors du montage initial du composant

//   return (
//     <div>
//       <h2>Liste des heures disponibles :</h2>
//       <ul>
//         {heures.map((heure, index) => (
//           <li key={index}>{heure}:00</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HeuresListe;

//  */

import React, { useState } from "react";

function ButtonNav() {
  const [test, setTest] = useState(false);
  const handlClick = () => {
    setTest(!test);
  };
  return (
    <div className="block text-lg">
      <p className={`${test}?:'sm:text-gray-800':'text-red-300'`}>Andrana</p>
      <button onClick={handlClick}>{test ? "kely" : "lehibe"}</button>
    </div>
  );
}

export default ButtonNav;
