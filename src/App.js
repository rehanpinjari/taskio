import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/App.css";

import Home from "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Pages/Home.js";
import About from "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Pages/About.js";
import Main from "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Pages/Main.js";
import ComingSoon from "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Pages/ComingSoon/ComingSoon.js";

export default function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/main" element={<Main />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        
        </Routes>
      </div>
    </>
  );
}
