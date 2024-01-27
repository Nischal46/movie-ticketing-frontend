import { useState } from "react";
import UserContext from "./UserContext";

export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState([]);
  const [filmDetails, setFilmDetails] = useState([]);
  const [seatArray, setSeatArray] = useState([]);

  return (
    <UserContext.Provider value={{ userData, setUserData, seatArray, setSeatArray, filmDetails, setFilmDetails }}>
      {children}
    </UserContext.Provider>
  );
}
