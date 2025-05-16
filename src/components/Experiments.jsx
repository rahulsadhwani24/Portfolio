import React, { useState } from "react";
import MenuGif from "../assets/Menu.gif";
import SearchGif from "../assets/search-context.gif";
import PreloaderSpinnerGif from "../assets/PreloaderSpinner.gif";
import SkewTransitionGif from "../assets/SkewTransition.gif";
import { Link } from "react-router-dom";

const Experiments = ({ visibility }) => {
  const [experimentsArray, setExperiments] = useState([
    {
      name: "Menu Open/Close Animation",
      image: MenuGif,
      link: "https://codepen.io/SRahul24/pen/WbbmaeP",
    },
    {
      name: "Search Input Animation",
      image: SearchGif,
      link: "https://codepen.io/SRahul24/pen/MYYxPma",
    },
    {
      name: "Skew Tranistion",
      image: SkewTransitionGif,
      link: "https://codepen.io/SRahul24/pen/azzMRpp",
    },
    {
      name: "Preloader Spinner",
      image: PreloaderSpinnerGif,
      link: "https://codepen.io/SRahul24/pen/XJJGPOJ",
    },
  ]);

  return (
    <section className={`sectionExperiments ${visibility && "noInteraction"}`}>
      <h1 className="experimentsTitle">Experiments & Playground</h1>
      <h3 className="textCenter">Web is Fun.</h3>
      <div className="experimentsContainer">
        {experimentsArray.map((experiment, index) => {
          return (
            <Link to={experiment.link} key={index} className="experimentCard">
              <div>
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
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Experiments;
