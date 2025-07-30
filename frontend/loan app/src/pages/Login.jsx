import React, { useState } from 'react';
import { logo1 } from '../Images';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/signup');
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    try {
      setIsLoading(true);

      const response = await axios.post(`${import.meta.env.VITE_URL}/sigin/login`, {
        email: email,
        password: password
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      if (response.status === 200) {
        toast.success('Login successful!', {
          position: "top-right"
        });

        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed. Try again.", {
        position: "top-right"
      });
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
          alt="Login visual"
        />
      </div>

      <div className="bg-white shadow-md w-full max-w-[500px] rounded-lg p-6 mt-6 lg:mt-0 mx-auto lg:mx-0">
        <h1 className="font-semibold text-green-700 text-4xl text-center mb-6">
          Login
        </h1>

        <form onSubmit={handlesubmit} className="space-y-5">
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

          <p className="text-sm">
            I don't have an Account{' '}
            <span
              onClick={navigateToSignup}
              className="text-blue-500 cursor-pointer"
            >
              Signup
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
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};
