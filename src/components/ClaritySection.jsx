import React from "react";
import Colors from "../constant/Color";

const ClaritySection = () => (
  <section className="bg-[#EAF0F7] py-16">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#363636] mb-6 leading-tight whitespace-nowrap">
          For Teams That Need{" "}
          <span className="text-[#5563FF] font-bold relative mx-2">
            <img
              src="/src/assets/circle.png"
              alt="Oval around Clarity"
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-44 h-[4.4rem] object-contain"
            />
            <span className="relative z-10">&nbsp;Clarity&nbsp;</span>
          </span>{" "}
          Not <span className="text-[#E53935] font-bold">Complexity</span>
        </h2>
      </div>

      <div className="text-2xl md:text-3xl text-[#363636] mb-8 text-left">
        The <span className="text-[#5563FF] font-bold">Digital Health</span>{" "}
        Check helps you
      </div>

      <ul className="space-y-4 mb-12 text-left">
        <li className="flex items-center gap-4 text-xl md:text-2xl text-[#363636]">
          <div className="w-8 h-8 bg-[#5563FF] rounded-md flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6L9 17l-5-5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          Identify weak points in your systems
        </li>
        <li className="flex items-center gap-4 text-xl md:text-2xl text-[#363636]">
          <div className="w-8 h-8 bg-[#5563FF] rounded-md flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6L9 17l-5-5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          Understand compliance risks
        </li>
        <li className="flex items-center gap-4 text-xl md:text-2xl text-[#363636]">
          <div className="w-8 h-8 bg-[#5563FF] rounded-md flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6L9 17l-5-5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          Take practical steps without hiring consultants
        </li>
      </ul>

      <div className="text-xl md:text-2xl text-[#363636] text-left whitespace-nowrap">
        Use it with your team. Share it with leadership. Make your next digital
        move with purpose.
      </div>
    </div>
  </section>
);

export default ClaritySection;
