import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavItems from "./nav-items";

const MobileNav = () => (
  <div className="nav-bar">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">
        KN
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="info-nav">
          <img src="/static/nav-image.jpg" className="photo-nav" />
          <p>
            Hi, my name is Khang Nguyen and im a Senior Developer, welcome to my
            personal site.
          </p>
        </div>
        <hr />
        <NavItems />
      </div>
    </nav>
    <style jsx>{`

      @media only screen and (min-width: 600px) {
        .info-nav{
          padding: 0 70px;
        }
      }
      
      hr {
        color: white;
        border-color: white;
      }

      .navbar-dark .navbar-brand {
        font-family: "Segoe UI Bold";
      }

      .photo-nav {
        border-radius: 50%;
        margin: 0 auto;
        max-width: 150px;
        border: 2px solid white;
      }
      .info-nav {
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
        padding: 0 20px;
      }

      .info-nav p {
        margin-top: 20px;
        text-align: center;
      }
    `}</style>
  </div>
);

export default MobileNav;