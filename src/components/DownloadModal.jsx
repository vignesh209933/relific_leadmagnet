import React, { useState } from "react";
import Colors from "../constant/Color";

const DownloadModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    organization: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your download logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>

        {/* Modal content */}
        <h2 className="text-2xl font-bold text-[#363636] mb-6 text-center">
          Fill this to download now
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#363636] mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#363636] mb-2">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="........@mail.com"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Mobile field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#363636] mb-2">
              Mobile number (Optional)
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Enter your mobile number"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Organization field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#363636] mb-2">
              Organization (Optional)
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="Enter organisation name"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg text-white font-medium text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            style={{
              background: Colors.Primary_font,
              boxShadow: "0px 8px 20px rgba(85, 99, 255, 0.2)",
            }}
          >
            Download the Guide
          </button>

          {/* Privacy text */}
          <p className="text-sm text-gray-600 text-center mt-4 leading-relaxed">
            We respect your inbox. You will receive only practical resources
            that help your NGO move forward with confidence.
          </p>
        </form>
      </div>
    </div>
  );
};

export default DownloadModal;
