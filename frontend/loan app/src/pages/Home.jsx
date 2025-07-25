import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-white text-gray-600 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to LoanApp</h1>
          <p className="text-lg md:text-xl mb-6">
            Fast, secure, and reliable loan services for all your personal and business needs.
          </p>
          <Link
            to="/loanform"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-black transition"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose LoanApp?</h2>
          <p className="text-gray-600">Here’s what sets us apart from others</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Quick Approvals</h3>
            <p className="text-gray-600 text-sm">Get approved within hours, not days.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Low Interest Rates</h3>
            <p className="text-gray-600 text-sm">Affordable plans with minimum markup.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">We’re here to help you anytime.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-2">
              “LoanApp helped me get a loan for my startup within 24 hours! Totally recommended.”
            </p>
            <p className="text-blue-600 font-semibold">– Ayesha Khan</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-2">
              “Amazing service and extremely professional team. Best experience!”
            </p>
            <p className="text-blue-600 font-semibold">– Ahmed Raza</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-2">
              “I got my personal loan approved with zero hassle. Thank you LoanApp!”
            </p>
            <p className="text-blue-600 font-semibold">– Syed Ali</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
