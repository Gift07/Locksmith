import { RiCheckFill } from "react-icons/ri";

const Protection = () => {
  return (
    <div className="w-full lg:md:px-[10%] px-4 py-48 lg:md:pb-80 pb-28">
      <div className="w-full flex flex-col lg:md:flex-row lg:md:items-start">
        <div className="lg:md:w-1/2 w-full relative">
          <div data-aos="zoom-in" data-aos-duration="1000" className="dotted" />
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="absolute top-6 left-6 lg:md:top-12 lg:md:left-12"
          >
            <img
              data-aos="zoom-in"
              data-aos-duration="1100"
              src="addinglock.jpg"
              alt="addinglock"
              className="h-[27rem] w-full object-cover"
            />
            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              className="absolute lg:md:-bottom-8 lg:md:-right- right-2 -bottom-6"
            >
              <div className="lg:md:h-36 lg:md:w-48 h-28 w-36 bg-white shadow-lg text-2xl lg:md:text-5xl font-bold text-green flex flex-col items-center justify-center">
                <h1>25+</h1>
                <h1 className="text-gray-600 text-sm text-center whitespace-nowrap">
                  Years or experience
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:md:w-1/2 w-full">
          <div className="lg:md:pt-10 pt-72">
            <h1
              data-aos="fade-left"
              data-aos-duration="1200"
              className="font-medium text-base text-green"
            >
              Who we are
            </h1>
            <h1
              data-aos="fade-left"
              data-aos-duration="1200"
              className=" text-2xl lg:md:text-4xl font-bold py-2"
            >
              We’re a tool for your
              <br /> family’s protection
            </h1>
            <p
              data-aos="fade-left"
              data-aos-duration="1200"
              className="max-w-lg pb-2 text-gray-500"
            >
              Ac suspendisse sem efficitur enim montes ultricies maecenas
              praesent in non lobortis. Vel suspendisse molestie cras est
              vulputate sed. Pretium placerat enim velit hendrerit euismod.
            </p>
            <div className="max-w-md flex items-start justify-between py-3">
              <div>
                <span
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  className="flex items-center gap-x-2 text-green text-lg"
                >
                  <RiCheckFill />
                  <h1 className="text-gray-600 text-base">Proffessional</h1>
                </span>
                <span
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  className="flex items-center gap-x-2 text-green text-lg"
                >
                  <RiCheckFill />
                  <h1 className="text-gray-600 text-base">Certified</h1>
                </span>
                <span
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  className="flex items-center gap-x-2 text-green text-lg"
                >
                  <RiCheckFill />
                  <h1 className="text-gray-600 text-base">Commitments</h1>
                </span>
              </div>
              <div>
                <span
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  className="flex items-center gap-x-2 text-green text-lg"
                >
                  <RiCheckFill />
                  <h1 className="text-gray-600 text-base">Top Quality</h1>
                </span>
                <span
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  className="flex items-center gap-x-2 text-green text-lg"
                >
                  <RiCheckFill />
                  <h1 className="text-gray-600 text-base">Expartise</h1>
                </span>
                <span
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  className="flex items-center gap-x-2 text-green text-lg"
                >
                  <RiCheckFill />
                  <h1 className="text-gray-600 text-base">Support</h1>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protection;
