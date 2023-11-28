import css from "./Header.module.css";
import logo from "../../utils/images/logo.jpg";
import { ReactComponent as Burger } from "../../utils/images/menu.svg";
import { ReactComponent as Logo } from "../../utils/images/logo.svg";
import { ReactComponent as Arrow } from "../../utils/images/arrow45deg.svg";
import { ReactComponent as Close } from "../../utils/images/close.svg";

import React, { useState } from "react";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header>
      <div className={css.container}>
        <div className={css.logo}>
          <Logo src={logo} alt="logo" />
        </div>
        <div>
          <Burger className={css.burger} width={16} onClick={openModal} />
        </div>
        {isModalOpen && (
          <div
            className={css.overlay}
            //  onClick={closeModal}
          >
            <div className={css.modalContentContainer}>
              <div className={css.modalContent}>
                <div className={css.cont}>
                  <button onClick={closeModal} className={css.btnClose}>
                    <Close width={20} /> close
                  </button>
                  <ul className={css.list}>
                    <li className={css.list_item}>
                      <div className={css.list_item_text}>Main</div>
                      <Arrow className={css.arrow} width={16} />
                    </li>
                    <li className={css.list_item}>
                      <div className={css.list_item_text}>About</div>{" "}
                      <Arrow className={css.arrow} width={16} />
                    </li>
                    <li className={css.list_item}>
                      <div className={css.list_item_text}>Cases</div>{" "}
                      <Arrow className={css.arrow} width={16} />
                    </li>
                    <li className={css.list_item}>
                      <div className={css.list_item_text}>FAQ</div>{" "}
                      <Arrow className={css.arrow} width={16} />
                    </li>
                    <li className={css.list_item}>
                      <div className={css.list_item_text}>Contact Us</div>
                      <Arrow className={css.arrow} width={16} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
