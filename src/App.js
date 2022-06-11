import React, { useState } from "react";
import axios from "axios";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";

import classes from "./App.module.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState(false);
  const [eMailError, setEMailError] = useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (password.length === 0) {
      setPassError(true);
      console.log("Missing Password");
      // return;
    } else {
      setPassError(false);
    }

    if (email.length === 0) {
      setEMailError(true);
      console.log("Missing Email");
      // return;
    } else {
      setEMailError(false);
    }
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <main className={classes.main}>
      <Header className={classes.header} />
      <section className={classes.section}>
        <div className={classes.formSection}>
          <form onSubmit={submitHandler}>
            <div className={classes.welcome}>
              <h1 style={{ margin: 0 }}>
                <b>Welcome Back</b>
              </h1>
              <p style={{ margin: 0 }}>Sub-title text will go here</p>
            </div>
            <div>
              <Input
                className={classes.input}
                value={email}
                onChange={emailChangeHandler}
                type="email"
                placeholder="Email*"
              />
            </div>
            <div>
              <Input
                className={classes.input}
                value={password}
                onChange={passwordChangeHandler}
                type="password"
                placeholder="Password*"
              />
            </div>
            <div>
              <Button className={classes.loginBtn} type="submit">
                Login
              </Button>
            </div>
            <div className={classes.pwtools}>
              <div className={classes.rememberPassword}>
                <Input type="checkbox" name="rememberPassword" />
                <label htmlFor="rememberPassword">
                  <span style={{ fontSize: "0.8rem" }}>Remember password</span>
                </label>
              </div>
              <div>
                <span style={{ fontSize: "0.8rem" }}>Forgot password?</span>
              </div>
            </div>
            {passError && <p style={{ color: "red" }}>Missing Password</p>}
            {eMailError && <p style={{ color: "red" }}>Missing Email</p>}
          </form>
        </div>
        <div className={classes.svgSection}></div>
      </section>
    </main>
  );
}

export default App;
