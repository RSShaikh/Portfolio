import React, { useRef } from "react";
import emailjs from "emailjs-com";
// import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "Rukhsar@0702",   // from EmailJS dashboard
      "Rukhsar_Template",  // from EmailJS dashboard
      form.current,
      "OX_5ClYy-m0_OMWgi"    // from EmailJS dashboard
    ).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I’d love to hear from you! if you like my work, I am ready to get hired.
        </p>

        <div className="row">
          {/* Left side info */}
          <div className="col-md-5 contact-info" data-aos="fade-right">
            <h4>📍 Location</h4>
            <p>Thane, Navi-Mumbai, India</p>
            <h4>📧 Email</h4>
            <p>rukhsarsshaikh02@gmail.com</p>
            <h4>🔗 Social</h4>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/rukhsar-shaikh-007a692a9/"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/RSShaikh"><i className="fab fa-github"></i></a>
              <a href="https://app.netlify.com/teams/shaikhrukhsaar4/projects"><i className="fas fa-globe"></i></a>
            </div>
          </div>

          {/* Right side form */}
          <div className="col-md-7" data-aos="fade-left">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <input type="text" name="user_name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="user_email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-info">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
