import React, { useState } from "react";
import Button from "./Button";

const Experiments = ({visibility}) => {
  const [experimentsArray, setExperiments] = useState([
    {
      name: "Menu Open/Close Animation",
      image: "../src/assets/Menu.gif",
    },
    {
      name: "Search Input Animation",
      image: "../src/assets/search-context.gif",
    },
    {
      name: "Menu Open/Close Animation",
      image: "../src/assets/Menu.gif",
    },
    {
      name: "Search Input Animation",
      image: "../src/assets/search-context.gif",
    },
  ]);

  return (
    <section className={`sectionExperiments ${visibility && "noInteraction"}`}>
      <h1 className="experimentsTitle">Experiments & Playground</h1>
      <h3 className="textCenter">Web is Fun.</h3>
      <div className="experimentsContainer">
        {experimentsArray.map((experiment, index) => {
          return (
            <div className="experimentCard" key={index}>
              <div className="experimentShowCaseContainer">
                <img className="experimentShowCase" src={experiment.image} />
              </div>
              <div className="cardContent">
                <div>
                  <h4 className="cardTitle">- Title</h4>
                  <h3 className="cardTitleName">{experiment.name}</h3>
                </div>
                <div>
                  <span className="experimentCount">0{index + 1}</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <span className="experimentsButton">
        <Button text="Explore All" isFilled="true" />
        <span className="buttonArrow">
          <svg
            width="55"
            height="31"
            viewBox="0 0 55 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M39.5258 0L36.925 2.60082L47.9592 13.635H0V17.3133H47.9588L36.925 28.3471L39.5258 30.9479L55 15.474L39.5258 0Z" />
          </svg>
        </span>
      </span>
    </section>
  );
};

export default Experiments;
