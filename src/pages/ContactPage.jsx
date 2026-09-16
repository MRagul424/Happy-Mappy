import React, { useState } from "react";

import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";


const ContactPage = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

  };


  const handleSubmit = (event) => {

    event.preventDefault();

    alert(
      "Thank you for contacting TravelPlanner. We will get back to you soon."
    );

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  };


  return (
    <main className="contact-page">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <section className="page-header contact-page-header">

        <div className="page-header-content">

          <span className="section-label">

            <MessageCircle size={17} />

            Get In Touch

          </span>


          <h1>
            Contact Us
          </h1>


          <p>
            Have a question about TravelPlanner?
            Get in touch with our team and
            we will be happy to help.
          </p>

        </div>

      </section>


      {/* ==================================================
          CONTACT SECTION
      ================================================== */}

      <section className="section">

        <div className="contact-layout">


          {/* =================================================
              LEFT SIDE - CONTACT DETAILS
          ================================================= */}

          <div className="contact-information">

            <div className="contact-heading">

              <span className="section-label">

                Contact Information

              </span>


              <h2>
                We are here to help
              </h2>


              <p>
                Reach out to us for travel
                inquiries, support, partnerships
                or general questions.
              </p>

            </div>


            {/* ADDRESS */}

            <div className="contact-info-card">

              <div className="contact-info-icon">

                <MapPin size={21} />

              </div>


              <div>

                <h3>
                  Address
                </h3>


                <p>
                  11 ABC Street<br />
                  XYZ City<br />
                  Coimbatore, Tamil Nadu 641659
                </p>

              </div>

            </div>


            {/* EMAIL */}

            <div className="contact-info-card">

              <div className="contact-info-icon">

                <Mail size={21} />

              </div>


              <div>

                <h3>
                  Email
                </h3>


                <p>

                  <strong>
                    Support:
                  </strong>{" "}
                  ragulm43421@gmail.com

                  <br />

                  <strong>
                    Business:
                  </strong>{" "}
                  travelplanner@gmail.com

                </p>

              </div>

            </div>


            {/* PHONE */}

            <div className="contact-info-card">

              <div className="contact-info-icon">

                <Phone size={21} />

              </div>


              <div>

                <h3>
                  Phone
                </h3>


                <p>
                  +91 9876543210
                </p>

              </div>

            </div>


            {/* HOURS */}

            <div className="contact-info-card">

              <div className="contact-info-icon">

                <Clock size={21} />

              </div>


              <div>

                <h3>
                  Working Hours
                </h3>


                <p>
                  Monday - Friday
                  <br />
                  9:00 AM - 6:00 PM
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE - CONTACT FORM
          ================================================= */}

          <div className="contact-form-card">

            <div className="contact-form-heading">

              <span className="section-label">

                <Send size={16} />

                Send a Message

              </span>


              <h2>
                How can we help?
              </h2>


              <p>
                Fill in the form below and
                send us your message.
              </p>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >


              {/* NAME */}

              <div className="contact-form-group">

                <label htmlFor="contact-name">
                  Full Name
                </label>


                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* EMAIL */}

              <div className="contact-form-group">

                <label htmlFor="contact-email">
                  Email Address
                </label>


                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* SUBJECT */}

              <div className="contact-form-group">

                <label htmlFor="contact-subject">
                  Subject
                </label>


                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What is your message about?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* MESSAGE */}

              <div className="contact-form-group">

                <label htmlFor="contact-message">
                  Message
                </label>


                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  required
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="primary-button contact-submit"
              >

                Send Message

                <Send size={17} />

              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ==================================================
          BOTTOM SUPPORT SECTION
      ================================================== */}

      <section className="contact-support">

        <div className="contact-support-content">

          <div className="contact-support-icon">

            <MessageCircle size={24} />

          </div>


          <div>

            <h2>
              Need travel support?
            </h2>

            <p>
              Our team is available Monday to
              Friday from 9:00 AM to 6:00 PM.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};


export default ContactPage;