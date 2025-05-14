import React, { useState } from "react";

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

function Menu({ menuState }) {
  const [navLinks, setNavLinks] = useState([
    "Home",
    "Work",
    "Experiments",
    "About",
    "Contact",
  ]);

  return (
    <div className={`menu ${menuState ? "showMenu" : "hideMenu"}`}>
      <div className="menuLinkContainer">
        {navLinks.map((link, index) => {
          return (
            <span key={index} className="menuLink">
              <span className="menuLinkOrder">0{index + 1}</span>
              <SplitArray array={link.split("")} />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
