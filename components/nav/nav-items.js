import Link from "next/link";

const NavItems = props => (
  <div>
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link href="/">
          <a className="nav-link" href="#">
            <i className="fas fa-user"></i> About me
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-laptop-code"></i>Porfolio
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-blog"></i>Blog
        </a>
      </li>
    </ul>
    <style jsx>
      {`
        .fa-user,
        .fa-blog,
        .fa-laptop-code {
          width: 0.85em;
          margin-right: 10px;
        }
        .navbar-nav {
          margin: 0 20px;
        }

        @media only screen and (min-width: 600px) {
          .navbar-nav {
            margin: 0 70px;
          }
        }

        .navbar-nav a {
          font-family: "Segoe UI Bold";
          color: white;
          font-size: 18px;
          display: flex;
        }
      `}
    </style>
  </div>
);

export default NavItems;
