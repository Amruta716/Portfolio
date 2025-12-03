// import React, { Component } from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import "./global.css";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import {  Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";


// import React, { Component } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
// // import Project from "./components/Project";
// import Contact from "./components/Contact";
// import NavBar from "./components/NavBar";
// import Footer from "./Footer/Footer";

// import "./global.css";

// export default class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <NavBar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/aboutus" element={<AboutUs />} />
//           {/* <Route path="/project" element={<Project />} /> */}
//           <Route path="/contact" element={<Contact />} />
//         </Routes>

//         <Footer />
//       </BrowserRouter>
//     );
//   }
// }

function App() {
 return (
    <>
      <NavBar />

      <Routes>
        {/* FULL LANDING PAGE */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutUs />
              <Skills/>
              <Project />
              <Contact />
            </>
          }
        />

        {/* SINGLE PAGES */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;