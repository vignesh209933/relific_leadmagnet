import React, { useState } from "react";
import Colors from "../constant/Color";
import ThankYou from "./ThankYou";

const DownloadModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    organization: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (
      !/^[\+]?[1-9][\d]{7,14}$/.test(formData.mobile.replace(/\s/g, ""))
    ) {
      newErrors.mobile = "Please enter a valid mobile number";
    }

    // Organization validation
    if (!formData.organization.trim()) {
      newErrors.organization = "Organization is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitting(false);
      return;
    }

    // Submit form data to Formspree
    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          organization: formData.organization,
          message: `NGO Digital Readiness Guide download request from ${formData.name} at ${formData.organization}`,
        }),
      });

      if (response.ok) {
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          mobile: "",
          organization: "",
        });
        setErrors({});
        setIsSubmitting(false);
        setShowThankYou(true);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({ general: "Failed to submit form. Please try again." });
      setIsSubmitting(false);
    }
  };

  const handleCloseAll = () => {
    setShowThankYou(false);
    onClose();
  };

  if (!isOpen) return null;

  // Show ThankYou modal if form was successfully submitted
  if (showThankYou) {
    return <ThankYou isOpen={showThankYou} onClose={handleCloseAll} />;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
        >
          ×
        </button>

        {/* Modal content */}
        <h2 className="text-2xl font-bold text-[#363636] mb-6 text-center">
          Fill this to download now
        </h2>

        {/* General error message */}
        {errors.general && (
          <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#363636] mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#363636] mb-2">
              Email ID *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="........@mail.com"
              className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Mobile field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#363636] mb-2">
              Mobile number *
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Enter your mobile number"
              className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.mobile
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              required
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>

          {/* Organization field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#363636] mb-2">
              Organization *
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="Enter organisation name"
              className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.organization
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              required
            />
            {errors.organization && (
              <p className="text-red-500 text-sm mt-1">{errors.organization}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg text-white font-medium text-lg transition-all duration-300 ease-in-out transform ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-105 cursor-pointer"
            }`}
            style={{
              background: Colors.Primary_font,
              boxShadow: "0px 8px 20px rgba(85, 99, 255, 0.2)",
            }}
          >
            {isSubmitting ? "Downloading..." : "Download the Guide"}
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
