"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 * i,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/img/slider/1.jpg",
      subtitle: "make your trip",
      title: "Plan your holiday with us",
      buttons: [
        { text: "Book Now", href: "/contact", className: "filled-btn" },
      ],
    },
    {
      id: 2,
      image: "/img/slider/2.jpg",
      subtitle: "Where Every Detail Matters",
      title: "Expertly Curated Travel Solutions",
      buttons: [
        { text: "Explore", href: "/destinations", className: "filled-btn" },
        { text: "About", href: "/about", className: "border-btn ml-10" },
      ],
    },
    {
      id: 3,
      image: "/img/slider/3.jpg",
      subtitle: "Seamless Stays, Effortless Comfort",
      title: "Your Comfort, Our Priority",
      buttons: [
        { text: "Reserve Now", href: "/contact", className: "filled-btn" },
      ],
    },
  ];

  return (
    <div className="hero-swiper">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        style={{ height: "100%" }}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="carousel-slide"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div className="carousel-content">
                {/* Render animated elements only if this is the active slide */}
                {activeSlide === index ? (
                  <>
                    <motion.span
                      key={`subtitle-${activeSlide}`}
                      className="sec-subtitle text-capitalize mb-2"
                      variants={fadeInUp}
                      initial="hidden"
                      animate="visible"
                      custom={1}
                    >
                      {slide.subtitle}
                    </motion.span>

                    <motion.h2
                      key={`title-${activeSlide}`}
                      className="sec-title text-white-color move-anim"
                      variants={fadeInUp}
                      initial="hidden"
                      animate="visible"
                      custom={2}
                    >
                      {slide.title}
                    </motion.h2>

                    <motion.div
                      key={`buttons-${activeSlide}`}
                      className="button-group"
                      style={
                        slide.buttons.length > 1
                          ? {
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              marginTop: "20px",
                            }
                          : { marginTop: "20px" }
                      }
                      variants={fadeInUp}
                      initial="hidden"
                      animate="visible"
                      custom={3}
                    >
                      {slide.buttons.map((button, i) => (
                        <Link
                          key={i}
                          href={button.href}
                          className={button.className}
                        >
                          {button.text}
                        </Link>
                      ))}
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* Render static content for non-active slides */}
                    <span className="sec-subtitle text-capitalize mb-2">
                      {slide.subtitle}
                    </span>
                    <h2 className="sec-title text-white-color move-anim">
                      {slide.title}
                    </h2>
                    <div
                      className="button-group"
                      style={
                        slide.buttons.length > 1
                          ? {
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              marginTop: "20px",
                            }
                          : { marginTop: "20px" }
                      }
                    >
                      {slide.buttons.map((button, i) => (
                        <Link
                          key={i}
                          href={button.href}
                          className={button.className}
                        >
                          {button.text}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
