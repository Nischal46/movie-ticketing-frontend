import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "../Component/Pages/Movies";
import Details from "../Component/Pages/Details";
import Booking from "../Component/Pages/Booking";
import CustomerService from "../Component/Pages/CustomerService";
import Ticket from "../Component/Pages/Ticket";
import ContactUS from "../Component/Pages/ContactUS";
import Register from "../Component/Authentication/Register";

function Routing() {
  return (
    // <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/" Component={Movies} />
        <Route path="/register" Component={Register} />
        <Route path="/details" Component={Details} />
        <Route path="/booking" Component={Booking} />
        <Route path="/customerservice" Component={CustomerService} />
        <Route path="/ticket" Component={Ticket} />
        <Route path="/contactus" Component={ContactUS} />
      </Routes>
    </div>
    // </BrowserRouter>
  );
}

export default Routing;
