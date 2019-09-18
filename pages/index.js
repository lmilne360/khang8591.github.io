import React from "react";
import Layout from "../components/container/layout";
import Banner from "../components/sections/banner";
import Skills from "../components/sections/skills";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";

export default function Home() {
  return (
    <Layout>
      <div className="container-wrapper">
        <div className="container-fluid no-gutter">
          <div className="content">
            <Banner />
            <Skills />
            <Projects />
            <Contact />
          </div>
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
}
