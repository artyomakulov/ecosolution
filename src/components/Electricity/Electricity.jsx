import React from "react";
import css from "./Electricity.module.css";

const Electricity = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <div className={css.title_section}>
          <h2 className={css.title}>Electricity we produced for all time</h2>
        </div>

        <div className={css.text_container}>
          <p className={css.text}>1.134.147.814</p>
          <span className={css.text_second}>kWh</span>
        </div>
      </div>
    </div>
  );
};

export default Electricity;
