const Help = () => {
  const data = [
    {
      title: "Residential",
      image: "home2.jpg",
      description:
        "Securing Homes, Ensuring Peace of Mind: Your Trusted Residential Locksmith",
    },
    {
      title: "Commercial",
      image: "home2.jpg",
      description:
        "Fortifying Businesses, Safeguarding Success: Your Trusted Commercial Locksmith Partner",
    },
    {
      title: "Otomotive",
      image: "home2.jpg",
      description:
        "Unlocking Mobility, Ensuring Convenience: Your Trusted Automotive Locksmith Partner",
    },
  ];
  return (
    <div className="w-full lg:md:h-[48rem] flex h-[70rem] mb-[16rem] lg:md:mb-0">
      <div className="relative w-full">
        <div className="absolute w-full">
          <img
            src="home2.jpg"
            alt="home"
            className="w-full h-[70rem] lg:md:h-[46rem] object-cover"
          />
        </div>
        <div className="absolute z-10 bg-green bg-opacity-30 w-full h-[70rem] lg:md:h-[46rem] lg:md:px-[10%] px-4">
          <div className="w-full h-full z-20 lg:md:pt-40 pt-16">
            <h1
              data-aos="zoom-in"
              data-aos-duration="800"
              className="font-bold text-2xl lg:md:text-4xl text-white py-2"
            >
              We’ll help you defend <br />
              your possessions
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-duration="900"
              className="py-3 text-gray-700 text-base max-w-xl"
            >
              {`At JB Locksmith , we understand the significance of your
              possessions. We're here to provide the expertise you need to
              safeguard what's most important to you.`}
            </p>
            <div data-aos="zoom-in" data-aos-duration="1000" className="py-3">
              <button className="px-8 py-2 bg-green text-white">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-full flex flex-col lg:md:flex-row items-center justify-center lg:md:gap-x-8 lg:md:-bottom-60 -bottom-[29rem] lg:md:pb-20 z-30 px-4">
          {data.map((item, i) => (
            <div
              data-aos="fade-left"
              data-aos-duration="1100"
              key={i}
              className=" h-96 lg:md:h-[28rem] w-full lg:md:w-96 bg-white shadow-lg my-2"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 lg:md:h-[16rem] object-cover"
                />
              </div>
              <div className="w-full p-2">
                <h1 className="text-2xl text-center font-semibold text-green">
                  {item.title}
                </h1>
                <p className="text-center py-2 text-gray-600">
                  {" "}
                  {item.description}
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <button className="bg-green text-white px-8 py-2 shadow">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
