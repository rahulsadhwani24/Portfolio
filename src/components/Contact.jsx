import React, { useState } from "react";
import Button from "./Button";
import CallMemoji from "../../public/callMemoji.png"

const Contact = ({visibility}) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section className={`sectionContact ${visibility && "noInteraction"}`}>
      <h1 className="contactTitle">Let's Talk</h1>
      <h3 className="contactText">
        New project/Freelance inquery or a meet-up
      </h3>
      <div className="contactContainer">
        <div className="formElements">
          <div className="nameElement">
            <label className="formLabel nameLabel">Name*</label>
            <input
              className="formInput nameInput"
              type="text"
              name="name"
              value={inputValues.name}
              onChange={(e) => {
                setInputValues((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </div>

          <div className="emailElement">
            <label className="formLabel emailLabel">Email*</label>
            <input
              className="formInput emailInput"
              type="email"
              name="email"
              value={inputValues.email}
              onChange={(e) => {
                setInputValues((prev) => ({ ...prev, email: e.target.value }));
              }}
            />
          </div>

          <div className="messageElement">
            <label className="formLabel emailLabel">Message*</label>
            <textarea
              className="formInput messageInput"
              name="message"
              value={inputValues.message}
              onChange={(e) => {
                setInputValues((prev) => ({
                  ...prev,
                  message: e.target.value,
                }));
              }}
            ></textarea>
          </div>

          <span className="formButton">
            <Button text="Send message" isFilled="true" />
          </span>
        </div>
        <img src={CallMemoji} className="ContactMemoji" />
      </div>
    </section>
  );
};

export default Contact;
