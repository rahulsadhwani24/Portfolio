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
  useEffect(() => {
    if (!timeout && experimentContainerRef.current) {
      const experiments = gsap.utils.toArray(
        experimentContainerRef.current.querySelectorAll(".experiment")
      );

      gsap.to(experiments, {
        xPercent: -100 * (experiments.length - 1.7),
        scrollTrigger: {
          trigger: experimentContainerRef.current,
          pin: true,
          scrub: 2,
          start: "50% 50%",
          end: () => "+=" + experimentContainerRef.current.offsetWidth,
        },
      });
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          trigger.kill();
        });
      };
    }
  }, [timeout]);
  return (
    <main className={`${!timeout && "loadMain"}`}>
      {!timeout ? (
        <div className="pageExperiments">
          <h1 className="experimentsHeading">Experiments</h1>
          <div className="experiments" ref={experimentContainerRef}>
            {experiments.map((currExperiment, index) => {
              return (
                <Link className="experiment" key={index} to={currExperiment.link} target="_blank">
                  <div>
                    <img className="experimentImage" src={currExperiment.image} alt={currExperiment.name} />
                    <span className="experimentName">{currExperiment.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <Loader setTimeout={setTimeout} />
      )}
    </main>
  );
}

export default PageExperiments;
