import React, { useState } from "react";
import axios from "axios";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
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
    <div>
      <form onSubmit={submitHandler}>
        <Input
          value={email}
          onChange={emailChangeHandler}
          type="email"
          placeholder="Email*"
        />
        <Input
          value={password}
          onChange={passwordChangeHandler}
          type="password"
          placeholder="Password*"
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default App;
