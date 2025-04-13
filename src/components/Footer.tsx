import { SocialLink } from "@/interface";
import { footerSocialLinks, usefulLinks } from "@/model";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GiRotaryPhone } from "react-icons/gi";
import { FaAnglesRight } from "react-icons/fa6";
import ScrollAnimate from "./ScrollAnimate";

export const Footer: React.FC = () => {
  return (
    <footer
      className="vs-footer-style1"
      style={{ backgroundImage: "url('/img/footer/footer-style1-bg.png')" }}
    >
      <div className="footer-top space-top">
        <div className="container">
          <div className="row gx-4">
            <div className="col-12">
              <ScrollAnimate direction="up" delay={0.5}>
                <div
                  className="footer-cta bg-third-theme-color fade-anim"
                  style={{
                    backgroundImage: "url('/img/footer/footer-cta-bg.png')",
                  }}
                >
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-8">
                      <div className="cta-contact-items">
                        <div className="contact-item">
                          <span className="icon">
                            <CiLocationOn />
                          </span>
                          <div className="info">
                            <h5 className="info-title text-white-color">
                              Location
                            </h5>
                            <p>
                              KH number 262, Saidulajab, Western marg, New Delhi
                              110030 Near Champa Kali
                            </p>
                          </div>
                        </div>
                        <div className="contact-item">
                          <span className="icon">
                            <GiRotaryPhone />
                          </span>
                          <div className="info">
                            <h5 className="info-title text-white-color">
                              Contact Us
                            </h5>
                            <p>
                              <a href="mailto:info@hevenquest.com">
                                info@hevenquest.com
                              </a>
                              <p style={{ display: "flex" }}>
                                <a
                                  href="tel:01141543739"
                                  className="hover:underline text-blue-600"
                                >
                                  01141543739
                                </a>
                                ,{" "}
                                <a
                                  href="tel:9717863939"
                                  className="hover:underline text-blue-600"
                                  style={{ paddingLeft: 4 }}
                                >
                                  9717863939
                                </a>
                              </p>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end btn-trigger btn-bounce">
                      <ScrollAnimate direction="down" delay={1} bounce={0.5}>
                        <Link href="contact" className="vs-btn style6">
                          <span>booking now</span>
                        </Link>
                      </ScrollAnimate>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-center space-extra">
        <div className="container">
          <div className="row gx-4 gy-4 gx-xl-2 justify-content-between">
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="footer-widgets">
                <Link href="/" className="logo footer-logo">
                  <Image src="/img/logo.svg" alt="logo" width={0} height={0} />
                </Link>
                <p className="mt-4 mb-3 text-color-5">
                  We delivers personalized travel experiences, ensuring every
                  journey is seamless, memorable, and tailored to your needs.
                  Your comfort and satisfaction are our top priority.
                </p>

                <div className="social-media">
                  <ul className="custom-ul">
                    {footerSocialLinks.map((link: SocialLink) => {
                      const Icon = link.icon;
                      return (
                        <li key={link.id}>
                          <Link href={link.link} target="_blank">
                            <Icon />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-4 order-md-3 order-lg-2">
              <div className="footer-widgets">
                <h5 className="widgets-title text-white-color text-capitalize">
                  Useful Links
                </h5>
                <div className="row gx-xl-2 g-2">
                  {usefulLinks.map((col, idx) => (
                    <div key={idx} className="col-md-6">
                      <div className="footer-links">
                        <ul className="custom-ul">
                          {col.map((row) => (
                            <li key={row.id}>
                              <a href={row.link}>
                                <FaAnglesRight />
                                {row.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 order-md-2 order-lg-3">
              <div className="footer-widgets">
                <h5 className="widgets-title text-white-color text-capitalize">
                  Share Your Feedback
                </h5>
                <p className="mt-4 mb-3 text-color-5">
                  We value your opinion! Tell us about your experience to help
                  us continually enhance our services.
                </p>
                <a href="#" className="vs-btn style8">
                  Help Us Improve
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-third-theme-color">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-2 order-md-1">
              <p className="footer-copyright text-center text-md-start">
                ©{" "}
                <span className="current-year">{new Date().getFullYear()}</span>
                <span className="text-theme-color">Heven Quest</span>, All
                Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <div className="footer-menu">
                <ul className="custom-ul justify-content-center justify-content-md-end">
                  <li>
                    <a href="about">About Us</a>
                  </li>
                  <li>
                    <a href="faq">Faq’s</a>
                  </li>
                  <li>
                    <a href="destinations">Destination</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
