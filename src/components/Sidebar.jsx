import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaPlane,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-[60] bg-white shadow-md text-blue-900 p-2 rounded-full"
      >
        {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50  w-64 bg-white/90 backdrop-blur-lg border-r border-purple-600 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:block`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-extrabold text-blue-900 mb-8">Travel App</h2>
          <nav className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-3 text-gray-800 hover:text-blue-900 hover:bg-purple-600/20 px-4 py-2 rounded-md transition-all"
            >
              <FaHome />
              <span>Home</span>
            </Link>
            <Link
              to="/flight-list"
              className="flex items-center gap-3 text-gray-800 hover:text-blue-900 hover:bg-purple-600/20 px-4 py-2 rounded-md transition-all"
            >
              <FaPlane />
              <span>Flights</span>
            </Link>
            <Link
              to="/profile"
              className="flex items-center gap-3 text-gray-800 hover:text-blue-900 hover:bg-purple-600/20 px-4 py-2 rounded-md transition-all"
            >
              <FaUser />
              <span>Profile</span>
            </Link>
            <Link
              to="/logout"
              className="flex items-center gap-3 text-gray-800 hover:text-blue-900 hover:bg-purple-600/20 px-4 py-2 rounded-md transition-all"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Dark overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
