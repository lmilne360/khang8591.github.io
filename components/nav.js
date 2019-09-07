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
      }

      .info-nav p {
        margin-top: 20px;
        text-align: center;
      }
    `}</style>
  </div>
);

export const Desktop = props => (
  <div className="no-gutter desktop">
    <div className="sidebar">
      <div className="info-nav">
        <h1>Khang Nguyen</h1>
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
              <i className="fas fa-user"></i> About me
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <i className="fas fa-laptop-code"></i>Porfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <i className="fas fa-blog"></i>Blog
          </a>
        </li>
      </ul>
    </div>
    <div className="content-section">{props.children}</div>
    <style jsx>
      {`
        .sidebar{
          width: 280px;
          position: fixed;
        }
        .content-section{
          margin-left: 280px;
        }
        .fa-user,.fa-blog,.fa-laptop-code {
          width: 0.85em;
          margin-right: 10px;
        }
        .no-gutter {
          margin: 0;
          padding: 0;
        }
        .content {
          padding: 0;
          margin: 0;
        }
        hr {
          border-color: white;
          width: 250px;
        }

        .info-nav h1 {
          font-family: "Segoe UI Bold";
          font-size: 30px;
          margin-bottom: 20px;
        }

        .navbar-nav{
          margin: 0 70px;
        }

        .navbar-nav a {
          font-family: "Segoe UI Bold";
          color: white;
          font-size: 18px;
          display: flex;
        }

        .sidebar {
          height: 100vh;
          background-color: #343a40;
          color: white;
        }

        .info-nav {
          text-align: center;
          margin-top: 20px;
          font-family: "Segoe UI Regular";
          margin-left: 10px;
          margin-right: 10px;
        }

        .info-nav p {
          margin-top: 20px;
        }

        .photo-nav {
          border-radius: 50%;
          margin: 0 auto;
          max-width: 150px;
          border: 2px solid white;
          
        }
      `}
    </style>
  </div>
);
