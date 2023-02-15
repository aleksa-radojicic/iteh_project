import React from "react";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Aquarium Keep | Contact</title>
      </Helmet>

      <section id="contact" className="container my-5 py-5">
        <div className="container text-center mt-5">
          <h3>Contact us</h3>
          <hr className="mx-auto" />
          <p className="w-50 mx-auto">
            Phone number: <span>+381 63 135 3942</span>
          </p>
          <p className="w-50 mx-auto">
            Email address: <span>info@outlook.com</span>
          </p>
          <p className="w-50 mx-auto">We ship to every continent.</p>
        </div>
      </section>
    </>
  );
}

export default Contact;
