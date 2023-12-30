import { useState } from "react";
import UserContext from "./UserContext";

export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState([]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
