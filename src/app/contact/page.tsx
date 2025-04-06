import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import {
  FaPhoneVolume,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaVimeoV,
  FaFacebook,
} from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact HeavenQuest Inn & Suites - Get in Touch with Us",
  description:
    "Have questions or need assistance? Contact HeavenQuest Inn & Suites for inquiries, bookings, or any assistance regarding our services. We are here to help!",
  keywords:
    "contact HeavenQuest Inn & Suites, customer service, hotel contact, booking inquiries, get in touch, luxury hotel contact, customer support, hotel inquiries, contact us India",
};

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <Breadcrumb
        title="Contact Us"
        path="contact"
        backgroundImage="/img/bg/contact.jpg"
      />
      <section className="vs-contact space py-5">
        <div className="container">
          <div className="row g-4 g-xl-5 overflow-hidden">
            <div className="col-lg-5">
              <div className="title-area text-start mb-2">
                <span className="sec-subtitle style-2 text-uppercase">
                  contact us
                </span>
                <h2 className="sec-title">Get in touch with us</h2>
              </div>
              <div className="vs-contact-info mt-3 mb-2">
                <p>
                  <span className="text-primary fw-bold">Address:</span> KH
                  number 262, Saidulajab, Western marg, New Delhi 110030 Near
                  Champa Kali
                </p>
                <div className="vs-contact-list">
                  <div className="contact-item d-flex mb-3">
                    <span className="icon me-3">
                      <FaPhoneVolume />
                    </span>
                    <div className="info">
                      <h6 className="info-title fw-bold">Customer Service :</h6>
                      <p>01141543739, 9717863939</p>
                    </div>
                  </div>
                  <div className="contact-item d-flex mb-3">
                    <span className="icon me-3">
                      <FaEnvelope />
                    </span>
                    <div className="info">
                      <h6 className="info-title fw-bold">careers :</h6>
                      <p>
                        <a
                          href="mailto:info@hevenquest.com"
                          className="text-decoration-none"
                        >
                          info@hevenquest.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="social-follow d-flex align-items-center mt-4">
                  <span className="me-3">Follow Us :</span>
                  <ul className="list-inline mb-0">
                    {/* <li className="list-inline-item">
                      <a
                        href="https://x.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        <FaTwitter className="me-2" />
                      </a>
                    </li> */}
                    <li className="list-inline-item">
                      <a
                        href="https://www.instagram.com/hevenquest/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.facebook.com/profile.php?id=61574066897383"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    {/* <li className="list-inline-item">
                      <a href="#" className="text-decoration-none">
                        <FaLinkedinIn className="me-2" />
                      </a>
                    </li> */}
                    {/* <li className="list-inline-item">
                      <a href="#" className="text-decoration-none">
                        <FaVimeoV className="me-2" />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <form
                action="https://formspree.io/f/myzenenk"
                method="POST"
                className="form-style1"
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      name="fname"
                      type="text"
                      className="form-control"
                      placeholder="First Name*"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      name="lname"
                      type="text"
                      className="form-control"
                      placeholder="Last Name*"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Your Email*"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      name="phone"
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone*"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Your Message..."
                      required
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="col-12 mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary vs-btn submit-btn"
                    >
                      Send Message
                    </button>
                  </div>
                  <p className="form-messages mb-0 mt-3"></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
