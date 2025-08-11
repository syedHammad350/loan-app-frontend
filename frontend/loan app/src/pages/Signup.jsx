import React, { useState } from 'react';
import { logo1 } from '../Images';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [phonNo, setPhon] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      toast.error('Only JPG, JPEG, or PNG files are allowed');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error('Image must be less than 2MB');
      return;
    }

    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!name || !email || !password || !phonNo || !imageFile) {
      toast.error('Please fill all fields');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Enter a valid email');
      return;
    }

    try {
      setIsLoading(true);
      let IMAGEURL = '';

      // Upload image
      const imgForm = new FormData();
      imgForm.append('image', imageFile);

      const uploadRes = await axios.post(`${import.meta.env.VITE_URL}/Api/upload`, imgForm);
      IMAGEURL = uploadRes.data.imageUrl;

      // Signup request
      const res = await axios.post(`${import.meta.env.VITE_URL}/api/signup`, {
        name,
        email,
        password,
        phonNo,
        profileimage: IMAGEURL,
      });

      if (res.status === 201) {
        toast.success('Signup successful!', { position: 'top-right' });
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-[8%] px-4">
    

      <div className="hidden lg:block lg:w-[550px]">
        <img
          className="w-full h-auto max-h-[600px] object-cover"
          src={logo1}
          alt="Signup visual"
        />
      </div>

      <div className="bg-white shadow-md w-full max-w-[500px] rounded-lg p-6 mt-6 lg:mt-0 mx-auto lg:mx-0">
        <h1 className="font-semibold text-green-700 text-4xl text-center mb-6">Signup</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
            className="w-full h-[40px] border-2 p-2 rounded-lg border-black outline-none"
          />

          <input
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[40px] border-2 p-2 rounded-lg border-black outline-none"
          />

          <input
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => setPass(e.target.value)}
            className="w-full h-[40px] border-2 p-2 rounded-lg border-black outline-none"
          />

          <input
            type="text"
            placeholder="Enter your Phone No"
            onChange={(e) => setPhon(e.target.value)}
            className="w-full h-[40px] border-2 p-2 rounded-lg border-black outline-none"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="w-full h-[50px] border-2 p-2 rounded-lg border-black outline-none"
          />

          <p className="text-sm">
            I have an Account{' '}
            <span
              onClick={() => navigate('/login')}
              className="text-blue-500 cursor-pointer"
            >
              Login
            </span>
          </p>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-white h-[40px] rounded-xl transition ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-700 hover:bg-green-800'
            }`}
          >
            {isLoading ? 'Signing up...' : 'Signup'}
          </button>
        </form>
      </div>
    </div>
  );
};
