import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import PageWorks from './PageWorks'
import PageExperiments from './PageExperiments'
import PageAbout from './PageAbout'
import PageContact from './PageContact'
import PageNotFound from './PageNotFound'

function Router() {
  const [aboutVisibility, setAboutVisibility] = useState(false);
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <div className="main">
      <Header visibility={aboutVisibility} setVisibility={setAboutVisibility} />
      <About setVisibility={setAboutVisibility} visibility={aboutVisibility} />
      <ReactLenis root>
        <Routes>
          <Route path="/Portfolio/" element={<Home  aboutVisibility={aboutVisibility} setAboutVisibility={setAboutVisibility} />} />
          <Route path="/Portfolio/Home" element={<Home  aboutVisibility={aboutVisibility} setAboutVisibility={setAboutVisibility} />} />
          <Route path="/Portfolio/work/" element={<PageWorks  aboutVisibility={aboutVisibility} setAboutVisibility={setAboutVisibility} />} />
          <Route path="/Portfolio/works/" element={<PageWorks  aboutVisibility={aboutVisibility} setAboutVisibility={setAboutVisibility} />} />
          <Route path="/Portfolio/experiments/" element={<PageExperiments  aboutVisibility={aboutVisibility} setAboutVisibility={setAboutVisibility} />} />
          <Route path="/Portfolio/about/" element={<PageAbout  aboutVisibility={aboutVisibility} setAboutVisibility={setAboutVisibility} />} />
          <Route path="/Portfolio/contact/" element={<PageContact  aboutVisibility={aboutVisibility} setAboutVisibility={setAboutVisibility} />} />
          <Route path="/Portfolio/*" element={ <PageNotFound /> } />
        </Routes>
      </ReactLenis>
      <Footer />
    </div>
  );
}

export default Router;
