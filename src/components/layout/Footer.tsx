import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#ECF3F7]">
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="lg:flex lg:justify-between">
          <div className="mb-6 mt-8 md:mb-0 lg:w-96">
            <Link to="/" className="flex items-center">
              <img src={logo} className="h-8 me-3" alt="MechKeyMart Logo" />
            </Link>
            <div className="mt-4 px-3 lg:pe-12">
              <h3 className="text-lg font-semibold text-slate-700 mb-2">
                The Top Spot for Mechanical Keyboards
              </h3>
              <p className="text-justify text-gray-500">
                Welcome to MechKeyMart, the premier online store dedicated
                exclusively to mechanical keyboards. At MechKeyMart, we are
                passionate about delivering the best typing experience to
                enthusiasts and professionals alike.
              </p>
            </div>
          </div>
          <div className="grow grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Company
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/brand-center" className="hover:underline">
                    Brand Center
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Help Center
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link
                    to="https://discord.gg/yourdiscord"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord Server
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="https://twitter.com/yourtwitter"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="https://facebook.com/yourfacebook"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/licensing" className="hover:underline">
                    Licensing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/terms" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Download
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    iOS
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Android
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Windows
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    MacOS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-2">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            {new Date().getFullYear()}
            <Link to="/" className="hover:underline ms-2">
              MechKeyMart™
            </Link>
            . &nbsp; &nbsp; All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              to="https://facebook.com/yourfacebook"
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              to="https://discord.gg/yourdiscord"
              className="text-gray-500 hover:text-gray-900 ms-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm7.158 0a1.931 1.931 0 0 1-1.8-2.045 1.919 1.919 0 0 1 1.8-2.047 1.93 1.93 0 0 1 1.8 2.047 1.941 1.941 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord server</span>
            </Link>
            <Link
              to="https://twitter.com/yourtwitter"
              className="text-gray-500 hover:text-gray-900 ms-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M19.244 3.768a7.716 7.716 0 0 1-2.211.605A3.836 3.836 0 0 0 18.694 2.1a7.73 7.73 0 0 1-2.448.926 3.837 3.837 0 0 0-6.558 3.501c0 .298.032.588.094.867A10.885 10.885 0 0 1 1.39 2.874a3.831 3.831 0 0 0 1.189 5.116A3.821 3.821 0 0 1 .775 7.46v.048a3.837 3.837 0 0 0 3.072 3.758 3.83 3.83 0 0 1-1.017.137c-.248 0-.491-.024-.727-.07a3.837 3.837 0 0 0 3.578 2.662A7.695 7.695 0 0 1 0 14.391a10.827 10.827 0 0 0 5.843 1.71c7.004 0 10.837-5.797 10.837-10.825 0-.165-.004-.329-.01-.492A7.693 7.693 0 0 0 20 4.236a7.759 7.759 0 0 1-2.756.755 3.852 3.852 0 0 0 1.113-2.124Z" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
