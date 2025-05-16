import React from "react";
import Cross from "../assets/cross.svg";
import Hello from "../../public/helloMemoji.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import Resume from "../assets/RAHUL SADHWANI RESUME.pdf";

function About({ setVisibility, visibility }) {
  return (
    <section className={`sectionAbout ${visibility && "showAboutSection"}`}>
      <span
        className="closeAbout"
        onClick={() => {
          setVisibility(!visibility);
        }}
      >
        <img src={Cross} />
      </span>
      <span className="litenText">About me</span>
      <div className="aboutContainer">
        <img src={Hello} className="helloMemoji" />
        <div className="aboutContent">
          <h1 className="aboutTitle">About Me</h1>
          <h3 className="shortDescription">Interactive Front-End Developer</h3>
          <p className="descriptionAboutMe">
            Hello! I'm Rahul Sadhwani, a passionate frontend developer dedicated
            to crafting beautiful and functional web experiences. With a keen
            eye for design and a love for clean, user-friendly interfaces, I
            strive to bring ideas to life through code. When I'm not coding, you
            can find me playing cricket or enjoying some good music. One of my
            favorite quotes that inspires me is: <br />
            <span className="quote">
              "The best way to predict the future is to create it."
            </span>
            <br />
            <br /> Whether it's a new project, a freelance inquiry, or just a
            casual meet-up, I'm always excited to connect and collaborate. Let's
            create something amazing together!
          </p>
          <div className="buttons">
            <Link
              to={Resume}
              target="_blank"
              onClick={() => {
                setVisibility(!visibility);
              }}
            >
              <Button text="Resume" isFilled="true" />
            </Link>
            <Link
              to={"/Portfolio/contact"}
              onClick={() => {
                setVisibility(!visibility);
              }}
            >
              <Button text="Let's Connect" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
