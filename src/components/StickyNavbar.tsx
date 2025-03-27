import { menuItems } from "@/model";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const StickyNavbar = () => {
  return (
    <div id="navbars" className="header-sticky navbars">
      <div className="container custom-container">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto col-lg-2">
            <button className="vs-menu-toggle d-inline-block d-lg-none">
              <i className="fal fa-bars"></i>
            </button>
            <div className="logo d-none d-lg-block">
              <Link href="/">
                <Image
                  src="/img/logo.svg"
                  alt="Carmax"
                  className="logo"
                  width={0}
                  height={0}
                />
              </Link>
            </div>
          </div>
          <div className="col-xl-auto col-lg-auto col-sm-3 d-none d-sm-block">
            <nav className="main-menu d-none d-lg-block">
              <ul>
                {menuItems.map((item) => (
                  <li key={item.id} className="menu-item-has-children">
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="logo d-lg-none">
              <Link href="/">
                <Image
                  src="/img/logo.svg"
                  alt="Carmax"
                  className="logo"
                  width={0}
                  height={0}
                />
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-md-auto col-auto">
            <div className="header-wc style2">
              <button className="wc-link2 searchBoxTggler">
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
                ></rect>
                <rect
                  y="9"
                  width="1"
                  height="20"
                  fill="#D9D9D9"
                  fillOpacity="0.7"
                ></rect>
              </svg>
              <div className="logo d-none d-sm-block">
                <a href="contact.html" className="vs-btn style10">
                  <span>let’s plan</span>
                </a>
              </div>
              <div className="logo d-sm-none">
                <Link href="/">
                  <Image
                    src="/img/logo.svg"
                    alt="Carmax"
                    className="logo"
                    width={0}
                    height={0}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
