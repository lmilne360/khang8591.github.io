import React, { useState, useEffect } from "react";
import NavItems from "./nav-items";

const Desktop = props => (
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
      <NavItems />
    </div>
    <div className="content-section">{props.children}</div>
    <style jsx>
      {`
        .content-section {
          margin: 0 auto;
        }

        .sidebar {
          width: 280px;
          position: fixed;
        }

        .content-section {
          margin-left: 280px;
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

export default Desktop;
