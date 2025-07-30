import axios from 'axios';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Contact Form Submitted:', formData);
    try {
      const res = await axios.post(`${import.meta.env.VITE_URL}/pia/contact`, formData);
      // console.log(res);
     
      if (res.status === 200) {
              // 
              toast.success("📨 Message sent successfully!");
            }

   
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

    } catch (error) {
     toast.error(error.message || '❌ Message send failed.')
     
     
      
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Email:</span> support@loanapp.com
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Phone:</span> +92-300-1234567
          </p>
          <p className="text-gray-600 mb-6">
            <span className="font-medium">Address:</span> 123 Main Street, Lahore, Pakistan
          </p>
        </div>
      </div>
    </div>
  );
};
