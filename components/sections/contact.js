import {SectionTitle} from "../atoms/section-title";

const Contact = () => {
  return (
    <div className="contact-section section">
      <div className="contact-section__content content">
        <div className="form-wrapper">
          <SectionTitle title="CONTACT ME" />
          <form action="https://formspree.io/khang859@gmail.com" method="POST" className="contact-section__form">
            <div className="form-group">
              <label htmlFor="nameInput">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="nameInput"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail1">Email address</label>
              <input
                name="_replyto"
                type="email"
                className="form-control"
                id="inputEmail1"
                aria-describedby="emailAddress"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="formControlTextarea1"
                rows="3"
                name="message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .contact-section__form{
            margin-left: 40px;
            margin-right: 40px;
            margin-top: 32px;
          }

          .form-wrapper {
            width: 100%;
          }

          @media only screen and (min-width: 769px){
              .form-wrapper{
                  width: 50%;
              }
          }

        `}
      </style>
    </div>
  );
};

export default Contact;
