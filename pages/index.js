import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Banner from "../components/banner";
import { MobileNav, Desktop } from "../components/nav";
import Link from "next/link";

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

    handleResize();

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
          {isMobile ? (
            <div>
              <MobileNav />
              <Banner />
            </div>
          ) : (
            ""
          )}
          {!isMobile ? (
            <div>
              <Desktop>
                <Banner />
              </Desktop>
            </div>
          ) : (
            ""
          )}
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
