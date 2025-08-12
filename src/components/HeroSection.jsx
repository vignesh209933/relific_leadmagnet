import React, { useState } from "react";
import Colors from "../constant/Color";
import infoimg from "../assets/infoimage.png";
import DownloadModal from "./DownloadModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="w-full relative">
        {/* Top bar with small logo and brand */}
        <div className="w-full flex justify-center items-center py-4 bg-white shadow-sm">
          <img
            src="/logo_small_new.png"
            alt="Relific small logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-xl font-semibold tracking-wide text-[#222]">
            Relific
          </span>
        </div>

        {/* Dual colored background - Blue top, light gray bottom */}
        <div
          className="w-full"
          style={{
            background:
              "linear-gradient(to bottom, #7B8AFF 0%, #7B8AFF 50%, #F0F0F0 50%, #F0F0F0 100%)",
          }}
        >
          {/* Main hero content */}
          <div className="max-w-4xl mx-auto pt-12 px-4 text-center pb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Is Your <span className="text-[#2D1B69] font-bold">NGO</span>{" "}
              Ready for the Digital Age?
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-8">
              Digital isn't optional. It is{" "}
              <span className="bg-white text-[#363636] px-3 py-2 rounded-lg font-bold shadow-md">
                essential.
              </span>
            </h2>
            <div className="flex justify-center mb-8">
              <img
                src={infoimg}
                alt="Digital Dashboard Illustration"
                className="w-80 md:w-96 lg:w-[450px] drop-shadow-2xl"
              />
            </div>
            <div className="text-center w-full mb-8">
              <button
                onClick={handleDownloadClick}
                className="relative overflow-hidden px-10 py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-xl font-medium transform hover:scale-105 active:scale-95 cursor-pointer"
                style={{
                  background: Colors.Primary_font,
                  color: Colors.Font_4,
                  boxShadow: "0px 10px 25px rgba(85, 99, 255, 0.3)",
                }}
              >
                Download the Guide
              </button>
            </div>
            <div className="max-w-3xl mx-auto text-center text-[#555] text-xl leading-relaxed">
              From field data to donor reports, the way you manage your systems
              affects credibility, compliance, and your ability to deliver
              results.
            </div>
          </div>
        </div>

        <DownloadModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </header>
    </>
  );
};

export default HeroSection;
