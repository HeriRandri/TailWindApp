import Navbar from "./Composants/Navbar";
import Header from "./Composants/Header";
import { Contact } from "./Composants/Pages/Contact";
import Linkedin from "./Composants/Pages/Linkedin";
import Github from "./Composants/Pages/Github";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ButtonNav from "./Composants/ButtonNav";

export default function App() {
  return (
    <div>
      <Router>
        <div className=" h-screen bg-slate-800 col-span-1 sm:h-screen">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/linkedin" element={<Linkedin />} />
              <Route path="/github" element={<Github />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}
