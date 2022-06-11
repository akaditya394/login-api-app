import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  return (
    <input
      className={`${classes.input} ${props.className}`}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
