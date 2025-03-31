import Link from "next/link";
import React from "react";
import ScrollAnimate from "./ScrollAnimate";

export const FeatureAreaSection: React.FC = () => {
  return (
    <div className="vs-feature-style1 position-relative bg-theme-color">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-7 mt-md-0">
            <h4 className="feature-expert text-white-color ff-rubik fw-bold text-center text-md-start char-animation">
              <ScrollAnimate direction="left">
                Looking for Guidance?
              </ScrollAnimate>
            </h4>
          </div>
          <div className="col-md-5 mt-md-0 d-flex justify-content-center justify-content-md-end btn-trigger btn-bounce">
            <ScrollAnimate direction="up">
              <Link
                className="vs-btn style-4 bg-second-theme-color"
                href="about.html"
              >
                Visit Our plan
              </Link>
            </ScrollAnimate>
          </div>
        </div>
      </div>
      <h2 className="position-absolute text-white-color">Adventures</h2>
    </div>
  );
};
