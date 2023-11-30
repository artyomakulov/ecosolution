import React, { useState, useEffect } from "react";
import css from "./Electricity.module.css";

const Electricity = () => {
  const [electricityCount, setElectricityCount] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElectricityCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className={css.section}>
      <div className={css.container}>
        <div className={css.title_section}>
          <h2 className={css.title}>Electricity we produced for all time</h2>
        </div>

        <div className={css.text_container}>
          <p className={css.text}>{formatNumberWithCommas(electricityCount)}</p>
          <span className={css.text_second}>khw</span>
        </div>
      </div>
    </div>
  );
};

export default Electricity;
