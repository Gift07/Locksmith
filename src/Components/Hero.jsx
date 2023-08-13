// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { BsArrowUpRight } from "react-icons/bs";

// import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
  const data = [
    {
      title: "Reliable Locksmith",
      description:
        "Elevate your home's protection with our advanced lock systems and expert guidance",
    },
    {
      title: "Professional",
      description:
        "Our team of skilled professionals is here to deliver reliable solutions",
    },
    {
      title: "Top Quality",
      description: "Ultrices placerat amet mus ex adipiscing metus",
    },
  ];
  const phoneNumber = "+12025846476";
  return (
    <div className="w-full h-[50rem] relative">
      <div className="w-full h-full absolute">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect={"fade"}
          speed={2000}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          className="w-full h-full"
        >
          <SwiperSlide className=" h-full">
            <img src="home1.jpg" alt="home" />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img src="home2.jpg" alt="home" />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img src="home3.jpg" alt="home" />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img src="home4.jpg" alt="home" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full h-full absolute z-20 bg-gradient-to-b from-transparent to-blue lg:md:px-[10%] px-4 pt-24 lg:md:pt-48">
        <div className="text-white">
          <h1
            data-aos="zoom-in"
            data-aos-duration="900"
            className="font-bold text-lg"
          >
            Welcome to keymaster
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="font-bold text-3xl lg:md:text-6xl py-2"
          >
            Keeps your lives
            <br /> safe and secure
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1100"
            className="max-w-xl py-2 text-sm lg:md:text-base"
          >
            {`Our dedicated team of skilled locksmiths is committed to providing
            top-notch services that protect what matters most to you. Whether
            it's your home, business, or vehicle, we understand the importance
            of security and are here to offer reliable solutions that grant you
            peace of mind.`}
          </p>
          <h1
            data-aos="zoom-in"
            data-aos-duration="900"
            className="font-bold text-lg"
          >
            Locked out?
          </h1>
          <div data-aos="zoom-in" data-aos-duration="1200" className="py-2">
            <a href={`tel:${phoneNumber}`}>
              <button className="py-2 px-12 bg-green text-white">
                Call Us Now
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute w-full lg:md:h-40 -bottom-28 lg:md:-bottom-20 z-30">
        <div
          data-aos="zoom-in"
          data-aos-duration="900"
          className="w-full flex flex-col lg:md:flex-row lg:md:items-center lg:md:justify-center lg:md:gap-x-6 px-4 lg:md:px-0"
        >
          {data.map((item, i) => (
            <div
              key={i}
              data-aos="fade-right"
              data-aos-duration="1200"
              className="lg:md:w-[29rem] w-full lg:md:h-44 h-36 bg-white shadow-lg z-40 flex items-center justify-between px-3 my-3 lg:md:my-0"
            >
              <div>
                <h1 className=" text-xl lg:md:text-2xl font-semibold py-2">
                  {item.title}
                </h1>
                <p className="text-gray-700 max-w-[15rem]">
                  {item.description}
                </p>
              </div>
              <div className="text-4xl text-green">
                <BsArrowUpRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
