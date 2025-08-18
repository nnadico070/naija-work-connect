import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const workerSignUp = () => {
    navigate("/signup");
  };
 
   const workerlogin = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Naija Work Connect</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
         <li><a href="/postjob">Post a Job</a></li>
        <li><a href="/workers">Find Workers</a></li>
        <li><a href="/checkjob">Check For Job</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <div className="nav-buttons">
        <button className="btn login" onClick={workerlogin}>Login</button>
        <button className="btn signup" onClick={workerSignUp}>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
