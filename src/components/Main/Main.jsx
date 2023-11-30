import React from "react";
import css from "./Main.module.css";
import { ReactComponent as Arrow } from "../../utils/images/arrow-right.svg";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div className={css.section}>
      <div className={css.container} id="main">
        <h1 className={css.title}>RENEWABLE ENERGY For any task</h1>
        <div className={css.text_block}>
          <p className={css.text}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <Link to="cases" smooth={true} duration={500}>
            <button className={css.button}>
              <div className={css.button_text}>Learn more</div>
              <Arrow className={css.arrow} width={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
