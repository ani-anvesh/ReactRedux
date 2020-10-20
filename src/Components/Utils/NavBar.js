import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import PopUp from "./PopUp";

export default function NavBar() {
  const [add, setAdd] = useState(false);
  const close = () => {
    setAdd(false);
  };

  const dude = function () {
    var x = document.getElementById("nav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  };
  return (
    <>
      <div className="navbar" id="nav">
        <Link exact to="/" className="brand">
          Happiest Neurons
        </Link>
        <a onClick={() => setAdd(!add)} exact to="/addEmployee" className="add">
          Add Employee
        </a>
        <a exact to="javascript:void(0);" className="icon" onClick={dude}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
      {add && <PopUp close={close} type={"Want to Add an Employee...!"} />}
    </>
  );
}
