import React, { useCallback, useState } from "react";
import css from "./Cases.module.css";
import csss from "../Cases/Card/Card.module.css";
import { ReactComponent as Left } from "../../utils/images/left.svg";
import { ReactComponent as Right } from "../../utils/images/right.svg";
import { AnimatePresence, motion } from "framer-motion";
import { ReactComponent as Arrow } from "../../utils/images/arrow45deg.svg";
import { items } from "../../data/data";
import Card from "./Card/Card";

const swipeSpeed = 10000;
const swipePower = (offset, velosity) => {
  return Math.abs(offset) * velosity;
};

const Cases = () => {
  const [indexActiveCard, setIndexActiveCard] = useState(0);

  const handleSlider = useCallback((side) => {
    const sliders = items.length - 1;

    if (side === "left") {
      setIndexActiveCard((prevIndex) =>
        prevIndex - 1 >= 0 ? prevIndex - 1 : sliders
      );
    } else {
      setIndexActiveCard((prevIndex) =>
        prevIndex + 1 > sliders ? 0 : prevIndex + 1
      );
    }
  }, []);

  const totalCards = items.length;

  return (
    <div className={css.section} id="cases">
      <div className={css.container}>
        <div className={css.slider_container}>
          <h2 className={css.title}>Successful cases of our company</h2>
          <div className={css.slider}>
            <div className={css.num}>
              0{indexActiveCard + 1}{" "}
              <span className={css.num2}>/0{totalCards}</span>
            </div>
            <div>
              <button onClick={() => handleSlider("left")} className={css.btn}>
                <Left />
              </button>
              <button onClick={() => handleSlider("right")} className={css.btn}>
                <Right />
              </button>
            </div>
          </div>
        </div>

        <div className={css.card}>
          <AnimatePresence>
            {[indexActiveCard, (indexActiveCard + 1) % totalCards].map(
              (index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: [1, 1.2, 0.9, 1, 1] }}
                  key={items[index].id}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < swipeSpeed) {
                      handleSlider("right");
                    } else if (swipe > swipeSpeed) {
                      handleSlider("left");
                    }
                  }}
                >
                  <div className={csss.card_block}>
                    <img
                      className={csss.img}
                      src={items[index].img}
                      alt={items[index].description}
                      width={200}
                    />
                    <div className={csss.title_block}>
                      <div>
                        <p className={csss.title_text}>{items[index].region}</p>
                        <p className={csss.title_text}>{items[index].title}</p>
                      </div>
                      <Arrow className={csss.btn} />
                    </div>
                    <div className={csss.desc_block}>
                      <p className={csss.card_desc}>
                        {items[index].description}
                      </p>
                      <p className={csss.card_data}>{items[index].date}</p>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        <div className={css.cardmob}>
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.2, 0.9, 1, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < swipeSpeed) {
                    handleSlider("right");
                  } else if (swipe > swipeSpeed) {
                    handleSlider("left");
                  }
                }}
              >
                <Card item={item} isVisible={index === indexActiveCard} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Cases;
