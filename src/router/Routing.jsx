import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "../Component/Pages/Movies";
import Details from "../Component/Pages/Details";
import Booking from "../Component/Pages/Payment";
import CustomerService from "../Component/Pages/CustomerService";
import Ticket from "../Component/Pages/Ticket";
import ContactUS from "../Component/Pages/ContactUS";
import Register from "../Component/Authentication/Register";
import Login from "../Component/Authentication/Login";
import Payment from "../Component/Pages/Payment";

function Routing() {
  return (
    // <BrowserRouter>
    <div className="container">
      
      <Routes>
        <Route path="/" Component={Movies} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/details/:cubeid/:id" Component={Details} />
        <Route path="/booking" Component={Booking} />
        <Route path="/customerservice" Component={CustomerService} />
        <Route path="/ticket" Component={Ticket} />
        <Route path="/contactus" Component={ContactUS} />
        <Route path="/payment" Component={Payment} />
      </Routes>
    </div>
    // </BrowserRouter>
  );
}

export default Routing;
