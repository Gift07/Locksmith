import { BsTools, BsCreditCard, BsKey } from "react-icons/bs";
import { AiFillUnlock, AiOutlineCar } from "react-icons/ai";

const Services = () => {
  const data = [
    {
      icons: <BsTools />,
      title: "Installation & Repair",
      description:
        " Our specialized locksmith team offers a comprehensive range of installation and repair services to ensure your safety",
    },
    {
      icons: <AiFillUnlock />,
      title: "Deadbolt Lock",
      description:
        "Our expertise in deadbolt locks goes beyond the ordinary, offering you a level of protection that you can trust. ",
    },
    {
      icons: <BsCreditCard />,
      title: "Smart Lockouts",
      description:
        "If you find yourself locked out of your smart-enabled space, our expert team is here to provide swift and efficient solutions",
    },
    {
      icons: <BsKey />,
      title: "Key Duplication",
      description:
        "Whether you need extra keys for your home, business, or vehicle, our experts will ensure that you have it",
    },
    {
      icons: <BsKey />,
      title: "Emergency Lockouts",
      description:
        "We specialize in providing efficient emergency lockout solutions ,so that you may regain access to your space quickly ",
    },
    {
      icons: <AiOutlineCar />,
      title: "Garage Locks",
      description:
        "Our specialized garage lock solutions offer you the peace of mind that your valuable possessions and vehicles are protected",
    },
  ];
  return (
    <div className="w-full lg:md:px-[10%] px-4">
      <div>
        <h1
          data-aos="zoom-in"
          data-aos-duration="800"
          className="text-2xl tlg:md:ext-4xl font-bold py-2 "
        >
          What’s included: core features
        </h1>
        <div className="w-full flex items-center">
          <div className="w-full grid lg:md:grid-cols-3 grid-cols-1 place-items-center gap-8 py-10">
            {data.map((item, i) => (
              <div key={i} data-aos="zoom-in" data-aos-duration="1000">
                <div className="bg-green bg-opacity-30 text-green h-14 w-14  flex items-center justify-center text-3xl my-2">
                  {item.icons}
                </div>
                <div>
                  <h1 className="font-semibold text-xl py-2">{item.title}</h1>
                  <p className="text-base text-gray-700 ma-w-xs">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
