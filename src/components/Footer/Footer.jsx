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
        <Facebook className={css.contact_img} />
        <Insta className={css.contact_img} />
      </div>
      <div className={css.adress}>
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        <p>office@ecosolution.com</p>
        <p>ecosolution © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
