import React from "react";
import css from "./Cases.module.css";
import { ReactComponent as Left } from "../../utils/images/left.svg";
import { ReactComponent as Right } from "../../utils/images/right.svg";
import { items } from "../../data/data";
import Card from "./Card/Card";

const Cases = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Successful cases of our company</h2>
      <div className={css.slider}>
        <div className={css.num}>
          01 <span className={css.num2}>/05</span>
        </div>
        <div>
          <button>
            <Left />
          </button>
          <button>
            <Right />
          </button>
        </div>
      </div>
      <div className={css.card}>
        {items.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cases;
