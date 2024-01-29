import React from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import KhaltiCheckout from "khalti-checkout-web";
import khaltiPic from "./../../../photos/khalti.png"

function Payment() {

  const {userData} = useContext(UserContext);
  const {seatArray} = useContext(UserContext);
  const {filmDetails} = useContext(UserContext);
  
  console.table(userData);
  console.table(seatArray);
  console.log(filmDetails);

  let config = {
    "publicKey": "test_public_key_f332dc601a0d42ac9fa2bfb4518e257b",
            "productIdentity": filmDetails.data._id,
            "productName": filmDetails.data.movieName,
            "productUrl": "http://gameofthrones.wikia.com/wiki/Dragons",
            "paymentPreference": [
                "KHALTI",
                "EBANKING",
                "MOBILE_BANKING",
                "CONNECT_IPS",
                "SCT",
                ],
            "eventHandler": {
                onSuccess (payload) {
                    // hit merchant api for initiating verfication
                    console.log(payload);
                },
                onError (error) {
                    console.log(error);
                },
                onClose () {
                    console.log('widget is closing');
                }
            }
  }

  const checkout = new KhaltiCheckout(config);

  return (<div className="payment-page" style={{color: 'white'}}>
    <div style={{background: 'white', color: 'black'}}>
      <img src={filmDetails.data?.imageCover} />
      <h3>{filmDetails.data.movieName}</h3>
    </div>
   <button className="paymentbutton" onClick={() => checkout.show({amount: 10000})}>
        <img src={khaltiPic} /> Pay with Khalti</button>
  </div>);
}

export default Payment;
