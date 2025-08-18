import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Naija Work Connect</h1>
          <p>
            Connecting skilled professionals with the right opportunities across Nigeria.
          </p>
          <button className="hero-btn" onClick={goToSignup}>
            Get Started
          </button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Find Jobs</h3>
          <p>Search for opportunities that match your skills and interests.</p>
        </div>
        <div className="feature-card">
          <h3>Hire Talent</h3>
          <p>Post your job and connect with skilled professionals across Nigeria.</p>
        </div>
        <div className="feature-card">
          <h3>Network</h3>
          <p>Build your professional network and grow your career.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
