import css from "./Footer.module.css";
import logo from "../../utils/images/logo.jpg";
import { ReactComponent as UpBtn } from "../../utils/images/up.svg";
import { ReactComponent as Facebook } from "../../utils/images/facebook.svg";
import { ReactComponent as Insta } from "../../utils/images/instagram.svg";
import { ReactComponent as Logo } from "../../utils/images/logo.svg";

import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className={css.container}>
          <div className={css.logo}>
            <Logo src={logo} alt="logo" />
          </div>
          <div>
            <Link to="main" smooth={true} duration={500}>
              <UpBtn className={css.upBtn} />
            </Link>
          </div>
        </div>
        <div className={css.contact_item}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Facebook className={css.contact_img} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Insta className={css.contact_img} />
          </a>
        </div>
      </div>

      <div className={css.adress}>
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        <div className={css.adress_flex}>
          <p>office@ecosolution.com</p>
          <p>ecosolution © 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
