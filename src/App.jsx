import { ReactLenis, useLenis } from "lenis/react";
import { useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Works from "./components/Works";
import About from "./components/About";
import Experiments from "./components/Experiments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [aboutVisibility, setAboutVisibility] = useState(false);
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <div className="main">
      <Header visibility={aboutVisibility} setVisibility={setAboutVisibility} />
      <ReactLenis root>
        <About
          setVisibility={setAboutVisibility}
          visibility={aboutVisibility}
        />
        <Landing
          visibility={aboutVisibility}
          setVisibility={setAboutVisibility}
        />
        <Works visibility={aboutVisibility} />
        <Experiments visibility={aboutVisibility} />
        <Contact visibility={aboutVisibility} />
        <Footer />
      </ReactLenis>
    </div>
  );
}

export default App;
