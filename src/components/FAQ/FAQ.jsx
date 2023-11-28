import React, { useState } from "react";
import css from "./FAQ.module.css";
import { ReactComponent as Add } from "../../utils/images/add.svg";
import { ReactComponent as Minus } from "../../utils/images/minus.svg";
import { ReactComponent as Down } from "../../utils/images/down.svg";

const faqData = [
  {
    id: 1,
    question:
      "How do wind turbines and solar panels work together in a renewable energy system?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    id: 2,
    question:
      "What sets EcoSolution`s renewable energy solutions apart from others on the market?",
    answer: "Answer for question 2.",
  },
  {
    id: 3,
    question:
      "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    answer: "Answer for question 3.",
  },
  {
    id: 4,
    question:
      "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    answer: "Answer for question 4.",
  },
  {
    id: 5,
    question:
      "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    answer: "Answer for question 5.",
  },
];

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}>Frequently Asked Questions</h2>
      <div>
        <ul>
          {faqData.map((item) => (
            <li key={item.id}>
              <div className={css.question_form}>
                <button className={css.openBtn}>
                  {openQuestion === item.id ? (
                    <Minus onClick={() => toggleAnswer(item.id)} />
                  ) : (
                    <Add onClick={() => toggleAnswer(item.id)} />
                  )}
                </button>
                <p className={css.question}>{item.question}</p>
              </div>
              {openQuestion === item.id && (
                <p
                  className={`${css.answer} ${
                    openQuestion === item.id ? css.open : ""
                  }`}
                >
                  {item.answer}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className={css.contact_link}>
        <p className={css.after_text}>
          Didn't find the answer to your question?
        </p>
        <button className={css.contactBtn}>
          <span className={css.contactBtn_text}>Contact Us</span>
          <span className={css.dot}>
            <Down />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FAQ;
