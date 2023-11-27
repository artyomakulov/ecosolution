import css from "./Header.module.css";
import logo from "../../utils/images/logo.jpg";
import {ReactComponent as Burger} from '../../utils/images/menu.svg'

import React from "react";

const Header = () => {
  return (
    <header className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="logo"/>
      </div>
      <div>
        <Burger className={css.burger} width={16}/>
      </div>
    </header>
  );
};

export default Header;
