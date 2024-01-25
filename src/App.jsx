import { useState } from "react";
import "./App.css";
import "./index.css";
import { useContext } from "react";
import UserContextProvider from "./context/UserContextProvider";
import UserContext from "./context/UserContext";
import Navbar from "./Component/Navbar/Navbar";
import Routing from "./router/Routing";
function App() {
  return (
    <div>
      
      <UserContextProvider>
        <Navbar />
        <Routing />
      </UserContextProvider>
      
    </div>
  );
}

export default App;
