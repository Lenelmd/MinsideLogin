import React from "react";
import "./Login.css";
import logo from "../assets/Rectanglelogo.png";

const Nybruker = () => {
  return (
    <>
      <div class="form-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <form class="login-form" action="/minside">
          <h3>Opprett ny bruker</h3>
          <p>Fyll ut feltene under for å opprette en bruker</p>
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
              type="text"
              id="username"
              placeholder="E-post adresse"
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
          <button type="submit">Opprett bruker</button>
        </form>
      </div>
    </>
  );
};

export default Nybruker;
