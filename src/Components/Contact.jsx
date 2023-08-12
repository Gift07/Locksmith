const Contact = () => {
  return (
    <div className="w-full h-[30rem] relative mt-20 ">
      <div className="w-full absolute">
        <img
          src="home4.jpg"
          alt="home"
          className="w-full h-[30rem] object-cover"
        />
      </div>
      <div className="w-full h-[30rem] absolute z-20 bg-gradient-to-tr from-blue bg-green bg-opacity-30">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1
            data-aos="zoom-in"
            data-aos-duration="800"
            className="text-white font-medium text-base py-2"
          >
            Need more Help
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-duration="900"
            className="text-2xl text-center lg:md:text-4xl font-bold py-2 text-white"
          >
            {`Don't hesitate to contact us for more help.`}
          </h1>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <button className="px-8 py-2  bg-green shadow-lg text-white">
              Contact Help Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
