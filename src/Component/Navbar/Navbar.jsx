import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { useGetUserQuery } from "../../utils/api";



function Navbar() {

  const redirect = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const {data} = useGetUserQuery();
  const {userData, setUserData} = useContext(UserContext);

  useEffect(() => {
    if(data){
      setUserData([data.data][0]);
    }
  }, [data])

  console.log("data in the navbar", userData);

  const handleToggleClick = () => {
    setIsClicked(!isClicked);
  };
  
  console.log('userdata', userData);


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

          {
            (() => {

              if(userData.role){
                return <div className="userprofile">
                  <div>{userData.name}</div>
                  <button className="action_btn">Log Out</button>
                </div>
              }

              else{
                return <Link className="action_btn navmenu" to="/register">Sign in</Link>
              }
            })()
          }
                          
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

          {
            (() => {
              if(userData.role){
                return <div className="userprofilesmallwidth">
                  <div>{userData.name}</div>
                  <button className="action_btn">Log Out</button>
                </div>
              }
              
              else{
                return <li>
                   <Link className="action_btn navmenu" to="/register">Sign in</Link>
                </li>
              }
            })()
          }
          
        </div>
      </header>
    </div>
  );
}

export default Navbar;
