import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdStar } from "react-icons/io";
import ScrollAnimate from "./ScrollAnimate";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="vs-choose-us overflow-hidden position-relative space-top">
      <Image
        src="/img/icons/plain-sclation-2.png"
        alt=""
        className="choose-us-icon-1 move-item"
        width={80}
        height={80}
      />
      <div className="container">
        <div className="row gx-4 gy-4 gx-xxl-5 overflow-hidden align-items-center">
          <div className="col-lg-6 fade-anim" data-direction="left">
            <div className="choose-us-thumbnail">
              <ScrollAnimate direction="left">
                <Image
                  src="/img/choos-us/choos-us-thumb-1-1.jpg"
                  alt="thumbnail 1"
                  className="w-100"
                  width={600}
                  height={300}
                />
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="title-area mb-4">
              <span
                className="sec-subtitle text-capitalize fade-anim"
                data-direction="top"
              >
                why choose us
              </span>
              <ScrollAnimate direction="down">
                <h2 className="sec-title fade-anim" data-direction="bottom">
                  Explore our adventure <br className="d-none d-xxl-block" />
                  with us
                </h2>
              </ScrollAnimate>
            </div>
            <div className="choose-us-content">
              <h6 className="blockquote-custom mb-0">
                We believe every adventure enriches your life. Discover unique
                travel experiences and explore the world with us.
              </h6>
              <div className="info-area">
                <ScrollAnimate direction="down" bounce={0.5} styles={{ width: '100%' }}>
                  <div className="review-box bg-third-theme-color text-center btn-bounce btn-trigger">
                    <figure className="d-block">
                      <Image
                        src="/img/icons/owl.png"
                        alt="owl"
                        width={80}
                        height={300}
                      />
                    </figure>
                    <ul className="custom-ul stars">
                      {Array(5)
                        .fill(0)
                        .map((v, i) => (
                          <li key={i}>
                            <IoMdStar />
                          </li>
                        ))}
                    </ul>
                    <p className="review-info text-white-color ff-poppins">
                      3k happy review
                    </p>
                    <Link
                      href="#"
                      className="write-review d-block text-capitalize"
                    >
                      write a review
                    </Link>
                  </div>
                </ScrollAnimate>

                <div className="info-list">
                  <div className="info-item">
                    <div className="info-icon">
                      <Image
                        src="/img/icons/choos-us-icon-1.png"
                        alt="choos-us-icon"
                        width={600}
                        height={300}
                      />
                    </div>
                    <div className="info-content">
                      <h5 className="info-title">
                        Your Trusted Travel Partner
                      </h5>
                      <p>
                        Travel with confidence—your safety and satisfaction are
                        our priority.
                      </p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">
                      <Image
                        src="/img/icons/choos-us-icon-2.png"
                        alt="choos-us-icon"
                        width={600}
                        height={300}
                      />
                    </div>
                    <div className="info-content">
                      <h5 className="info-title">Expert Local Guides</h5>
                      <p>
                        Our local guides offer unique insights, making your
                        journey more immersive and memorable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
