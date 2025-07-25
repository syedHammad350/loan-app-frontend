import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMoneyCheckAlt, FaChartLine, FaWallet, FaHome } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    icon: <FaMoneyCheckAlt className="text-blue-600 text-4xl mb-4" />,
    title: 'Personal Loans',
    description: 'Quick personal loans for your everyday needs with easy terms and fast approval.',
  },
  {
    icon: <FaWallet className="text-blue-600 text-4xl mb-4" />,
    title: 'Business Loans',
    description: 'Financial support for small and medium businesses to help you grow and scale.',
  },
  {
    icon: <FaChartLine className="text-blue-600 text-4xl mb-4" />,
    title: 'Educational Loans',
    description: 'Secure loans to help you pursue your academic and career goals without financial worry.',
  },
  {
    icon: <FaHome className="text-blue-600 text-4xl mb-4" />,
    title: 'Home Loans',
    description: 'Affordable home financing options to help you buy, build, or renovate your dream house.',
  },
];

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleCardClick = (loanType) => {
    navigate('/loanform', { state: { purpose: loanType } });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          We offer a variety of loan solutions tailored to your needs. Whether you’re looking to grow a business, cover education costs, or buy a home — we’ve got you covered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(service.title)}
              data-aos="zoom-in"
              className="cursor-pointer bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:-rotate-1 transition duration-500 ease-in-out"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-700">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
