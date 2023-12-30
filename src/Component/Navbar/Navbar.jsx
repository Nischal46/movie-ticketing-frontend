import { useState } from "react";
import { Link } from "react-router-dom"; 


function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const handleToggleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      {/* <nav
        className="navbar navbar-expand-lg bg-body-tertiary p-2"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <h3 className="navbar-brand" href="#">
            <Link to="/" className="text-decoration-none text-light">
              <span className="brand">🎬 </span>filim
            </Link>
          </h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="text-decoration-none">
                  Movies
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/customerservice" className="text-decoration-none">
                  Customer Service
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/ticket" className="text-decoration-none">
                  Ticket
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contactUs" className="text-decoration-none">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </nav> */}

      <header>
        <div className="navbar">
          <div className="logo">🎬 filim</div>
          <ul className="links">
            <li>
              <Link className="navmenu" to="/">
                Movies
              </Link>
            </li>
            <li>
              <Link className="navmenu" to="/ticket">
                Ticket
              </Link>
            </li>

            <li>
              <Link className="navmenu" to="/customerservice">
                Customer Services
              </Link>
            </li>

            <li>
              <Link className="navmenu" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>

          <Link className="action_btn navmenu">Sign in</Link>
          <div className="toggle_btn" onClick={handleToggleClick}>
            <i
              className={`${
                isClicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"
              }`}
            ></i>
          </div>
        </div>

        <div
          className={`${isClicked ? "dropdown_menu" : "dropdown_menu_close"}`}
        >
          <li>
            <Link className="navmenu" to="/">
              Movies
            </Link>
          </li>
          <li>
            <Link className="navmenu" to="/ticket">
              Ticket
            </Link>
          </li>

          <li>
            <Link className="navmenu" to="customerservice">
              Customer Services
            </Link>
          </li>

          <li>
            <Link className="navmenu" to="/contactus">
              Contact Us
            </Link>
          </li>

          <li className="action_btn navmenu">Sign in</li>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
