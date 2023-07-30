import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          {/* 1st logo part */}
          <h2>
            <span>W</span>orld
            <span>A</span>ffairs
          </h2>
        </div>
        {/* 2nd menu part */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.instagram.com/am_i_i_t/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/am_i_i_t/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/am_i_i_t/"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
          {/* hamburger menu start */}
          <div className="hamburger-menu">
            <a href="#">
              <GiHamburgerMenu
                onClick={() => setShowMediaIcons(!showMediaIcons)}
              />
            </a>
          </div>
        </div>
      </nav>
      {/* hero section */}
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>World Affairs</h1>
      </section>
    </>
  );
};

export default Navbar;
