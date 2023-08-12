import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-blue px-[10%] text-gray-100 pb-10 pt-20">
      <div className="w-full flex flex-col lg:md:flex-row lg:md:justify-between pb-20">
        <div>
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-2xl lg:md:text-5xl font-bold pb-4"
          >
            JB Locksmith
          </h1>
          <h1 data-aos="fade-up" data-aos-duration="800" className="font-light">
            4843 Marlboro Pike,Capitol Heights, MD 20743
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="py-3 font-light text-sm"
          >
            <span className="flex items-center gap-x-2 py-1">
              <AiOutlineMail />
              <h1>+1202584-6476</h1>
            </span>
            <span className="flex items-center gap-x-2 py-1">
              <FaPhone />
              <h1>support@yourdomain.tld</h1>
            </span>
          </div>
        </div>
        {/* section two */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="max-w-xs  my-3 lg:md:my-0"
        >
          <h1 className="text-2xl font-semibold">Company</h1>
          <div className="py-1 text-light">
            <ul data-aos="fade-up" data-aos-duration="800">
              <li className="my-1">About Us</li>
              <li className="my-1">Our team</li>
              <li className="my-1">New & Article</li>
              <li className="my-1">Legal Notice</li>
            </ul>
          </div>
        </div>
        {/* section three */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="max-w-xs  my-3 lg:md:my-0"
        >
          <h1 className="text-2xl font-semibold">Support</h1>
          <div className="py-1 text-light">
            <ul data-aos="fade-up" data-aos-duration="800">
              <li className="my-1">Help center</li>
              <li className="my-1">FAQ</li>
              <li className="my-1">Ticket Support</li>
              <li className="my-1">Contact Us</li>
            </ul>
          </div>
        </div>
        {/* last section */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="max-w-xs my-3 lg:md:my-0"
        >
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-2xl font-semibold"
          >
            Newsletter
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-sm font-light my-1"
          >
            Sign up our newsletter to get updated informations, insight or promo
          </p>
          <input
            placeholder="Email"
            className="w-full bg-gray-600 text-gray-300 bg-opacity-30 outline-none py-2 px-2 my-1"
          />
          <div className="w-full py-1">
            <button className="w-full py-2 text-white bg-green">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-full flex items-center justify-between pt-6 text-xs">
        <div>
          <h1>Copyright © 2022 Keymaster, All rights reserved</h1>
        </div>
        <div>
          <ul className="flex items-center gap-x-3">
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
