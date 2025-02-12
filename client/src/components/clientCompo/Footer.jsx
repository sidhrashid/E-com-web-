import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" z-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400 text-sm pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-wrap justify-center lg:justify-between w-full max-w-5xl gap-8 mb-8">
          {/* Support Section */}
          <div className="flex-1 min-w-[200px]  space-y-2">
            <h4 className="text-lg font-semibold text-white border-b-2 border-blue-500 inline-block pb-2">
              Support
            </h4>
            <p></p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div className="flex-1 min-w-[200px]  space-y-2">
            <h4 className="text-lg font-semibold text-white border-b-2 border-blue-500 inline-block pb-2">
              Account
            </h4>
            <ul className="space-y-1">
              <li>
                <Link to="#" className="hover:text-blue-400">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="flex-1 min-w-[200px]  space-y-2">
            <h4 className="text-lg font-semibold text-white border-b-2 border-blue-500 inline-block pb-2">
              Quick Links
            </h4>
            <ul className="space-y-1">
              <li>
                <Link to="#" className="hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex-1 min-w-[200px]   space-y-2">
            <h4 className="text-lg font-semibold text-white border-b-2 border-blue-500 inline-block pb-2">
              Social Media Links
            </h4>
            <ul className="space-y-1  flex gap-x-9 items-center">
              <li>
                <NavLink
                  to="https://www.facebook.com/"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://x.com/"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://github.com/sidhrashid"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  <i className="fab fa-github text-xl"></i>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://in.linkedin.com/"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-8 text-center w-full">
          <p>&copy; 2025 Exclusive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
