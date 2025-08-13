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
          <div className="max-w-7xl mx-auto text-center px-[32px] pt-[48px] pb-[40px]">
            <h1 className="font-bold text-white mb-6 leading-tight text-[60px] max-[768px]:text-[40px] max-[480px]:text-[32px] max-[480px]:whitespace-normal">
              Is Your <span className="text-[#2D1B69] font-bold">NGO</span>{" "}
              Ready for the Digital Age?
            </h1>
            <h2 className="font-medium text-white mb-10 leading-relaxed text-[48px] max-[768px]:text-[32px] max-[480px]:text-[24px] max-[480px]:whitespace-normal">
              Digital isn't optional. It is{" "}
              <span className="bg-white text-[#363636] px-3 py-2 rounded-lg font-bold shadow-md">
                essential.
              </span>
            </h2>
            <div className="flex justify-center mb-8">
              <img
                src={infoimg}
                alt="Digital Dashboard Illustration"
                className="drop-shadow-2xl w-[450px] max-[1024px]:w-[384px] max-[768px]:w-[320px] max-[480px]:w-[256px]"
              />
            </div>
            <div className="text-center w-full mb-8">
              <button
                onClick={handleDownloadClick}
                className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out font-medium transform hover:scale-105 active:scale-95 cursor-pointer text-[24px] px-[40px] py-[16px] max-[768px]:text-[20px] max-[768px]:px-[32px] max-[768px]:py-[12px] max-[480px]:text-[18px] max-[480px]:px-[24px] max-[480px]:py-[10px]"
                style={{
                  background: Colors.Primary_font,
                  color: Colors.Font_4,
                  boxShadow: "0px 10px 25px rgba(85, 99, 255, 0.3)",
                }}
              >
                Download the Guide
              </button>
            </div>
            <div className="mx-auto text-center text-[#555] leading-relaxed text-[32px] max-w-[1400px] max-[768px]:text-[24px] max-[768px]:px-[16px] max-[768px]:max-w-[1000px] max-[480px]:text-[20px] max-[480px]:px-[8px] max-[480px]:max-w-[600px]">
              From field data to donor reports, the way you manage your systems
              <br />
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
