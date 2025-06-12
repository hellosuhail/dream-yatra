import React, { useState } from 'react';

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // true = Login, false = Sign Up

  const toggleModal = () => setIsOpen(!isOpen);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div>
      {/* Trigger Button */}
      <button onClick={toggleModal} className="px-2 py-1 bg-blue-600 w-30 text-white rounded">
        {isLogin ? 'Login' : 'Sign Up'}
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Modal Container */}
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>

            {/* Toggle Links */}
            <div className="flex justify-center mb-6">
              <button
                className={`px-4 py-2 ${isLogin ? 'font-bold border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`px-4 py-2 ${!isLogin ? 'font-bold border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>

           
            {isLogin ? (
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Login
                </button>
              </form>
            ) : (
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
                <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
