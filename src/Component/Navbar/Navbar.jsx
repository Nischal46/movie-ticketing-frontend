import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 


function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const redirect = useNavigate();

  const handleToggleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo" onClick={() => redirect('/')}>🎬 filim</div>
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

          <Link className="action_btn navmenu" to="/register">Sign in</Link>
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

          <li className="action_btn navmenu" onClick={()=>{
            redirect('/register');
            console.log('register clicked');
          }}>Sign in</li>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
