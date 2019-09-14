import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Desktop from "../components/nav/desktop-nav";
import MobileNav from "../components/nav/mobile-nav";
import Content from "../components/content";

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
              <Content />
            </div>
          ) : (
            ""
          )}
          {!isMobile ? (
            <div>
              <Desktop>
                <Content />
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
