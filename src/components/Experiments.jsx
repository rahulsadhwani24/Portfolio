import React, { useState } from "react";
import Button from "./Button";
import MenuGif from "../../public/Menu.gif"
import SearchGif from "../../public/search-context.gif"

const Experiments = ({visibility}) => {
  const [experimentsArray, setExperiments] = useState([
    {
      name: "Menu Open/Close Animation",
      image: MenuGif,
    },
    {
      name: "Search Input Animation",
      image: SearchGif,
    },
    {
      name: "Menu Open/Close Animation",
      image: MenuGif,
    },
    {
      name: "Search Input Animation",
      image: SearchGif,
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
    </section>
  );
};

export default Experiments;
