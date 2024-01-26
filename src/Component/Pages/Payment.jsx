import React from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

function Payment() {

  const {userData} = useContext(UserContext);
  console.log(userData);
  return (<div className="payment-page">
    This is the payment page
  </div>);
}

export default Payment;
