import css from "./Header.module.css";
import logo from "../../utils/images/logo.jpg";
import { Link } from "react-scroll";
import { ReactComponent as Burger } from "../../utils/images/menu.svg";
import { ReactComponent as Logo } from "../../utils/images/logo.svg";
import { ReactComponent as Arrow } from "../../utils/images/arrow45deg.svg";
import { ReactComponent as Close } from "../../utils/images/close.svg";
import { ReactComponent as Down } from "../../utils/images/down.svg";

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
        <div className={css.contact_us}>
          <Link to="contacts" smooth={true} duration={500}>
            <button className={css.contactBtn}>
              <span className={css.contactBtn_text}>Contact Us</span>
              <span className={css.dot}>
                <Down />
              </span>
            </button>
          </Link>
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
                    <li>
                      <Link
                        className={css.list_item}
                        to="main"
                        smooth={true}
                        duration={500}
                        onClick={closeModal}
                      >
                        <div className={css.list_item_text}>Main</div>
                        <Arrow className={css.arrow} width={16} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="about"
                        className={css.list_item}
                        smooth={true}
                        duration={500}
                        onClick={closeModal}
                      >
                        <div className={css.list_item_text}>About</div>
                        <Arrow className={css.arrow} width={16} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="cases"
                        className={css.list_item}
                        smooth={true}
                        duration={500}
                        onClick={closeModal}
                      >
                        <div className={css.list_item_text}>Cases</div>
                        <Arrow className={css.arrow} width={16} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="faq"
                        className={css.list_item}
                        smooth={true}
                        duration={500}
                        onClick={closeModal}
                      >
                        <div className={css.list_item_text}>FAQ</div>
                        <Arrow className={css.arrow} width={16} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="contacts"
                        className={css.list_item}
                        smooth={true}
                        duration={500}
                        onClick={closeModal}
                      >
                        <div className={css.list_item_text}>Contact Us</div>
                        <Arrow className={css.arrow} width={16} />
                      </Link>
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
