import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Banner from "../components/banner";
import { MobileNav } from "../components/nav";

const Home = () => {
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
    <Layout>
      <div className="container-wrapper">
        <div className="container-fluid no-gutter">
          {isMobile ? <MobileNav /> : ""}
          <Banner />
        </div>
      </div>
      <style jsx>{`
        .container-wrapper {
          margin: 0;
          padding: 0;
          font-family: "Segoe UI Regular";
        }
        .col-10 {
          min-height: 400px;
        }

        .no-gutter {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </Layout>
  );
};
export default Home;
