import React, { useState } from "react";
import experiments from '../assets/Data/Experiments'
import { Link } from "react-router-dom";

const Experiments = ({ visibility }) => {

  return (
    <section className={`sectionExperiments ${visibility && "noInteraction"}`}>
      <h1 className="experimentsTitle">Experiments & Playground</h1>
      <h3 className="textCenter">Web is Fun.</h3>
      <div className="experimentsContainer">
        {experiments.map((experiment, index) => {
          return (index < 4 ) && (
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
