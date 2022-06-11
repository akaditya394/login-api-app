import React from "react";
import Button from "../Button/Button";

import classes from "./Header.module.css";

function Header(props) {
  return (
    <header className={`${classes.header} ${props.className}`}>
      <div className={classes.content}>
        <h1 className={classes.brandName}>
          ATools<span style={{ color: "red" }}>.</span>
        </h1>
        <Button className={classes.trialBtn}>Start Free Trial</Button>
        <Button className={classes.headerLoginBtn}>Login</Button>
      </div>
    </header>
  );
}

export default Header;
