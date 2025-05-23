import React, { useEffect, useRef, useState } from "react";
import experiments from "../assets/Data/Experiments";
import Loader from "./Loader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function PageExperiments() {
  const [timeout, setTimeout] = useState(true);
  const experimentContainerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [experimentContainerRef.current]);

  useEffect(() => {
    if (!timeout && windowWidth > 850 && experimentContainerRef.current) {
      const experimentsElements = gsap.utils.toArray(
        experimentContainerRef.current.querySelectorAll(".experiment")
      );

      gsap.to(experimentsElements, {
        xPercent: -100 * (experimentsElements.length - 1.7),
        scrollTrigger: {
          trigger: experimentContainerRef.current,
          pin: true,
          scrub: 2,
          start: "45% 50%",
          end: () => "+=" + experimentContainerRef.current.offsetWidth,
        },
      });
    }
  }, [timeout]);

  return (
    <main className={`${!timeout && "loadMain"}`}>
      {!timeout ? (
        <div className="pageExperiments">
          <h1 className="experimentsHeading">Experiments</h1>
          <div
            className={`experiments ${
              window.innerWidth <= 850 ? "vertical" : ""
            }`}
            ref={experimentContainerRef}
          >
            {experiments.map((currExperiment, index) => (
              <Link
                className="experiment"
                key={index}
                to={currExperiment.link}
                target="_blank"
              >
                <div>
                  <div className="experimentImage">
                    <img src={currExperiment.image} alt={currExperiment.name} />
                  </div>
                  <span className="experimentName">{currExperiment.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Loader setTimeout={setTimeout} />
      )}
    </main>
  );
}

export default PageExperiments;
