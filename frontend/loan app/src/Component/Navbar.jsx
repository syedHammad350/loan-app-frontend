import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logo3 } from '../Images';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const tok = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (tok) setToken(tok);
    if (storedUser) setUser(storedUser);
  }, []);

  const userName = user?.name || 'User';
  // const profileImage = user?.profileImage || `https://ui-avatars.com/api/?name=${userName}`;

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate('/login');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative z-50">
      {/* Navbar Header */}
      <div className="bg-green-700 w-full">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-20 w-52 object-contain" src={logo3} alt="Logo" />
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </div>

          {/* Nav + Avatar (Desktop) */}
          <div className="hidden md:flex items-center gap-8 font-bold text-white">
            {/* Nav Links */}
            {/* Nav Links - Centered absolutely */}
            <ul className="hidden md:flex items-center gap-6 text-base font-bold text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <li className="hover:underline cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/service">Service</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/contactus">Contact us</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/loanform">Apply for Loan</Link>
              </li>
            </ul>


            {/* Avatar + Dropdown */}
           <div className="relative ml-auto mr-[100px]">
  <div
    onClick={toggleDropdown}
    className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 shadow-md cursor-pointer"
  >
    <img
      src={user?.profileimage || `https://ui-avatars.com/api/?name=${user?.name || 'User'}`}
      alt="avatar"
      className="w-full h-full object-cover rounded-full"
    />
  </div>

  {showDropdown && (
    <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg py-2 z-50">
      <div className="px-4 py-2 text-sm text-gray-700 font-medium border-b border-gray-200">
        {userName}
      </div>
      <button
        onClick={handleLogout}
        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
      >
        Logout
      </button>
    </div>
  )}
</div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 w-64 h-full bg-green-700 text-white p-6 z-50 transition-transform duration-300 transform translate-x-0">
            <div className="flex justify-end mb-4">
              <FaTimes className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
            </div>

            <ul className="flex flex-col gap-4 font-bold mb-6">
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link>
              </li>
              <li>
                <Link to="/contactus" onClick={() => setMenuOpen(false)}>Contact us</Link>
              </li>
              <li>
                <Link to="/loanform" onClick={() => setMenuOpen(false)}>Apply for Loan</Link>
              </li>
            </ul>

            <div className="flex flex-col items-center mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white p-1 shadow-md">
                <img
                  src={user?.profileimage || `https://ui-avatars.com/api/?name=${user?.name || 'User'}`}
                  alt="avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-sm font-semibold text-white mt-2">{userName}</span>

              <button
                onClick={handleLogout}
                className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
