import React, { useState } from "react";
import css from "./Form.module.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { ReactComponent as Arrow } from "../../../utils/images/arrow-right.svg";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isIncorrectEmail, setIsIncorrectEmail] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(null);
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    const nameRegex = /^[^\d]+$/;
    setIsInvalidName(newName === "" ? null : !nameRegex.test(newName));
    validateForm();
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    setIsValidEmail(newEmail === "" ? null : emailRegex.test(newEmail));
    setIsIncorrectEmail(!emailRegex.test(newEmail));
    validateForm();
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;

    console.log("newPhone:", newPhone);

    setPhone(newPhone);

    const phoneRegex = /^\d{12}$/;
    setIsValidPhone(newPhone === "" ? null : phoneRegex.test(newPhone));
    console.log("isValidPhone:", isValidPhone);

    validateForm();
  };

  const handleMessageChange = (e) => {
    const newMsg = e.target.value;
    setMessage(newMsg);
  };

  const validateForm = () => {
    setIsFormValid(!isInvalidName && isValidEmail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Notify.success(`Hello amigo`);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className={css.message_form_container}>
      <form className={css.message_form} onSubmit={handleSubmit}>
        <div className={css.contact_type}>
          <span className={css.contact_item}>* Full name:</span>
          <input
            className={`${css.input} ${
              isInvalidName === true
                ? css.invalid
                : isInvalidName === false
                ? css.valid
                : ""
            }`}
            type="text"
            placeholder="John Rosie"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          {isInvalidName && (
            <div className={css.errorContainer}>
              <p className={css.errorMsg}>Wrong Fullname</p>
            </div>
          )}
        </div>
        <div className={css.contact_type}>
          <span className={css.contact_item}>* E-mail:</span>
          <input
            className={`${css.input} ${
              isValidEmail === true
                ? css.valid
                : isValidEmail === false
                ? css.invalid
                : ""
            }`}
            type="email"
            placeholder="johnrosie@gmail.com"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {isIncorrectEmail && (
            <div className={css.errorContainer}>
              <p className={css.errorMsg}>Wrong email</p>
            </div>
          )}
        </div>
        <div className={css.contact_type}>
          <span className={css.contact_item}>* Phone:</span>
          <input
            className={`${css.input} ${
              isValidPhone === true
                ? css.valid
                : isValidPhone === false
                ? css.invalid
                : ""
            }`}
            type="text"
            placeholder="380961234567"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            pattern="\d{12}"
            title="Enter a valid phone number (12 digits)"
          />
          {isValidPhone === false && (
            <div className={css.errorContainer}>
              <p className={css.errorMsg}>Wrong Phone</p>
            </div>
          )}
        </div>
        <div className={`${css.contact_type} ${css.lastContactType}`}>
          <span className={css.contact_item}>Message:</span>
          <textarea
            className={`${css.input} ${css.message}`}
            placeholder="Your message"
            name="message"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <div className={css.btn_pos}>
          <button className={css.button} type="submit" disabled={!isFormValid}>
            <div className={css.button_text}>Send</div>
            <Arrow className={css.arrow} width={16} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
