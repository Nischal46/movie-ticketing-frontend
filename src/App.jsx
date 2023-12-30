import { useState } from "react";
import "./index.css";
import { useContext } from "react";
import UserContextProvider from "./context/UserContextProvider";
import UserContext from "./context/UserContext";
import Navbar from "./Component/Navbar/Navbar";
import Routing from "./router/Routing";
function App() {
  return (
    // <UserContextProvider>
    //   <Registration />
    // </UserContextProvider>

    <div>
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;

function Registration() {
  const { setUserData } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((cv) => [...cv, { username, useremail, userpassword }]);
  };

  return (
    <div
      style={{
        maxWidth: "40rem",
        background: "orange",
        padding: "2em",
        margin: " 0 auto",
        textAlign: "center",
      }}
    >
      <form className="form-control">
        <input
          type="text"
          placeholder="Enter full Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <input
          type="email"
          placeholder="Enter email address"
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
        />
        <br></br>
        {/* <nput type="text" placeholder="Enter contact number" /> */}
        <input
          type="password"
          placeholder="Enter password"
          value={userpassword}
          onChange={(e) => setUserpassword(e.target.value)}
        />
        <br></br>
        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}
