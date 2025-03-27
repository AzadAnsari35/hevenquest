import Image from "next/image";
import React from "react";

export const CTAAreaSection: React.FC  = () => {
  return (
    <section className="vs-cta space" style={{backgroundImage: "url('/img/bg/cta-bg.png')" }}>
      <Image
        src="/img/icons/cloud.png"
        alt="cta-icon"
        className="cta-icon-1 animate-parachute"
        width={100}
        height={300}
      />
      <Image
        src="/img/icons/ballon-sclation.png"
        alt="cta-icon"
        className="cta-icon-2 animate-parachute"
        width={100}
        height={300}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-auto mx-auto">
            <div className="title-area text-center">
              <span
                className="sec-subtitle text-capitalize fade-anim"
                data-direction="top"
              >
                Find your tour
              </span>
              <h2
                className="sec-title text-white fade-anim"
                data-direction="bottom"
              >
                Have a dream destination in mind?
                <br className="d-none d-md-block" />
                Let Us Take You There!
              </h2>
              <div className="btn-bounce btn-trigger">
                <a href="trips.html" className="vs-btn style8 mt-5">
                  discover more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
