import React from "react";
import css from "./Electricity.module.css";

const Electricity = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Electricity we produced for all time</h2>
      <div className={css.text_container}>
        <p className={css.text}>1.134.147.814</p>
        <span>kWh</span>
      </div>
    </div>
  );
};

export default Electricity;
