import React, { useState } from "react";
import Colors from "../constant/Color";
import DownloadModal from "./DownloadModal";

const DownloadGuide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-[#363636] mb-8 text-left">
            Download the NGO Digital Readiness Guide
          </h2>

          <div className="text-center mb-8">
            <button
              onClick={handleDownloadClick}
              className="relative overflow-hidden px-8 py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-2xl transform hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                background: Colors.Primary_font,
                color: Colors.Font_4,
                boxShadow: "0px 8px 20px rgba(85, 99, 255, 0.2)",
              }}
            >
              Download the Guide
            </button>
          </div>

          <div className="text-2xl font-bold text-[#363636] mb-6 text-left">
            What You Will Get
          </div>
          <ul className="text-[#444444] text-2xl space-y-3 mb-8 text-left">
            <li>
              • A one-page scorecard for Leadership, Data, Tools, and Training
            </li>
            <li>• Clear red flags and next steps</li>
            <li>• Benchmarks tailored to grassroots and midsize NGOs</li>
            <li>• Simple actions your team can take today</li>
          </ul>

          <div className="text-2xl font-bold text-[#363636] mb-6 text-left">
            Designed to Work with Tools Like
          </div>
          <div className="mb-6 text-2xl text-[#444444] text-left">
            <span className="font-bold text-[#5563FF]">Surve-R:</span> Create
            mobile-ready forms with geotagging, error detection, and offline
            support. Field teams collect data that updates existing records
            without duplication.{" "}
            <a
              href="https://www.relific.io/surve_r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5563FF] hover:text-[#4449CC] underline font-medium"
            >
              Learn more
            </a>
          </div>
          <div className="mb-8 text-2xl text-[#444444] text-left">
            <span className="font-bold text-[#5563FF]">Drive-R:</span> Bring all
            your data into one place. Generate real-time dashboards, track
            program results, and share insights with funders or partners
            securely.{" "}
            <a
              href="https://www.relific.io/drive_r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5563FF] hover:text-[#4449CC] underline font-medium"
            >
              Learn more
            </a>
          </div>

          <div className="text-center w-full"></div>
        </div>

        <DownloadModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </section>
    </>
  );
};

export default DownloadGuide;
