"use client";
import { testimonials } from "@/model";
import React, { useRef } from "react";
import { IoMdStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export const Testimonials: React.FC = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev(); // Go to previous slide
  };

  const handleNext = () => {
    swiperRef.current?.slideNext(); // Go to next slide
  };

  return (
    <section className="vs-tour-package space">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 col-lg-6 col-xxl-5">
            <div className="title-area text-center text-md-start">
              <span className="sec-subtitle fade-anim" data-direction="bottom">
                Our Testimonials
              </span>
              <h2 className="sec-title fade-anim" data-direction="top">
                What Customers Say
              </h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xxl-5">
            <div className="swiper-arrow2 tour-packages-navigation justify-content-center justify-content-md-end">
              <button className="testimonial-packages-prev btn-right" onClick={handlePrev}>
                <svg
                  width="9"
                  height="18"
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.08984 16.92L1.56984 10.4C0.799843 9.62996 0.799843 8.36996 1.56984 7.59996L8.08984 1.07996"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button className="testimonial-packages-next" onClick={handleNext}>
                <svg
                  width="9"
                  height="18"
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.910156 16.92L7.43016 10.4C8.20016 9.62996 8.20016 8.36996 7.43016 7.59996L0.910156 1.07996"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className="col-12 mt-30 mt-md-0 fade-anim"
            data-direction="right"
          >
            <div className="swiper testimonial-package-slider">
              <div className="swiper-wrapper">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={30}
                  slidesPerView={3}
                  pagination={{ clickable: true }}
                  className="custom-swiper"
                  speed={1000}
                  loop
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                  {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div key={item.id} className="swiper-slide">
                        <div className="testimonial-brand-slider-area section-space--inner--120">
                          <div className="card">
                            <div className="card-body">
                              <h4 className="card-title">
                                <svg
                                  height="80px"
                                  width="80px"
                                  version="1.1"
                                  id="Capa_1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 32 32"
                                  fill="#000000"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <g>
                                      <g id="right_x5F_quote">
                                        <g>
                                          <path
                                            style={{ fill: "#f7921f" }}
                                            d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"
                                          ></path>
                                          <path
                                            style={{ fill: "#f7921f" }}
                                            d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"
                                          ></path>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </h4>
                              <div className="template-demo">
                                <p>{item.description}</p>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-sm-10">
                                  <div className="profile">
                                    <h6 className="info-title">{item.name}</h6>
                                    {Array(item.rating)
                                      .fill(0)
                                      .map((v, i) => (
                                        <span key={i}>
                                          <IoMdStar size={20} color="#f7921f" />
                                        </span>
                                      ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
