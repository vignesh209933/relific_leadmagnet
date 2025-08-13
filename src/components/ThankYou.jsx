import React from "react";
import Colors from "../constant/Color";

const ThankYou = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-8 relative text-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
        >
          ×
        </button>

        {/* Success Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Thank You Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#363636] mb-4">
          Thank You!
        </h2>

        <p className="text-lg text-[#666] mb-6 leading-relaxed">
          Your NGO Digital Readiness Guide is ready for download!
        </p>

        {/* Download Button */}
        <div className="mb-6">
          <a
            href={import.meta.env.VITE_PDF_DOWNLOAD_URL}
            download="NGO-Digital-Readiness-Guide.pdf"
            className="inline-flex items-center justify-center w-full py-4 px-6 rounded-lg text-white font-bold text-lg transition-all duration-300 ease-in-out transform hover:scale-105 mb-4 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #5563FF 0%, #4449CC 100%)",
              boxShadow: "0px 10px 25px rgba(85, 99, 255, 0.3)",
            }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Your Guide Now
          </a>
        </div>

        {/* Additional Resources */}
        <div className="text-left mb-6">
          <h3 className="text-lg font-semibold text-[#363636] mb-3">
            Explore our digital tools for NGOs:
          </h3>
          <div className="space-y-2">
            <a
              href="https://www.relific.io/surve_r"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#5563FF] hover:text-[#4449CC] underline cursor-pointer"
            >
              Surve-R: Mobile data collection
            </a>
            <a
              href="https://www.relific.io/drive_r"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#5563FF] hover:text-[#4449CC] underline cursor-pointer"
            >
              Drive-R: Real-time dashboards
            </a>
          </div>
        </div>

        {/* Website Link Button */}
        <a
          href="https://www.relific.io"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 px-6 rounded-lg font-medium text-lg transition-all duration-300 ease-in-out transform hover:scale-105 border-2 cursor-pointer text-center"
          style={{
            color: Colors.Primary_font,
            borderColor: Colors.Primary_font,
            background: "transparent",
            textDecoration: "none",
          }}
        >
          Check Our Website
        </a>

        {/* Footer Message */}
        <p className="text-sm text-gray-500 text-center mt-4 leading-relaxed">
          Thank you for downloading our guide. We hope it helps your NGO take
          confident steps toward digital transformation.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
