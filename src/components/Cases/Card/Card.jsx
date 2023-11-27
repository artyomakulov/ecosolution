import css from "./Card.module.css";
import { ReactComponent as Arrow } from "../../../utils/images/arrow45deg.svg";

import React from "react";

const Card = ({ item, isVisible  }) => {
  if (!isVisible) {
    return null;
  }
  return (
    <div className={css.card}>
      <div>
        <img
          className={css.img}
          src={item.image}
          alt={item.description}
          width={200}
        />
        <div className={css.title_block}>
          <div>
            <p className={css.title_text}>{item.region}</p>
            <p className={css.title_text}>{item.title}</p>
          </div>
         <Arrow className={css.btn}/>
        </div>
        <div className={css.desc_block}>
          <p className={css.card_desc}>{item.description}</p>
          <p className={css.card_data}>{item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
