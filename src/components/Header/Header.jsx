import css from "./Header.module.css";
import logo from "../../utils/images/logo.jpg";
import { Link } from "react-scroll";
import { ReactComponent as Burger } from "../../utils/images/menu.svg";
import { ReactComponent as Logo } from "../../utils/images/logo.svg";
import { ReactComponent as Arrow } from "../../utils/images/arrow45deg.svg";
import { ReactComponent as Close } from "../../utils/images/close.svg";
import { ReactComponent as Down } from "../../utils/images/down.svg";
import { ReactComponent as Facebook } from "../../utils/images/facebook.svg";
import { ReactComponent as Insta } from "../../utils/images/instagram.svg";

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
        <div className={css.btn_block}>
          <div>
            <Burger
              className={css.burger}
              width={16}
              onClick={openModal}
              style={{ display: isModalOpen ? "none" : "block" }}
            />
          </div>
          <div style={{ display: isModalOpen ? "none" : "block" }}>
            <Link
              to="contacts"
              smooth={true}
              duration={500}
              className={css.contact_us}
            >
              <button className={css.contactBtn}>
                <span className={css.contactBtn_text}>Get in touch</span>
                <span className={css.dot}>
                  <Down />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {isModalOpen && (
          <div className={css.overlay_container}>
            <div
              className={css.overlay}
              //  onClick={closeModal}
            >
              <div className={css.modalContentContainer}>
                <div className={css.modalContent}>
                  <div className={css.cont}>
                    <button onClick={closeModal} className={css.btnClose}>
                      <Close width={20} className={css.close} />
                      <span className={css.btnClose_text}>close</span>
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
                    <div className={css.contact_item}>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className={css.contact_img} width={24} />
                      </a>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Insta className={css.contact_img} width={24} />
                      </a>
                    </div>
                  </div>
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
