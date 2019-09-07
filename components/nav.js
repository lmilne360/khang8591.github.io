import React, { useState, useEffect } from "react";
import Link from "next/link";

export const MobileNav = () => (
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
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link" href="#">
                About me
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Porfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <style jsx>{`

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
      }
      .info-nav {
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
      }

      .info-nav p {
        margin-top: 20px;
        text-align: center;
      }
    `}</style>
  </div>
);
