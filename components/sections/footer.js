const Footer = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container-fluid">
        <div className="meta-wrapper">
          <h1 className="display-4 name">Contact</h1>
          <form action="https://formspree.io/khang859@gmail.com" method="POST">
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
                aria-describedby="emailHelp"
                placeholder="Enter email"
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
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .meta-wrapper {
            width: 40%;
          }
          .name {
            font-family: "Segoe UI Bold";
            font-size: 48px;
          }
          .container-fluid {
            max-width: 1280px;
          }

          .jumbotron {
            background-color: #fafafa;
            padding: 2rem;
            margin-bottom: 5em;
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

export default Footer;
