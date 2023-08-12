import { IoDiamondOutline, IoReceiptOutline } from "react-icons/io5";
import { BiCertification } from "react-icons/bi";
import { SlSupport } from "react-icons/sl";

const Security = () => {
  const data = [
    {
      icon: <IoDiamondOutline />,
      title: "Use Top Quality Product",
      description:
        "we redefine locksmith services, delivering unparalleled expertise and dedication to ensure your safe",
    },
    {
      icon: <BiCertification />,
      title: "Certified Technician",
      description:
        "Our certified technicians are here to provide locksmith services that exceed expectations",
    },
    {
      icon: <IoReceiptOutline />,
      title: "Free Consultations",
      description:
        "We're proud to offer free consultations, providing you with valuable insights about your security needs",
    },
    {
      icon: <SlSupport />,
      title: "24/7 Support",
      description:
        "Our 24/7 support ensures you're never alone when it comes to your safety, providing unwavering assistance",
    },
  ];
  return (
    <div className="w-full pt-48 pb-20 lg:md:px-[10%] px-4">
      <div className="w-full flex flex-col lg:md:flex-row py-20">
        <div className="lg:md:w-1/2 w-full flex items-center">
          <div>
            <h1
              data-aos="zoom-in"
              data-aos-duration="800"
              className="text-base font-md text-green py-2"
            >
              Why choose Jb Locksmith
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-duration="900"
              className="text-2xl lg:md:text-5xl font-bold py-2"
            >
              No compromises <br />
              with your life’s security
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="max-w-lg text-gray-600 py-2"
            >
              Your Trusted Locksmith Partner, Welcome to JB Locksmith, where
              security is paramount. We take a firm stance against compromises
              when it comes to safeguarding what matters most in your life.
            </p>
          </div>
        </div>
        <div className="lg:md:w-1/2 w-full  flex items-center">
          <div className="w-full grid lg:md:grid-cols-2 grid-cols-1 gap-4">
            {data.map((item, i) => (
              <div
                data-aos="fade-left"
                data-aos-duration="1100"
                key={i}
                className="w-full bg-gray-100 h-40 flex p-2"
              >
                <div className="w-2/6 h-full text-green text-4xl pt-2 pl-2">
                  {item.icon}
                </div>
                <div>
                  <h1 className="text-lg font-semibold py-2 ">{item.title}</h1>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
