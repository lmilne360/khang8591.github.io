import React from "react";
import Layout from "../components/layout";
import Banner from "../components/banner";
import Nav from "../components/nav";

const Home = () => (
  <Layout>
    <div className="container-wrapper">
      <div className="container-fluid no-gutter">
        <Nav />
        <Banner />
      </div>
    </div>
    <style jsx>{`
      .container-wrapper{
        margin: 0;
        padding: 0;
        font-family: "Segoe UI Regular";
      }
      .col-10{
        min-height: 400px;
      }

      .no-gutter{
        margin: 0;
        padding: 0;
      }
    `}</style>
    </Layout>
);

export default Home;
