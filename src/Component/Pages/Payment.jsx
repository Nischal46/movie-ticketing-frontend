import React from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import KhaltiCheckout from "khalti-checkout-web";

function Payment() {

  const {userData} = useContext(UserContext);
  const {seatArray} = useContext(UserContext);
  const {filmDetails} = useContext(UserContext);
  
  console.table(userData);
  console.table(seatArray);
  console.table(filmDetails);
  return (<div className="payment-page" style={{color: 'white'}}>
    This is the payment page
  </div>);
}

export default Payment;
