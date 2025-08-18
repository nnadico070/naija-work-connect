import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section">
          <h3>Naija Work Connect</h3>
          <p>Connecting talent with opportunities across Nigeria.</p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            Email:{" "}
            <a href="mailto:nnamdionyefuluchi@gmail.com">
              nnamdionyefuluchi@gmail.com
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a href="https://wa.me/2347019659544" target="_blank" rel="noopener noreferrer">
              07019659544
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/onyefuluchi-nnamdi-2b4612379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Naija Work Connect. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
