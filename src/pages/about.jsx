import React from "react";
import "./about.css";
import ceoImage from "../assets/binet.jpg"; // 👉 put your picture in src/assets/ folder

const About = () => {
  return (
    <div className="about-page">
      <h2>About My Naija Work Connect</h2>
      <p>
        <strong>My Naija Work Connect</strong> is a platform that connects 
        employers with skilled workers across Nigeria.  
      </p>

      <h3>For Employers:</h3>
      <p>
        Post jobs easily and find reliable workers near you. Whether you need 
        a plumber, mechanic, chef, teacher, or any professional, you can connect 
        with workers quickly.
      </p>

      <h3>For Workers:</h3>
      <p>
        Search for available jobs across all 36 states of Nigeria. Get job 
        details, employer phone numbers, and call employers directly to secure 
        opportunities.
      </p>

      <h3>Our Mission:</h3>
      <p>
        To reduce unemployment and make it easy for employers and workers to 
        connect instantly through technology.
      </p>

      <div className="ceo-section">
        <img src={ceoImage} alt="CEO Onyefuluchi Nnamdi (Binet)" className="ceo-img" />
        <div className="ceo-info">
          <h3>Meet Our CEO</h3>
          <p>
            <strong>Onyefuluchi Nnamdi (Binet)</strong>  
          </p>
          <p>
            The visionary founder and CEO of <strong>My Naija Work Connect</strong>, 
            dedicated to empowering Nigerians and creating opportunities for both 
            workers and employers. 🚀
          </p>
        </div>
      </div>

      <p className="closing">
        🚀 Empowering Nigerians, one job at a time!
      </p>
    </div>
  );
};

export default About;
