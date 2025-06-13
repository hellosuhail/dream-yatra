import React, { useState } from 'react';
import axios from 'axios';

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const toggleModal = () => setIsOpen(!isOpen);
  const toggleForm = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? '/api/login' : '/api/signup';
    try {
      const response = await axios.post(url, formData);
      console.log(response.data);
      // Handle success (e.g., close modal, redirect, show success message)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={toggleModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        {isLogin ? 'Login' : 'Sign Up'}
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className=" absolute bg-black bg-opacity-50 flex justify-center items-center z-50">
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

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              )}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
              <button
                type="submit"
                className={`w-full py-2 rounded ${
                  isLogin ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
                } hover:bg-opacity-80 transition duration-300`}
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
