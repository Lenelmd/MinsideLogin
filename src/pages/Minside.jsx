import React from "react";
import "./Minside.css";
// import { Link } from "react-router-dom";
import "./Login.css";
// import graph from "../assets/graph.png";
// import bluee from "../assets/bluelisticon.png";

const Minside = () => {
  return (
    <>
      <div class="minside-container">
        <div class="minsidebox">
          <div className="minsidetop">
            <h3>Min side</h3>
            <p className="minsidep">Velkommen, [username]!</p>
          </div>
          <div className="boxcontainer">
            <h4>Progresjon</h4>
            <div className="box">
              {/* <img src={graph} className="grpahimg" alt="" /> */}
              {/* <div className="progress">
                <img src={bluee} alt="" />
                <span className="txt">Indre refleksjon</span>
                <span>7/10 70%</span>
              </div> */}
            </div>
          </div>
          <div className="boxcontainer">
            <h4>Rewards</h4>
            <div className="box">
              {/* <input
              type="password"
              id="password"
              placeholder="Passord"
              required
            /> */}
            </div>
          </div>
          {/* <button type="submit">Logg inn</button> */}
        </div>
      </div>
    </>
  );
};

export default Minside;
