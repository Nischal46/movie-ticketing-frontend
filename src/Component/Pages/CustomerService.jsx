import React from "react";
import customer_service_pic from "./../../../photos/customer_service.jpg";

function CustomerService() {
  return (
    <div className="customer-service-page">
      <div className="customer-service-first-flex">
        <img src={customer_service_pic} alt="customer service image" />

        <section className="customer-service-section">
          <h3>Contact Customer Service</h3>
          <p>Your Ticket to Entertainment!</p>
          <p>
            If you have any questions or concerns, please feel free to contact
            our customer service team. We are here to help you!
          </p>

          <p>
            <span style={{ color: "red", fontWeight: "700" }}>Email:</span>{" "}
            <lspan href="#">customerservice@moviebooking.com</lspan>
          </p>

          <p>
            <span style={{ color: "red", fontWeight: "700" }}>Phone:</span> +1
            (555) 123-4567
          </p>

          <p>
            Our customer service representatives are available to assist you
            from Monday to Friday, 9:00 AM to 6:00 PM.
          </p>

          <h2 style={{ margin: "0.6rem" }}>
            Frequently Asked Questions (FAQs)
          </h2>
          <p>Check out our FAQs for quick answers to common questions.</p>

          <ul>
            <li>
              <strong>Q:</strong> How do I book a movie ticket online?
            </li>
            <li>
              <strong>A:</strong> To book a movie ticket, follow these steps:
              [Provide steps]
            </li>
          </ul>
        </section>
      </div>

      {/* <div>
        
      </div> */}
    </div>
  );
}

export default CustomerService;
