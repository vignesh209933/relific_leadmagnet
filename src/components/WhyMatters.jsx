import React, { useState } from "react";
import Colors from "../constant/Color";
import DownloadModal from "./DownloadModal";

const WhyMatters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-[#F9F9FF] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#666] mb-10">
            Why This Matters Now
          </h2>
          <ul className="space-y-6 mb-10 text-xl md:text-2xl text-[#666]">
            <li className="flex items-start gap-4">
              <span className="font-bold text-[#5563FF] text-3xl md:text-4xl">
                •
              </span>
              <span>
                <span className="font-bold text-[#5563FF] text-3xl md:text-4xl">
                  80%
                </span>{" "}
                of NGOs still use disconnected tools and manual processes
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="font-bold text-[#5563FF] text-3xl md:text-4xl">
                •
              </span>
              <span>
                Fewer than{" "}
                <span className="font-bold text-[#5563FF] text-3xl md:text-4xl">
                  13%
                </span>{" "}
                support local languages or field-first tools
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="font-bold text-[#5563FF] text-3xl md:text-4xl">
                •
              </span>
              <span>
                India's DPDP Act now applies to all NGOs handling personal data
              </span>
            </li>
          </ul>
          <div className="text-[#666] text-xl md:text-2xl mb-10 leading-relaxed">
            If your team struggles with data errors, outdated records, or
            unclear systems, this guide is{" "}
            <span className="text-[#5563FF] font-medium">for you</span>.
          </div>
          <div className="text-center w-full">
            <button
              onClick={handleDownloadClick}
              className="relative overflow-hidden px-10 py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-xl font-medium transform hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                background: Colors.Primary_font,
                color: Colors.Font_4,
                boxShadow: "0px 8px 20px rgba(85, 99, 255, 0.2)",
              }}
            >
              Download the Guide
            </button>
          </div>
        </div>

        <DownloadModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </section>
    </>
  );
};

export default WhyMatters;
