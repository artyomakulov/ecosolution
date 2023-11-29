import React, { useState } from "react";
import css from "./Cases.module.css";
import { ReactComponent as Left } from "../../utils/images/left.svg";
import { ReactComponent as Right } from "../../utils/images/right.svg";
import { items } from "../../data/data";
import Card from "./Card/Card";

const Cases = () => {
  const [indexActiveCard, setIndexActiveCard] = useState(0);

  const totalCards = items.length;

  const handlePrevClick = () => {
    setIndexActiveCard(
      (prevIndex) => (prevIndex - 1 + totalCards) % totalCards
    );
  };

  const handleNextClick = () => {
    setIndexActiveCard((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const activeCard = items[indexActiveCard];
  const prevCard = items[(indexActiveCard - 1 + totalCards) % totalCards];
  const nextCard = items[(indexActiveCard + 1) % totalCards];

  return (
    <div className={css.section}>
      <div className={css.container} id="cases">
        <h2 className={css.title}>Successful cases of our company</h2>
        <div className={css.slider}>
          <div className={css.num}>
            0{indexActiveCard + 1}{" "}
            <span className={css.num2}>/0{totalCards}</span>
          </div>
          <div>
            <button onClick={handlePrevClick} className={css.btn}>
              <Left />
            </button>
            <button onClick={handleNextClick} className={css.btn}>
              <Right />
            </button>
          </div>
        </div>
        <div className={css.card}>
          {items.map((item, index) => (
            <Card
              key={item.id}
              item={item}
              prevCard={prevCard}
              activeCard={activeCard}
              nextCard={nextCard}
              isVisible={index === indexActiveCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;
