import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { PiPhoneCallLight } from "react-icons/pi";
import AuthModal from "./Login";
const NavMenu = () => {
  return (
    <div>
      <div className="flex items-center md:px-24  justify-between flex-wrap gap-4">
        {/* Left Section: Dropdown + Logo */}
        <div className=" flex sm:justify-between items-center gap-4">
          {/* Dropdown */}
          <div className="dropdown fixed  bottom-0 md:relative ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  bg-black/50 hover:bg-black/60 text-white btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-transparent rounded-box w-52 z-10"
            >
              <li>
                <Link to="/flight-list">Flight </Link>
              </li>
              <li>
                <Link to="/pakages"></Link>
              </li>
              <li>
                <Link to="/deals">Deals</Link>
              </li>
              <li>
                <Link to="/hotels">Hotels</Link>
              </li>
              <li>
                <Link to="/bus">Bus</Link>
              </li>
              <li>
                <Link to="/cruise">Cruise</Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
       <Link to="/">  <img
            src="/logo/logo.png"
            className="w-20 md:w-26 h-auto"
            alt="logo"
          /> </Link> 
        </div>

        {/* Right: Action Buttons */}
        <div className="flex md:flex-wrap  md:justify-end gap-1 md:gap-4">
          <div className="dropdown dropdown-center">
            <button
              tabIndex={0}
              role="button"
              className=" bg-black/50 hover:bg-black/70 text-white p-2 md:px-4 py-1.5 rounded-2xl flex items-center text-sm transition"
            >
              <VscAccount className="md:text-lg mr-2 cursor-pointer" />
              My Account
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content text-white items-center menu bg-transparent  rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li className="flex flex-row items-center space-x-2">
                <img src="/Images/profile.png" alt="img" className="w-14" />
                <Link to="/login" className="text-gray-500 p-0">
                  MY BOOKINGS ›
                </Link>
              </li>

              <li>
                <AuthModal />
              </li>
              <li>
                <Link className="btn  bg-gray-400 w-30 m-1 h-8 hover:bg-gray-500 text-white">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black p-2 md:px-4 py-1.5 rounded-2xl flex items-center text-sm transition">
            <img
              src="https://dpauls.com/_nuxt/img/gift-card-1.23264a8.png"
              alt="Gift Card"
              className="w-6 h-6 mr-2"
            />
            Gift Card
          </button>

          <button className="bg-black/50 hover:bg-black/70 text-white px-4 py-1.5 rounded-2xl flex items-center text-sm transition">
            <PiPhoneCallLight className="text-lg mr-2" />
            Call Us
          </button>
        </div>
      </div>
      <div className="fixed top-50 right-1.5 bg-red-500 text-xl"></div>
    </div>
  );
};

export default NavMenu;
