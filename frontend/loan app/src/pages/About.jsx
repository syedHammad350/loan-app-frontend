import React from "react";

const About = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="w-full bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About LoanApp</h1>
        <p className="text-gray-700 text-lg mb-6">
          LoanApp is your trusted financial companion, offering quick and secure loan solutions for
          individuals and businesses. Whether it's a personal emergency, education, or business
          growth, we're here to help you get the funding you need — safely and simply.
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-blue-800">💡 Our Mission</h2>
            <p className="text-gray-600">
              To make loan access easy, transparent, and available to everyone, regardless of their background or credit history.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-800">🔒 Secure & Reliable</h2>
            <p className="text-gray-600">
              Your data is protected with end-to-end encryption, and we work only with verified lending partners. We take privacy and security seriously.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-800">🚀 Fast Approvals</h2>
            <p className="text-gray-600">
              Our application process is simple and digital. Most loan requests are processed within 24 hours.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-800">📞 Customer Support</h2>
            <p className="text-gray-600">
              Have questions? Reach out to us anytime at <strong>support@loanapp.com</strong> or call us at <strong>+91-12345-67890</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
