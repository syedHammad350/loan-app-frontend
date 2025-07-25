import { FiFacebook, FiTwitter, FiInstagram, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">LoanApp</h2>
          <p className="text-sm text-gray-300">
            Trusted loan solutions for your every need. Safe. Simple. Fast.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-blue-300">Home</Link>
            </li>
            <li>
              <Link to="/loanform" className="hover:text-blue-300">Apply for Loan</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300">About Us</Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-blue-300">Contact</Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-blue-300">Service</Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-300"><FiFacebook /></a>
            <a href="#" className="hover:text-blue-300"><FiTwitter /></a>
            <a href="#" className="hover:text-blue-300"><FiInstagram /></a>
            <a href="mailto:support@loanapp.com" className="hover:text-blue-300"><FiMail /></a>
          </div>
          <p className="mt-4 text-sm text-gray-300">Email: support@loanapp.com</p>
          <p className="text-sm text-gray-300">Phone: +91-12345-67890</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-white pt-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} LoanApp. All rights reserved. <span className="font-semibold">Developed by SYED HAMMAD</span>.
      </div>
    </footer>
  );
};

export default Footer;
