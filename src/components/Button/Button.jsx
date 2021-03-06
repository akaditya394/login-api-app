import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={`${classes.btn} ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
