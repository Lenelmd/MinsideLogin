import React from "react";
import "./Login.css";
import logo from "../assets/Rectanglelogo.png";

const Glemtpassord = () => {
  return (
    <>
      <div class="form-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <form class="login-form" action="/minside">
          <h3>Glemt passord?</h3>
          <p>Tilbakestille passordet</p>
          <div>
            <input
              type="text"
              id="username"
              placeholder="E-post adresse"
              required
            />
          </div>
          <button type="submit">Send meg e-post</button>
        </form>
      </div>
    </>
  );
};

export default Glemtpassord;
