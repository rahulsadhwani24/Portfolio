import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import CallMemoji from "../../public/callMemoji.png";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Contact = ({ visibility }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toastMessage, setToastMessage] = useState("New Message");
  const form = useRef();

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const sendMail = () => {
    if(inputValues.name === ""){
      document.querySelector('.nameMessage').style.display = "inline";
      return;
    }
    else{
      document.querySelector('.nameMessage').style.display = "none";
    }
    if(inputValues.email === ""){
      document.querySelector('.emailMessage').style.display = "inline";
      return;
    }
    else if(validateEmail(inputValues.email) === false){
      document.querySelector('.emailMessage').style.display = "inline";
      return;
    }
    else{
      document.querySelector('.emailMessage').style.display = "none";
    }
    if(inputValues.message === ""){
      document.querySelector('.messageMessage').style.display = "inline";
      return;
    }
    else{
      document.querySelector('.messageMessage').style.display = "none";
    }
    emailjs
      .sendForm("service_fsrtd1s", "template_s8aikji", form.current, {
        publicKey: "FOYA6BqczvhHEsEX3",
      })
      .then(
        () => {
          toast.success("Message Sent", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          document.querySelectorAll('.formInput').forEach(input => {})
          setInputValues({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Message Failed", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      );
  };

  return (
    <section className={`sectionContact ${visibility && "noInteraction"}`}>
      <h1 className="contactTitle">Let's Talk</h1>
      <h3 className="contactText">
        New project/Freelance inquery or a meet-up
      </h3>
      <div className="contactContainer">
        <form ref={form} className="formElements">
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
            <span className="errorMessage nameMessage" style={{color: "red", display: "none"}}>Please Enter your name*</span>
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
            <span className="errorMessage emailMessage" style={{color: "red", display: "none"}}>Please Enter your valid email*</span>
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
            <span className="errorMessage messageMessage" style={{color: "red", display: "none"}}>Please Enter message*</span>
          </div>

          <span className="formButton" onClick={sendMail}>
            <Button text="Send message" isFilled="true" />
          </span>
        </form>
        <img src={CallMemoji} className="ContactMemoji" />
      </div>
      <ToastContainer bodyClassName="toastBody" />
    </section>
  );
};

export default Contact;
