import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider_img1 from "../assets/img/paramid.jpeg";
import slider_img2 from "../assets/img/8.jpg";
import slider_img3 from "../assets/img/banner3.jpeg";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import TypingEffect from "react-typing-effect";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 500)}s`;
  };
  return (
    <div>
      <Swiper
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img className="opacity-55" src={slider_img1} alt="" />
            <div className="absolute hidden md:block opacity-100  ml-32 z-10 md:top-[40%] w-3/6 text-left  bottom-0 ">
              <Fade direction="down">
                <h1 className="lg:text-6xl font-Garamond md:text-5xl text-left font-bold text-black">
                  Historical Artifacts
                  <br />{" "}
                  <span className="text-[#834d07a0] font-agu font-light">
                    <TypingEffect
                      text={[
                        "Tracker",
                        "Preserving the Past",
                        "Managing the Present",
                      ]}
                      speed={500}
                      eraseDelay={100}
                      eraseSpeed={500}
                      typingDelay={500}
                      cursor="|"
                    ></TypingEffect>
                  </span>
                </h1>

                <p className="text-lg my-4 font-Garamond text-blue-950 font-medium">
                  A Historical Artifacts Tracker is a digital system designed to
                  manage and monitor artifacts, providing detailed records and
                  insights into their history, location, condition, and
                  provenance.
                </p>

                <Link
                  to="/all-artifacts"
                  className="p-3 inline-flex items-center gap-3 hover:bg-transparent hover:border-2 border-red-600 hover:text-red-600 text-lg font-semibold text-primary font-agu rounded-full px-12 bg-[#a86104] hover:bg-[#F4F3F0]"
                >
                  Sec All Artifacts{" "}
                  <span className="text-xl text-white hover:text-red-500 hover:text-2xl">
                    <FaArrowCircleRight />
                  </span>
                </Link>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="opacity-55" src={slider_img3} alt="" />
            <div className="absolute hidden md:block opacity-100  ml-32 z-10 md:top-[40%] w-3/6 text-left  bottom-0 ">
              <Fade direction="down">
                <h1 className="lg:text-6xl font-Garamond md:text-5xl text-left font-bold text-black">
                  Historical Artifacts
                  <br />{" "}
                  <span className="text-[#834d07a0] font-agu font-light">
                    <TypingEffect
                      text={[
                        "Tracker",
                        "Preserving the Past",
                        "Managing the Present",
                      ]}
                      speed={500}
                      eraseDelay={100}
                      eraseSpeed={500}
                      typingDelay={500}
                      cursor="|"
                    ></TypingEffect>
                  </span>
                </h1>

                <p className="text-lg my-4 text-blue-950 font-medium">
                  A Historical Artifacts Tracker is a digital system designed to
                  manage and monitor artifacts, providing detailed records and
                  insights into their history, location, condition, and
                  provenance.
                </p>

                <Link
                  to="/all-artifacts"
                  className="p-3 inline-flex items-center gap-3 hover:bg-transparent hover:border-2 border-red-600 hover:text-red-600 text-lg font-semibold text-primary font-agu rounded-full px-12 bg-[#a86104] hover:bg-[#F4F3F0]"
                >
                  Sec All Artifacts{" "}
                  <span className="text-xl text-white hover:text-red-500 hover:text-2xl">
                    <FaArrowCircleRight />
                  </span>
                </Link>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="opacity-55" src={slider_img2} alt="" />
            <div className="absolute hidden md:block opacity-100  ml-32 z-10 md:top-[40%] w-3/6 text-left  bottom-0 ">
              <Fade direction="down">
                <h1 className="lg:text-6xl font-Garamond md:text-5xl text-left font-bold text-black">
                  Historical Artifacts
                  <br />{" "}
                  <span className="text-[#834d07a0] font-agu font-light">
                    <TypingEffect
                      text={[
                        "Tracker",
                        "Preserving the Past",
                        "Managing the Present",
                      ]}
                      speed={500}
                      eraseDelay={100}
                      eraseSpeed={500}
                      typingDelay={500}
                      cursor="|"
                    ></TypingEffect>
                  </span>
                </h1>

                <p className="text-lg my-4 text-blue-950 font-medium">
                  A Historical Artifacts Tracker is a digital system designed to
                  manage and monitor artifacts, providing detailed records and
                  insights into their history, location, condition, and
                  provenance.
                </p>

                <Link
                  to="/all-artifacts"
                  className="p-3 inline-flex items-center gap-3 hover:bg-transparent hover:border-2 border-red-600 hover:text-red-600 text-lg font-semibold text-primary font-agu rounded-full px-12 bg-[#a86104] hover:bg-[#F4F3F0]"
                >
                  Sec All Artifacts{" "}
                  <span className="text-xl text-white hover:text-red-500 hover:text-2xl">
                    <FaArrowCircleRight />
                  </span>
                </Link>
              </Fade>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
