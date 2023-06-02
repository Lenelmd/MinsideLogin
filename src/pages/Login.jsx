import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../assets/Rectanglelogo.png";

const Login = () => {
  return (
    <>
      <div class="form-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <form class="login-form" action="/minside">
          <h3>Logg inn</h3>
          <p>Vennligst logg inn for å komme til min side</p>
          <div>
            <input
              type="text"
              id="username"
              placeholder="Brukernavn"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Passord"
              required
            />
          </div>
          <button type="submit">Logg inn</button>
          <div className="formslinks">
            <Link className="loginformlink" to="/forget">
              Glemt passord?
            </Link>
            <Link className="loginformlink" to="/register">
              Opprett ny bruker
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
