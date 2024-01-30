import React from "react";
import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function Payment() {

  const redirect = useNavigate();
  const {userData, seatArray, filmDetails, filmSchedule, cube} = useContext(UserContext);

  useEffect(() => {
    if (userData.length < 1 || seatArray.length < 1 || filmDetails.length < 1) {
      console.log("Redirecting to '/'...");
      redirect('/');
    }
  }, [userData, seatArray, filmDetails, redirect]);

  if (userData.length < 1 || seatArray.length < 1 || filmDetails.length < 1) {
    // Avoid rendering the component if redirecting
    return null;
  }
  
  return (<div className="payment-page" style={{color: 'white'}}>
    <div style={{background: 'white', color: 'black'}}>
      <div style={{textAlign: 'center', padding: '0.8rem'}}><h3>{cube}</h3></div>
     <div className="filmdetails">
     <img src={filmDetails.data?.imageCover} />
     <div>
     <h3>{filmDetails.data.movieName}</h3>
      <p>{filmDetails.data.movieCast}</p>
      <p>{filmDetails.data.genre}</p>
      <p>{filmSchedule.date}</p>
      <p>{filmSchedule.time}</p>
      <p>Seat No: {seatArray.map(cl => <span key={cl}>{cl} {" "}</span>)}</p>

      <p>Total: Rs {(filmDetails.data.price) * seatArray.length}</p>
     </div>
     <img id='barcode' 
            src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100" 
            alt="" 
            title="HELLO" 
           style={{width: '100px', height: '100px'}} />
     </div>
     <div>
      <ul>
      <li>The total price includes 13% of VAT.</li>
      <li>Once the payment is done then it cannot be refunded.</li>
      </ul>
    </div>
    </div>

    
   \
  </div>);
}

export default Payment;
