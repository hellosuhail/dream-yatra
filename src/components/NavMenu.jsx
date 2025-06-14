import React, { useRef, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { IoBusOutline } from "react-icons/io5";
import { LuSmartphoneCharging } from "react-icons/lu";
import { BiSolidSchool } from "react-icons/bi";
import { RiCactusLine, RiMailSendLine, RiRemoteControl2Line } from "react-icons/ri";
import { MdCardTravel } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";
import { FaHandshake } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FaHandHolding } from "react-icons/fa";
import { LuShip } from "react-icons/lu";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { PiPhoneCallLight } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import AuthModal from "./Login";
const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar on outside click

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  const menu = [
    { name: "Home", path:"/",icon: <IoHomeOutline/>},
    { name: "Flight", path: "/" , icon: <PiAirplaneTakeoffLight/>  },
    { name: "Packages", path: "/pakages" , icon:<MdCardTravel/>},
    { name: "Deals", path: "/deals" , icon:<LuSmartphoneCharging/> },
    { name: "Hotels", path: "/hotels" , icon:<BiSolidSchool/> },
    { name: "Bus", path: "/bus" ,icon:<IoBusOutline/>},
    { name: "Cruise", path: "/cruise" , icon:<LuShip/>},
    { name: "Gift Card", path: "/giftcard" , icon:<GoGift/>},
    { name: "My Booking", path: "/mybooking" , icon:<IoBookOutline/>},
    { name: "Make Payment", path: "/makepayment" , icon:<CiBank/>},
    { name: "Bank Account Details", path: "/bankaccound" , icon:<FaHandHolding/>},
    { name: "DreamViewer Offers & Deals", path: "/offers&deals" ,  icon:<GoGift/>},
    {name:"Travel deals", path:"/deals", icon:<LuSmartphoneCharging/>},
    {name: "Send  Enquiry", path:"/enquiry" , icon:<RiMailSendLine/>},
    { name: "Contact Us", path: "/contact", icon:<RiCactusLine/>},
    {name:"About us" , path:"/about", icon:<FaUsers/>},
    {name:"Feedback" , path:"/feedback" , icon : <RiMailSendLine/>},
    {name:"Visa Information" , path:"/visa-information", icon: <CiCircleInfo/>},
    {name:"Terms And Conditions", path:"/terms-and-conditions", icon:<FaHandshake/>}
  ];
  return (
    <div>
      <div className="flex items-center md:px-24  justify-between flex-wrap gap-4">
        {/* Left Section: Dropdown + Logo */}
        <div className=" flex sm:justify-between items-center gap-4">
          {/* Dropdown */}
          {/* Toggle Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative md:top-0  btn btn-circle btn-ghost md:hover:bg-black/60 md:bg-black/50 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </button>

          {/* Sidebar */}
          {isOpen && (
            <aside
              ref={sidebarRef}
              className="fixed left-0 top-0 h-full z-40 flex flex-col items-start pb-6  bg-black shadow-md transition-all duration-300 w-64 overflow-auto"
            >
              <div className="w-full p-4 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn btn-sm btn-ghost"
                >
                  ✕
                </button>
              </div>

              <ul className="menu p-2 text-white  w-full">
                <li className="mb-2 flex flex-col justify-between">
                  {/* <img src="/Images/profile.png" alt="profile" className="w-10"/> */}
                  <button className="text-xl font-bold">Hello Guest</button>
                </li>
                {menu.map((item, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      to={item.path}
                      className="hover:bg-gray-100 hover:text-black rounded px-3 py-2 flex"
                    >
                      {item.icon}{item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
          <div className="md:hidden fixed bottom-0 w-full bg-white flex justify-around px-3 py-2 shadow-md">
            <button className="flex flex-col items-center text-gray-700 hover:text-black">
              <VscAccount className="text-xl" />
              <span className="text-xs">Account</span>
            </button>

            <button className="flex flex-col items-center text-gray-700 hover:text-black">
              <FiPhoneCall className="text-xl" />
              <span className="text-xs">Call</span>
            </button>

            <button className="flex flex-col items-center text-gray-700 hover:text-black">
              <TfiEmail className="text-xl" />
              <span className="text-xs">Email</span>
            </button>
          </div>

          {/* Logo */}

          <img
            src="/logo/logo.png"
            className="w-20 md:w-26 h-auto"
            alt="logo"
          />
        </div>

        {/* Right: Action Buttons */}
        <div className="flex md:flex-wrap w-full md:w-auto justify-center  md:justify-end gap-1 md:gap-4">
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
          <div className="dropdown dropdown-bottom dropdown-center">
            <button
              tabIndex={0}
              role="button"
              className="bg-yellow-400 hover:bg-yellow-500 text-black p-2 md:px-4 py-1.5 rounded-2xl flex items-center text-sm transition"
            >
              <img
                src="https://dpauls.com/_nuxt/img/gift-card-1.23264a8.png"
                alt="Gift Card"
                className="w-6 h-6 mr-2"
              />
              Gift Card
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li className=" border-b-1 border-gray-200 text-md text-gray-500">
                <Link to="/giftcard">Buy Gift Card ›</Link>
              </li>
              <li className=" border-b-1 border-gray-200 text-md text-gray-500">
                <Link to="/">Recharge Gift Card ›</Link>
              </li>
              <li className=" border-b-1 border-gray-200 text-md text-gray-500">
                <Link to="/">Check Balance ›</Link>
              </li>
              <li className=" border-b-1 border-gray-200 text-md text-gray-500">
                <Link to="/">How to Redeem ›</Link>
              </li>
              <li className=" border-b-1 border-gray-200 text-md text-gray-500">
                <Link to="/">Terms & Conditions ›</Link>
              </li>
            </ul>
          </div>
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="bg-black/50 absolute md:relative right-6 top-8 md:top-0 md:right-0  hover:bg-black/70 text-white px-4 py-4 md:py-1.5 md:not-visited:rounded-2xl rounded-4xl  md:flex items-center text-sm transition"
          >
            <PiPhoneCallLight className="md:text-lg md:mr-2 text-xl " />
            <span className="hidden md:flex"> Call Us</span>
          </button>
        </div>
      </div>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-gray-200">
          <h3 className="font-bold text-lg border-1 border-gray-100">
            We'd love to hear from you!
          </h3>
          <div className="flex justify-between">
            <div className="m-2">
              <p className="pb-4 text-lg text-accent">Call us on these numbers</p>
              <p className="text-gray-500">999 999 9999</p>
              <p className="text-gray-500">888 888 8888</p>
              <p className="pt-4 text-lg text-accent">Email</p>
              <p>admin@gamil.com</p>
            </div>
            <div className="w-30">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKf1rU4EgCuVeDLodVCvZSMbsJ_0xb_qfYyaNxmyetOiaks6Kka8n762xlp9okQ3fR2uM&usqp=CAU" alt="img"  
              className="w-full"
              />
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default NavMenu;
