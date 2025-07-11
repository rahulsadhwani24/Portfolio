import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link, NavLink } from "react-router-dom";

const SplitArray = ({ array }) => {
  return (
    <span>
      {array.map((letter, index) => {
        return (
          <span key={index} className="splittedMenuLink">
            {letter}
          </span>
        );
      })}
    </span>
  );
};

function Menu({ menuState, setMenuState, visibility, setVisibility }) {

  const [navLinks, setNavLinks] = useState([
    "Home",
    "Works",
    "Experiments",
    "About",
    "Contact",
  ]);

  useEffect(() => {
  })

  return (
    <div className={`menu ${menuState ? "showMenu" : "hideMenu"}`}>
      <div className="menuMenuContainer">
        <div className="menuLinkContainer">
          {navLinks.map((link, index) => {
            return (
              <span key={index} className="menuLink">
                <span className="menuLinkOrder">0{index + 1}</span>
                <NavLink className="NavLink"
                  onClick={(e) => {
                    setMenuState(false)}
                  }
                  to={`/Portfolio/${link}`}
                >
                  <SplitArray array={link.split("")} />
                </NavLink>
              </span>
            );
          })}
        </div>
        <span className="menuFooter">
          <Footer />
        </span>
      </div>
    </div>
  );
}

export default Menu;
