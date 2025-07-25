import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Applyforloan = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    cnic: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    loanAmount: '',
    purpose: location.state?.purpose || '',
    employmentStatus: '',
    monthlyIncome: '',
    nationality: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:7822/ipa/form', formData);

      if (response.status === 200 || response.status === 201) {
        toast.success('Form submitted successfully!', { position: 'top-right' });
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Form submission failed.', {
        position: 'top-right'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-700">Loan Application Form</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Fields (same as before)... */}
          {/* Full Name */}
          <div>
            <label className="block text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* CNIC */}
          <div>
            <label className="block text-gray-600 mb-1">CNIC Number</label>
            <input
              type="text"
              name="cnic"
              onChange={handleChange}
              placeholder="XXXXX-XXXXXXX-X"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-gray-600 mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-600 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              placeholder="03XX-XXXXXXX"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-600 mb-1">Address</label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-600 mb-1">City</label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Loan Amount */}
          <div>
            <label className="block text-gray-600 mb-1">Loan Amount (PKR)</label>
            <input
              type="number"
              name="loanAmount"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Purpose */}
          <div>
            <label className="block text-gray-600 mb-1">Purpose of Loan</label>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Employment Status */}
          <div>
            <label className="block text-gray-600 mb-1">Employment Status</label>
            <select
              name="employmentStatus"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select</option>
              <option value="employed">Employed</option>
              <option value="self-employed">Self-Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="student">Student</option>
            </select>
          </div>

          {/* Monthly Income */}
          <div>
            <label className="block text-gray-600 mb-1">Monthly Income (PKR)</label>
            <input
              type="number"
              name="monthlyIncome"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Nationality */}
          <div>
            <label className="block text-gray-600 mb-1">Nationality</label>
            <input
              type="text"
              name="nationality"
              onChange={handleChange}
              placeholder="e.g. Pakistani"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition duration-200"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
