import React, { useState, useEffect } from "react";

const Banner = () => {
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
  },[]);
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container-fluid">
        <div className="meta-wrapper">
          <h1 className="display-4 name">Khang Nguyen</h1>
          <h1 className="display-6 title">Senior Drupal Developer</h1>
          <p className="lead">I specialize in both frontend and backend development for Drupal 8. 
          Sometimes I write about topics im interested in at the time on my blog, check it out.
          Want to know how I may help your project? Check out my project portfolio and online resume.</p>
        </div>
      </div>
      <style jsx>
        {`

          .container-fluid{
            max-width: 1280px;
          }

          @media only screen and (max-width: 400px) {
            .btn-secondary.first{
              margin-bottom: 20px;
            }

            .btn-secondary{
              width: 100%;
            }
          }

          .jumbotron {
            background-color: #fafafa;
            padding: 2rem;
            margin-bottom: 5em;
          }

          .btn-secondary.first{
            background-color: #343a40;
            border-color: #343a40;
            margin-right: 20px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }

          .btn-secondary{
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }

          .fa-arrow-circle-right{
            width: 20px;
            margin-right: 10px;
          }

          .fa-file-alt{
            width: 15px;
            margin-right: 10px;
          }

          .name{
            font-family: 'Segoe UI Bold';
            font-size: 48px;
          }

          .title{
            font-size: 30px;
            margin-bottom: 20px;
          }

          .lead{
            margin-bottom: 20px;
          }

          img{
            max-width: 400px;
            width: 100%;
          }

          .container-fluid {
            justify-content: center;
            display: flex;
            flex-flow: column;
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
