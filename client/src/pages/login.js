import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LOADING, SET_USER } from "../store/actions";
import { useStoreContext } from "../store/store";
import "./login.css";

const Login = () => {
  const [, /* state */ dispatch] = useStoreContext();
  const history = useHistory();

  const [loginCreds, setLoginCreds] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
      .post("/api/users/login", {
        username: loginCreds.username,
        password: loginCreds.password,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: SET_USER, user: response.data });
          history.replace("/");
        }
      })
      .catch((error) => {
        console.log("login error: ");
        console.log(error);
      });
  };

  return (
    <div className="text-center">
      <div className="container">
        <h4>Login</h4>
      </div>
      <form className="form-signin">
        <div className="container">
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            name="username"
            placeholder="Email address"
            value={loginCreds.username}
            onChange={handleChange}
          />
        </div>
        <div className="container">
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            name="password"
            placeholder="Password"
            value={loginCreds.password}
            onChange={handleChange}
          />
        </div>
        <div className="container">
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
