"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { SocialLink } from "@/interface";
import { menuItems, socialLinks } from "@/model";
import { PopupSearch } from "./PopupSearch";
import { usePathname } from "next/navigation";

export const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const pathname = usePathname();

  const toggleSearch = () => setShowSearch(!showSearch);
  return (
    <>
      <PopupSearch toggle={toggleSearch} show={showSearch} />
      <header
        className={`vs-header ${pathname === "/" ? "layout1" : "layout2"}`}
      >
        <div className="sticky-wrapper position-relative">
          <div className="header-top-wrap">
            <div className="container-fluid custom-container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="header-top">
                    <div className="row g-3 justify-content-between align-items-center">
                      <div className="col-md-6 d-none d-md-block">
                        <div className="contact-info">
                          <ul className="custom-ul">
                            <li>
                              <FaPhoneVolume color="#f7921f" />
                              <Link href="#">01141543739, 9717863939</Link>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="4"
                                height="22"
                                viewBox="0 0 4 22"
                                fill="none"
                              >
                                <line
                                  x1="0.75"
                                  y1="2.774e-08"
                                  x2="0.749999"
                                  y2="21.6114"
                                  stroke="white"
                                  strokeOpacity="0.3"
                                  strokeWidth="1.5"
                                />
                                <line
                                  x1="3.5"
                                  y1="3.92926"
                                  x2="3.5"
                                  y2="17.682"
                                  stroke="white"
                                  strokeOpacity="0.3"
                                />
                              </svg>
                            </li>
                            <li>
                              <IoMailSharp color="#f7921f" />
                              <Link href="mailto:info@hevenquest.com">
                                info@hevenquest.com
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="social-share">
                          <span className="info-share">Follow on:</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="4"
                            height="22"
                            viewBox="0 0 4 22"
                            fill="none"
                          >
                            <line
                              x1="0.75"
                              y1="2.774e-08"
                              x2="0.749999"
                              y2="21.6114"
                              stroke="white"
                              strokeOpacity="0.3"
                              strokeWidth="1.5"
                            />
                            <line
                              x1="3.5"
                              y1="3.92941"
                              x2="3.5"
                              y2="17.6821"
                              stroke="white"
                              strokeOpacity="0.3"
                            />
                          </svg>
                          <ul className="custom-ul">
                            {socialLinks.map((link: SocialLink) => {
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid custom-container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-3 col-lg-auto">
                <div className="header-logo d-flex justify-content-between align-items-center">
                  <Link href="/">
                    <Image
                      width={0}
                      height={0}
                      src="img/logo.svg"
                      alt="Luxrio"
                      className="logo"
                    />
                  </Link>
                  <div className="d-flex align-items-center gap-3">
                    <button
                      className="wc-link2 searchBoxTggler d-lg-none"
                      onClick={toggleSearch}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          d="M20.4174 16.6954L17.2213 13.4773C19.3155 10.0703 18.8936 5.54217 15.9593 2.58766C12.5328 -0.862552 6.9769 -0.862552 3.55037 2.58766C0.123835 6.03787 0.123835 11.6322 3.55037 15.0824C6.5354 18.088 11.1341 18.4736 14.5333 16.2469L17.7019 19.4335C18.4521 20.1888 19.6711 20.1888 20.4213 19.4335C21.1675 18.6781 21.1675 17.4507 20.4174 16.6954ZM5.711 12.9029C3.48395 10.6604 3.48395 7.00959 5.711 4.76715C7.93805 2.52471 11.5638 2.52471 13.7909 4.76715C16.018 7.00959 16.018 10.6604 13.7909 12.9029C11.5638 15.1453 7.93805 15.1453 5.711 12.9029Z"
                          fill="#F6F5F5"
                        ></path>
                      </svg>
                    </button>
                    <button className="vs-menu-toggle d-inline-block d-lg-none">
                      <i className="fal fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-auto d-none d-lg-flex justify-content-end gap-md-4 gap-xl-5">
                <nav
                  className={`main-menu menu-style1 d-none d-lg-block ${
                    pathname === "/" ? "" : "v2"
                  }`}
                >
                  <ul className="d-flex justify-content-center align-items-center">
                    {menuItems.map((item) => (
                      <li key={item.id} className="menu-item-has-children">
                        <Link href={item.link}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="header-wc style2">
                  {pathname === "/" && (
                    <>
                      <button
                        className="wc-link2 searchBoxTggler"
                        onClick={toggleSearch}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M20.4174 16.6954L17.2213 13.4773C19.3155 10.0703 18.8936 5.54217 15.9593 2.58766C12.5328 -0.862552 6.9769 -0.862552 3.55037 2.58766C0.123835 6.03787 0.123835 11.6322 3.55037 15.0824C6.5354 18.088 11.1341 18.4736 14.5333 16.2469L17.7019 19.4335C18.4521 20.1888 19.6711 20.1888 20.4213 19.4335C21.1675 18.6781 21.1675 17.4507 20.4174 16.6954ZM5.711 12.9029C3.48395 10.6604 3.48395 7.00959 5.711 4.76715C7.93805 2.52471 11.5638 2.52471 13.7909 4.76715C16.018 7.00959 16.018 10.6604 13.7909 12.9029C11.5638 15.1453 7.93805 15.1453 5.711 12.9029Z"
                            fill="#F6F5F5"
                          />
                        </svg>
                      </button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="39"
                        viewBox="0 0 6 39"
                        fill="none"
                      >
                        <rect
                          x="5"
                          width="1"
                          height="39"
                          fill="#D9D9D9"
                          fillOpacity="0.7"
                        />
                        <rect
                          y="9"
                          width="1"
                          height="20"
                          fill="#D9D9D9"
                          fillOpacity="0.7"
                        />
                      </svg>
                      <Link href="/package" className="vs-btn style8">
                        <span>let’s plan</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
