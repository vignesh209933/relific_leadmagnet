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
      <section className="py-[64px] max-[768px]:py-[48px] max-[480px]:py-[32px] bg-[#F9F9FF]">
        <div className="max-w-6xl mx-auto px-[32px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
          <h2 className="font-bold text-[#666] mb-[48px] max-[768px]:mb-[36px] max-[480px]:mb-[24px] text-left text-[48px] max-[768px]:text-[36px] max-[480px]:text-[28px]">
            Why This Matters Now
          </h2>
          <ul className="space-y-[24px] max-[768px]:space-y-[20px] max-[480px]:space-y-[16px] mb-[40px] max-[768px]:mb-[32px] max-[480px]:mb-[24px] text-[24px] max-[768px]:text-[20px] max-[480px]:text-[18px] text-[#666]">
            <li className="flex items-start gap-[16px] max-[480px]:gap-[12px]">
              <span className="font-bold text-[#5563FF] text-[40px] max-[768px]:text-[32px] max-[480px]:text-[24px]">
                •
              </span>
              <span>
                <span className="font-bold text-[#5563FF] text-[40px] max-[768px]:text-[32px] max-[480px]:text-[24px]">
                  80%
                </span>{" "}
                of NGOs still use disconnected tools and manual processes
              </span>
            </li>
            <li className="flex items-start gap-[16px] max-[480px]:gap-[12px]">
              <span className="font-bold text-[#5563FF] text-[40px] max-[768px]:text-[32px] max-[480px]:text-[24px]">
                •
              </span>
              <span>
                Fewer than{" "}
                <span className="font-bold text-[#5563FF] text-[40px] max-[768px]:text-[32px] max-[480px]:text-[24px]">
                  13%
                </span>{" "}
                support local languages or field-first tools
              </span>
            </li>
            <li className="flex items-start gap-[16px] max-[480px]:gap-[12px]">
              <span className="font-bold text-[#5563FF] text-[40px] max-[768px]:text-[32px] max-[480px]:text-[24px]">
                •
              </span>
              <span>
                India's DPDP Act now applies to all NGOs handling personal data
              </span>
            </li>
          </ul>
          <div className="text-[#666] text-[24px] max-[768px]:text-[20px] max-[480px]:text-[18px] mb-[40px] max-[768px]:mb-[32px] max-[480px]:mb-[24px] leading-relaxed text-left">
            If your team struggles with data errors, outdated records, or
            unclear systems, this guide is{" "}
            <span className="text-[#5563FF] font-medium text-[40px] max-[768px]:text-[32px] max-[480px]:text-[24px]">
              for you
            </span>
            .
          </div>
          <div className="text-center w-full">
            <button
              onClick={handleDownloadClick}
              className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out font-medium transform hover:scale-105 active:scale-95 cursor-pointer text-[24px] max-[768px]:text-[20px] max-[480px]:text-[18px] px-[40px] max-[768px]:px-[32px] max-[480px]:px-[24px] py-[16px] max-[768px]:py-[12px] max-[480px]:py-[10px]"
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
