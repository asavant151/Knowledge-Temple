import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Parallax, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/parallax";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperSlider = () => {
  const slides = [
    {
      id: 1,
      title: "State-of-the-Art Library",
      description: "Find your perfect course & grow your skill. Investing in Knowledge and Your Future.",
      image: "../assets/images/college_students.avif",
      overlayColor: "rgba(30, 58, 138, 0.6)"
    },
    {
      id: 2,
      title: "Boost Your Knowledge with KnowledgeTemple",
      description: "Learn from anywhere around the globe with us. Develop Skills from best source.",
      image: "../assets/images/digital_learning.jpg",
      overlayColor: "rgba(15, 118, 110, 0.6)"
    },
    {
      id: 3,
      title: "Real Students, Real Results",
      description: "Increase engagement with original content.",
      image: "../assets/images/extra_carri.jpg",
      overlayColor: "rgba(124, 58, 237, 0.6)"
    },
  ];

  return (
    <div className="relative w-full h-[80vh] max-h-[1050px] overflow-hidden rounded-xl shadow-2xl">
      <Swiper
        speed={1000}
        parallax={true}
        effect="fade"
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) => {
            return `<span class="${className} bg-white w-3 h-3 opacity-70 hover:opacity-100 transition-all duration-300"></span>`;
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Autoplay, EffectFade, Parallax, Pagination, Navigation]}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image with Parallax Effect */}
              <div 
                className="swiper-parallax-bg"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'absolute',
                  width: '120%',
                  height: '120%',
                  left: '-10%',
                  top: '-10%',
                  willChange: 'transform',
                }}
                data-swiper-parallax="-30%"
              />
              
              {/* Colored Overlay */}
              <div 
                className="absolute inset-0"
                style={{ backgroundColor: slide.overlayColor }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              
              {/* Content Container */}
              <div className="relative h-full flex items-center justify-center text-center px-4">
                <div 
                  className="text-white max-w-4xl mx-auto px-8 py-12 backdrop-blur-sm bg-black/20 rounded-xl"
                  data-swiper-parallax-y="-100"
                >
                  <h2 
                    className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn tracking-tight"
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax-duration="800"
                  >
                    {slide.title}
                  </h2>
                  <p 
                    className="text-xl md:text-2xl mb-10 animate-fadeIn delay-100 leading-relaxed max-w-2xl mx-auto"
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax-duration="1000"
                    data-swiper-parallax-delay="200"
                  >
                    {slide.description}
                  </p>
                  <div 
                    className="animate-fadeIn delay-200"
                    data-swiper-parallax-opacity="0"
                    data-swiper-parallax-duration="1200"
                    data-swiper-parallax-delay="400"
                  >
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Explore Courses
                      <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 after:text-white after:text-2xl hover:after:opacity-100 after:opacity-70"></div>
        <div className="swiper-button-next rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 after:text-white after:text-2xl hover:after:opacity-100 after:opacity-70"></div>
      </Swiper>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
        <div className="swiper-progress-bar h-full bg-white/80 transition-all duration-1000 ease-linear"></div>
      </div>
    </div>
  );
};

export default SwiperSlider;