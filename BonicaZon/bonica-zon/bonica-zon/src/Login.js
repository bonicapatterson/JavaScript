import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {

  const login = event => {
    event.preventDefault();
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    // call a function to handle authentication
  };

  return (
    <div className="login">
      <NavLink to="/" />
      <img
        className="login__logo"
        src="https://i.imgur.com/rHZ0Dbl.png"
        alt=""
      />
      <div className="login__container">
        <h1>Sign In </h1>
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signInButton" type="submit">Sign In</button>
        </form>
        <p>
          By continuing, you agree to Bonicazon's Conditions of Use and Privacy
          Notice.
        </p>
        <NavLink to="/register">
          <button className="login__registerButton">
            Create your BonicaZon Account
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
