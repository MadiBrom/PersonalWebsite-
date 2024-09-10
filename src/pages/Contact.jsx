import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Contact = () => {
  const form = useRef(); // Reference to the form

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    emailjs
      .sendForm(
        "service_1321mrf", // Replace with your EmailJS service ID
        "template_h366mvt", // Replace with your EmailJS template ID
        form.current, // Reference to the form
        "user_Madi B" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!"); // Success message
        },
        (error) => {
          alert("Failed to send message. Please try again later."); // Error message
        }
      );
    e.target.reset(); // Clear the form fields after submission
  };

  return (
    <div>
      <Navbar />
      <section className="contact-container">
        <div className="form-container">
          <h1>Contact Me</h1>
          <p>
            If you have any questions or would like to connect, feel free to
            reach out via this form!
          </p>
          <div id="background">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Your name"
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Your email"
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
