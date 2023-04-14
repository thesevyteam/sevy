import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-10 pb-32 lg:pb-10">
      <div className="container mx-auto screen-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sevy</h3>
            <p className="text-white text-opacity-75">
              Location-based handyman services finder.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white text-opacity-75">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-75">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-75">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-white text-opacity-75">
                  thesevyteam@gmail.com
                </span>
              </li>
              <li>
                <span className="text-white text-opacity-75">
                  +233 249 555 935
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white">
                <FaFacebookF style={{ width: 16, height: 16 }} />
              </a>
              <a href="#" className="text-white">
                <FaTwitter style={{ width: 16, height: 16 }} />
              </a>
              <a href="#" className="text-white">
                <FaInstagram style={{ width: 16, height: 16 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-primary-text border-opacity-20 pt-8">
        <p className="text-center text-white text-opacity-75">
          &copy; {new Date().getFullYear()} Sevy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
