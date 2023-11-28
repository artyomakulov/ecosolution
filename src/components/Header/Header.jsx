import css from "./Header.module.css";
import logo from "../../utils/images/logo.jpg";
import { ReactComponent as Burger } from "../../utils/images/menu.svg";
import { ReactComponent as Logo } from "../../utils/images/logo.svg";

import React from "react";

const Header = () => {
  return (
    <header>
      <div className={css.container}>
        <div className={css.logo}>
          <Logo src={logo} alt="logo" />
        </div>
        <div>
          <Burger className={css.burger} width={16} />
        </div>
      </div>
    </header>
  );
};

export default Header;
