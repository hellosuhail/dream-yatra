import React, { useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({ submitting: false, success: null, error: null });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      setStatus({ submitting: false, success: null, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ submitting: true, success: null, error: null });

    try {
      const response = await fetch('https://your-backend-api.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send message.');

      setStatus({ submitting: false, success: 'Message sent successfully!', error: null });
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    } catch (err) {
      setStatus({ submitting: false, success: null, error: err.message || 'Something went wrong.' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-sky-600 h-12 flex items-center px-10 text-white text-sm font-medium shadow">
        <span className="mr-2">Dreamviewer Yatra</span> /
        <span className="ml-2">Contact Us</span>
      </div>

      {/* Back button */}
      <div className="w-full m-6 flex justify-start">
        <Link
          to="/"
          className="flex items-center gap-2 text-base sm:text-lg text-sky-600 hover:text-sky-800"
        >
          <GoArrowLeft className="text-xl" />
          Back
        </Link>
      </div>

      <div className="w-full m-4 flex flex-col lg:flex-row justify-between px-6 lg:px-20">
        {/* Form Section */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-2xl font-semibold mb-2">We'd love to hear from you</h1>
          <p className="text-gray-700 mb-4">How may we assist you today?</p>
          <p className="text-sm text-gray-600 mb-6">
            Our trained professionals are here to help. If you have any queries, please use the form
            below or chat with us online for assistance.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile No.*"
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message*"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className={`px-6 py-2 rounded text-white font-semibold ${status.submitting ? 'bg-sky-300' : 'bg-sky-600 hover:bg-sky-700'}`}
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          {status.success && (
            <p className="mt-4 text-green-600 text-center">{status.success}</p>
          )}
          {status.error && (
            <p className="mt-4 text-red-600 text-center">{status.error}</p>
          )}
        </div>

        {/* Placeholder for Map */}
        {/* <div className="w-full lg:w-1/3 mt-10 lg:mt-0 lg:pl-10"> */}
          <div className="w-full lg:w-1/3 mt-10 lg:mt-0 lg:pl-10">
  <div className="w-full h-80 rounded overflow-hidden shadow-md border">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086639391105!2d144.96305761560717!3d-37.81410797975147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f00f3c3f%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1612914831197!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Company Location"
    ></iframe>
  </div>
</div>

        </div>
      {/* </div> */}
    </div>
  );
};

export default ContactUs;
