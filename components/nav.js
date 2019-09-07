import React, { useState, useEffect } from "react";
import Link from "next/link";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  return (
    <div className="nav-bar">
      {isMobile ? (
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
          <a className="navbar-brand" href="#">KN</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="info-nav">
              <img src="https://picsum.photos/150/150" className="photo-nav"/>
              <p>Hi, my name is Khang Nguyen and im a Senior Developer, welcome to my personal site.</p>
            </div>
            <hr />
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  About me
                </a>
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
      ) : (
        ""
      )}

      <style jsx>{`
        hr{
          color: white;
          border-color: white;
        }

        .navbar-dark .navbar-brand{
          font-family: 'Segoe UI Bold';
        }

        .photo-nav{
          border-radius: 50%;
          margin: 0 auto;
          max-width: 150px;
        }
        .info-nav{
          margin-top: 20px;
          margin-left: auto;
          margin-right: auto;
          display:flex;
          flex-direction: column;
          justify-content: center;
          color: white;
        }

        .info-nav p {
          margin-top: 20px;
          text-align:center;
        }
      `}</style>
    </div>
  );
};

export default Nav;
