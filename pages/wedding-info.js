import Head from "next/head";
import Layout from "../components/layout";

const WeddingPage = () => (
  <Layout>
    <div className="container">
      <div className="about-section">
        <div className="row">
          <div className="section-header col-12">
            <h1>Khang Wedding Travel Informations</h1>
          </div>
        </div>
        <div className="row">
          <div className="section-body-text col-12">
            <h2>Resort and Hoi An:</h2>
            <p>
              The Resort name is:{" "}
              <b>
                <i>Lan Rung Resort & Spa - Phuoc Hai Beach</i>
              </b>
            </p>
            <p>
              We will at be at the resort on{" "}
              <b>Friday October 25th 2019 to Monday October 28th 2019.</b>
            </p>
            <p>
              Monday October 28th, we will be leaving for Hoi An for a 3 days
              trip, everyone is welcome to come along, its like $200 plane
              tickets i believe.
            </p>
            <p>
              Heres an edgy video about{" "}
              <a href="https://www.youtube.com/watch?v=fNOfkNc9AJE">Hoi An</a>
            </p>
            <p>
              <span className="badge badge-danger">Important Note:</span> Make
              sure it says <b>Phuoc Hai</b> when you're booking, because theres
              another one with the same name in a different province.
            </p>
            <p>
              Heres a link to{" "}
              <a href="https://www.expedia.com/Vung-Tau-Hotels-Lan-Rung-Resort-Spa-Phuoc-Hai-Beach.h21811195.Hotel-Information?chkin=5%2F2%2F2019&chkout=5%2F3%2F2019&rm1=a2&hwrqCacheKey=e74b1ace-14ac-4a13-8622-3abab941b09dHWRQ1555773629755&cancellable=false&regionId=6054414&vip=false&c=10751030-7a39-4a1d-9a9e-e0e782271a4b&mctc=10&exp_dp=62&exp_ts=1555773620498&exp_curr=USD&swpToggleOn=false&exp_pg=HSR">
                Expedia
              </a>
            </p>
          </div>
          <div className="section-body-text col-12">
            <h2>Visas Information:</h2>
            <h3>E-VISA Option:</h3>
            <p>
              From what I've read, you need at least 6 months from the time you
              land in vietnam before your passport expires to be able to apply
              for a visa, so check that.
            </p>
            <p>
              I've found a website from the vietnam government for E-VISAS, i've
              never actually done this so i dont know anything about the
              process, so do you:{" "}
              <a href="https://evisa.xuatnhapcanh.gov.vn/web/guest/khai-thi-thuc-dien-tu/cap-thi-thuc-dien-tu?fbclid=IwAR1-26mV-rH4kwzMVIep4auO8i0gBa0vEcjqtjjiqZuu51yqmD4O1MBX-UY">
                Vietnam E-VISAS
              </a>
            </p>
            <h3>VISAS Travel Agent Option:</h3>
            <p>
              There is a travel Agent me and my dad working with from Florida,
              if you want to get some information from them, here's their info:
            </p>
            <p className="address">KIM NGA TRAVEL</p>
            <p className="address">1216 E. COLONIAL DR. ORLANDO, FL 32803</p>
            <p className="address">Phone: 407-896-3534</p>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        margin-top: 50px;
      }
    `}</style>
  </Layout>
);

export default WeddingPage;
