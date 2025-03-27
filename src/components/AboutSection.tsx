import Image from "next/image";
import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section className="vs-about position-relative space">
      <Image
        src="/img/icons/plain-globe.png"
        alt="plain-globe"
        className="about-icon-1 animate-parachute"
        width={200}
        height={300}
      />
      <Image
        src="/img/icons/map.png"
        alt="plain-globe"
        className="about-icon-2 animate-parachute"
        width={600}
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
                ABOUT US
              </span>
              <h2 className="sec-title fade-anim" data-direction="bottom">
                Unforgettable Journeys
                <br />
                Tailored Just For You
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-md-6 order-1 order-md-0">
            <div className="about-info-area">
              <div className="title-area mb-4">
                <span className="sec-subtitle text-capitalize">
                  Explore our trip
                </span>
                <h2 className="sec-title">Explore, Dream, Discover, Repeat</h2>
              </div>
              <div className="about-info">
                <p>
                  Welcome to Heaven Quest, your premier travel agency dedicated
                  to crafting personalized and unforgettable journeys. Whether
                  you&apos;re seeking adventure, relaxation, or cultural immersion,
                  we ensure every trip is tailored to your needs and beyond
                  expectations.
                </p>
                <div className="services-lists">
                  <ul className="custom-ul">
                    <li className="fade-anim" data-delay="0.30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                      >
                        <path
                          d="M7.99949 15.7247C7.94644 15.7247 7.89396 15.7137 7.84536 15.6924C7.79675 15.6712 7.75308 15.6401 7.71707 15.6011L0.102184 7.36399C0.0514209 7.30907 0.0177684 7.24055 0.00534479 7.16681C-0.0070788 7.09306 0.00226539 7.0173 0.0322339 6.94878C0.0622023 6.88026 0.111495 6.82197 0.174079 6.78104C0.236663 6.7401 0.309824 6.7183 0.384607 6.71829H4.04999C4.10502 6.7183 4.15942 6.73011 4.2095 6.75293C4.25958 6.77575 4.30418 6.80904 4.3403 6.85056L6.88522 9.77841C7.16026 9.19049 7.69268 8.21156 8.62699 7.01872C10.0082 5.25526 12.5774 2.66176 16.9729 0.320525C17.0579 0.275283 17.1567 0.263542 17.2499 0.287618C17.3431 0.311694 17.4239 0.369838 17.4763 0.450569C17.5287 0.531301 17.5489 0.62875 17.533 0.723675C17.5171 0.8186 17.4661 0.904101 17.3902 0.963294C17.3735 0.97641 15.6787 2.31103 13.7282 4.7556C11.9331 7.00522 9.54691 10.6837 8.37272 15.4325C8.3521 15.516 8.30412 15.5901 8.23645 15.6431C8.16878 15.696 8.08532 15.7248 7.99938 15.7248L7.99949 15.7247Z"
                          fill="currentColor"
                        />
                      </svg>
                      Customized itineraries designed just for you.
                    </li>
                    <li className="fade-anim" data-delay="0.40">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                      >
                        <path
                          d="M7.99949 15.7247C7.94644 15.7247 7.89396 15.7137 7.84536 15.6924C7.79675 15.6712 7.75308 15.6401 7.71707 15.6011L0.102184 7.36399C0.0514209 7.30907 0.0177684 7.24055 0.00534479 7.16681C-0.0070788 7.09306 0.00226539 7.0173 0.0322339 6.94878C0.0622023 6.88026 0.111495 6.82197 0.174079 6.78104C0.236663 6.7401 0.309824 6.7183 0.384607 6.71829H4.04999C4.10502 6.7183 4.15942 6.73011 4.2095 6.75293C4.25958 6.77575 4.30418 6.80904 4.3403 6.85056L6.88522 9.77841C7.16026 9.19049 7.69268 8.21156 8.62699 7.01872C10.0082 5.25526 12.5774 2.66176 16.9729 0.320525C17.0579 0.275283 17.1567 0.263542 17.2499 0.287618C17.3431 0.311694 17.4239 0.369838 17.4763 0.450569C17.5287 0.531301 17.5489 0.62875 17.533 0.723675C17.5171 0.8186 17.4661 0.904101 17.3902 0.963294C17.3735 0.97641 15.6787 2.31103 13.7282 4.7556C11.9331 7.00522 9.54691 10.6837 8.37272 15.4325C8.3521 15.516 8.30412 15.5901 8.23645 15.6431C8.16878 15.696 8.08532 15.7248 7.99938 15.7248L7.99949 15.7247Z"
                          fill="currentColor"
                        />
                      </svg>
                      Exclusive experiences that go beyond traditional travel.
                    </li>
                    <li className="fade-anim" data-delay="0.60">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                      >
                        <path
                          d="M7.99949 15.7247C7.94644 15.7247 7.89396 15.7137 7.84536 15.6924C7.79675 15.6712 7.75308 15.6401 7.71707 15.6011L0.102184 7.36399C0.0514209 7.30907 0.0177684 7.24055 0.00534479 7.16681C-0.0070788 7.09306 0.00226539 7.0173 0.0322339 6.94878C0.0622023 6.88026 0.111495 6.82197 0.174079 6.78104C0.236663 6.7401 0.309824 6.7183 0.384607 6.71829H4.04999C4.10502 6.7183 4.15942 6.73011 4.2095 6.75293C4.25958 6.77575 4.30418 6.80904 4.3403 6.85056L6.88522 9.77841C7.16026 9.19049 7.69268 8.21156 8.62699 7.01872C10.0082 5.25526 12.5774 2.66176 16.9729 0.320525C17.0579 0.275283 17.1567 0.263542 17.2499 0.287618C17.3431 0.311694 17.4239 0.369838 17.4763 0.450569C17.5287 0.531301 17.5489 0.62875 17.533 0.723675C17.5171 0.8186 17.4661 0.904101 17.3902 0.963294C17.3735 0.97641 15.6787 2.31103 13.7282 4.7556C11.9331 7.00522 9.54691 10.6837 8.37272 15.4325C8.3521 15.516 8.30412 15.5901 8.23645 15.6431C8.16878 15.696 8.08532 15.7248 7.99938 15.7248L7.99949 15.7247Z"
                          fill="currentColor"
                        />
                      </svg>
                      A dedicated team ensuring your comfort and satisfaction.
                    </li>
                  </ul>
                </div>
                <a href="about.html" className="vs-btn style6 text-capitalize">
                  view more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-0 order-md-1">
            <div
              className="about-thumb fade-anim"
              data-direction="right"
              style={{ height: "500px" }}
            >
              <Image
                src="/img/about/about-thumb.jpg"
                alt="about-thumb"
                width={600}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
