import { useState } from "react";
import { FiMenu, FiX, FiHome, FiSettings, FiInfo, FiPhone, FiLogOut } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { Link, Links, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);


  const user = {
    name: "John Doe",
    email: "john@example.com",
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };




  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div
        className={`fixed z-30 md:relative transition-all duration-300
        ${isOpen ? "left-0" : "-left-64"} md:left-0
        w-64 bg-white shadow-lg h-full flex flex-col justify-between`}
      >
        {/* Close Button for Mobile */}
        <div className="flex justify-end md:hidden p-4">
          <button onClick={toggleSidebar}>
            <FiX size={24} />
          </button>
        </div>

        {/* Top Section */}
        <div>
          {/* Avatar and User Info */}
          <div className="flex flex-col items-center justify-center mt-2 mb-4">
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow">
              A
            </div>
            <div className="mt-2 text-center text-gray-700 font-medium text-sm">
              {user.name}
              <div className="text-xs text-gray-500">{user.email}</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-4 space-y-2">
            <Link to={'/'} >
              <button onClick={handleLinkClick} className="flex items-center w-full px-4 py-2 rounded hover:bg-blue-100 text-gray-700">
                <FiHome className="mr-3" /> Home
              </button>
            </Link>
            <Link to={'/service'}>
              <button onClick={handleLinkClick} className="flex items-center w-full px-4 py-2 rounded hover:bg-blue-100 text-gray-700">
                <FiSettings className="mr-3" /> Services
              </button>
            </Link>
            <Link to={'/about'}>
              <button onClick={handleLinkClick} className="flex items-center w-full px-4 py-2 rounded hover:bg-blue-100 text-gray-700">
                <FiInfo className="mr-3" /> About
              </button>
            </Link>
            <Link to={'/contactus'}>
              <button onClick={handleLinkClick} className="flex items-center w-full px-4 py-2 rounded hover:bg-blue-100 text-gray-700">
                <FiPhone className="mr-3" /> Contact Us
              </button>
            </Link>
            <Link to={'/loanform'}>
              <button onClick={handleLinkClick} className="flex items-center w-full px-4 py-2 rounded hover:bg-blue-100 text-gray-700">
                <FiFileText className="mr-3" /> Apply for Loan
              </button>
            </Link>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t">
          <button onClick={handleLinkClick} className="flex items-center w-full px-4 py-2 rounded hover:bg-red-100 text-red-600 font-medium">
            <FiLogOut className="mr-3" /> Logout
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        {/* Header for Mobile */}
        <header className="flex items-center justify-between bg-white p-4 shadow-md md:hidden">
          <button onClick={toggleSidebar}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          {/* <h1 className="text-lg font-semibold text-blue-700">Loan App</h1> */}
        </header>

        {/* Main Content */}
        {/* <main className="p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome to Loan App</h2>
          <p className="text-gray-600">Yahan aapka content ayega.</p>
        </main> */}
      </div>
    </div>
  );
};

export default Sidebar;
