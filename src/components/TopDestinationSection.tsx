import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { topDestinations } from "@/model";
import Link from "next/link";
import ScrollAnimate from "./ScrollAnimate";

export const TopDestinationSection: React.FC = () => {
  return (
    <section
      className="vs-destination-style1 bg-third-theme-12 overflow-hidden space"
      data-bg-src="/img/bg/destination.png"
    >
      <Image
        className="des-icon-1 animate-parachute"
        src="/img/icons/destination-icon-1.png"
        alt="icon"
        width={100}
        height={300}
      />
      <Image
        className="des-icon-2 animate-tree"
        src="/img/icons/destination-icon-2.png"
        alt="icon"
        width={100}
        height={300}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-auto mx-auto">
            <div className="title-area text-center">
              <ScrollAnimate>
                <span className="sec-subtitle fade-anim" data-direction="top">
                  Top Destinations
                </span>
              </ScrollAnimate>
              <ScrollAnimate>
                <h2 className="sec-title move-anim">
                  Discover Top Destinations
                </h2>
              </ScrollAnimate>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="destination-box-wrapper">
              {topDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className={`destination-box ${
                    destination.id == 1 && "active"
                  }`}
                >
                  <div className="destination-thumb">
                    <Image
                      src={destination.img}
                      alt="destination"
                      className="w-100"
                      width={600}
                      height={300}
                    />
                  </div>
                  <div className="destination-content">
                    <div className="info">
                      <h4 className="text-white text-capitalize">
                        <Link href="destination-details.html">
                          {destination.place}
                        </Link>
                      </h4>
                    </div>
                    <span className="icon bg-theme-color text-white-color">
                      <FaLocationDot size={30} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-50 btn-trigger btn-bounce">
            <ScrollAnimate direction="down" bounce={0.5}>
              <Link href="destinations.html" className="vs-btn style4">
                <span>view more</span>
              </Link>
            </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
