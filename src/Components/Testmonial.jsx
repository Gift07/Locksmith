import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Testmonial = () => {
  return (
    <div className="w-full mb-20 bg-blue lg:md:px-[10%] px-0">
      <div className="w-full flex flex-col lg:md:flex-row">
        <div className="lg:md:w-1/2 w-full lg:md:px-14 px-0">
          <img
            src="home4.jpg"
            alt="image"
            className="w-full h-[30rem] object-cover"
          />
        </div>
        <div className="lg:md:w-1/2 w-full px-4 lg:md:px-0">
          <div className="pb-16 pt-10">
            <h1
              data-aos="zoom-in"
              data-aos-duration="800"
              className="text-green font-medium text-base py-2"
            >
              Testimonial
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-duration="900"
              className="text-2xl lg:md:text-4xl text-white font-bold py-2"
            >
              What they say
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="text-gray-200 py-2"
            >
              Join the ranks of satisfied customers who have chosen us for their
              locksmith needs. Experience our top-quality service firsthand
              contact us today to become another success story.
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1100">
            <Swiper
              modules={[Autoplay]}
              speed={2000}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              className="w-full h-full"
            >
              <SwiperSlide className=" h-full">
                <div>
                  <h1 className="font-semibold lg:md:text-xl text-base text-gray-200 py-2">
                    {`"I was locked out of my house late at night, and JB Locksmith
                     came to the rescue immediately. Their 24/7
                    support is a lifesaver!"`}
                  </h1>
                  <h1 className="text-base text-green font-medium py-2">
                    Jonathan Ward
                  </h1>
                  <h1 className="text-gray-400">Business Manager</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" h-full">
                <div>
                  <h1 className="font-semibold lg:md:text-xl text-base text-gray-200 py-2">
                    {`"Top Quality Locksmith truly lives up to its name. Their
                    service is exceptional, and their technicians are
                    professional and skilled."`}
                  </h1>
                  <h1 className="text-base text-green font-medium py-2">
                    John Doe
                  </h1>
                  <h1 className="text-gray-400">Business Manager</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" h-full">
                <div>
                  <h1 className="font-semibold lg:md:text-xl text-base text-gray-200 py-2">
                    {`"I needed a security upgrade for my business, and JB Locksmith
                   provided tailored solutions that exceeded my
                  expectations."`}
                  </h1>
                  <h1 className="text-base text-green font-medium py-2">
                    Jane Doe
                  </h1>
                  <h1 className="text-gray-400">Accountant</h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
