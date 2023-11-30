import React from "react";
import css from "./About.module.css";
import mainphoto from "../../utils/images/mainphoto.jpg";
import { ReactComponent as Openness } from "../../utils/images/maximize-circle.svg";
import { ReactComponent as Responsibility } from "../../utils/images/global-edit.svg";
import { ReactComponent as Innovations } from "../../utils/images/cpu-charge.svg";
import { ReactComponent as Quality } from "../../utils/images/ranking.svg";
import about1 from "../../utils/images/about1.jpg";
import about2 from "../../utils/images/about2.jpg";

const About = () => {
  return (
    <div className={css.section}>
      <div className={css.container} id="about">
        <div className={css.adress}>
          <p className={css.adress_text}>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </p>
          <div className={css.adress_flex}>
            <p>office@ecosolution.com</p>
            <p className={css.adress_hidden}>ecosolution © 2023</p>
          </div>
        </div>
        <div className={css.image}>
          <img src={mainphoto} alt="green electricity" />
        </div>
        <div className={css.values_block}>
          <h2 className={css.values_title}>Main values of our company</h2>
          <p className={css.values_text}>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </p>
        </div>

        <div className={css.grid}>
          <div className={css.grid_container}>
            <div className={css.item}>
              <div className={css.item_header}>
                <Openness className={css.svg_item} />
                <h5 className={css.item_title}>Opennes</h5>
              </div>
              <p className={css.item_text}>
                to the world, people, new ideas and projects
              </p>
            </div>
            <div className={css.item}>
              <div className={css.item_header}>
                <Responsibility className={css.svg_item} />
                <h5 className={css.item_title}>Responsibility</h5>
              </div>
              <p className={css.item_text}>
                we are aware that the results of our work have an impact on our
                lives and the lives of future generations
              </p>
            </div>
          </div>

          <div className={css.image_values}>
            <img src={about2} alt="Description2" />
          </div>
          <div className={css.image_values}>
            <img src={about1} alt="Description1" />
          </div>
          <div className={css.grid_container}>
            <div className={css.item}>
              <div className={css.item_header}>
                <Innovations className={css.svg_item} />
                <h5 className={css.item_title}>Innovation</h5>
              </div>
              <p className={css.item_text}>
                we use the latest technology to implement non-standard solutions
              </p>
            </div>
            <div className={css.item}>
              <div className={css.item_header}>
                <Quality className={css.svg_item} />
                <h5 className={css.item_title}>Quality</h5>
              </div>
              <p className={css.item_text}>
                we do not strive to be the first among others, but we want to be
                the best in our business
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
