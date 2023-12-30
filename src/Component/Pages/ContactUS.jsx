import React from "react";
import cinemaPic from "./../../../photos/hall2.jpg";

function ContactUS() {
  return (
    <div className="contact-us-page">
      <div className="contact-us-page-img">
        <img src={cinemaPic} />
      </div>
      <div className="contact-us-form">
        <form>
          <div>
            <input placeholder="Name" type="text" />
            <input placeholder="Email" type="text" />
          </div>

          <div>
            <input placeholder="Phone" type="number" />
            <input placeholder="Subject" type="text" />
          </div>

          <div>
            <textarea placeholder="Description" type="text" />
          </div>
          <button>Send</button>
        </form>

        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.247475133948!2d85.33862599964044!3d27.68837179497392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19918f4f3d5f%3A0x716ca1b93897e03f!2sCinemaghar!5e0!3m2!1sen!2snp!4v1703402575202!5m2!1sen!2snp"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
