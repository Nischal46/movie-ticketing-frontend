import { useState } from "react";
import UserContext from "./UserContext";

export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState([]);
  const [filmDetails, setFilmDetails] = useState([]);
  const [seatArray, setSeatArray] = useState([]);
  const [cube, setCube] = useState("");
  const [filmSchedule, setFilmSchedule] = useState({time: null, date: null});


  return (
    <UserContext.Provider value={{ userData, setUserData, seatArray, setSeatArray, filmDetails, setFilmDetails, cube, setCube, filmSchedule, setFilmSchedule }}>
      {children}
    </UserContext.Provider>
  );
}
