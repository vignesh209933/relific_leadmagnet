import React from "react";
import Colors from "../constant/Color";
import circleImage from "../assets/circle.png";

const ClaritySection = () => (
  <section className="bg-[#EAF0F7] py-[64px] max-[768px]:py-[48px] max-[480px]:py-[32px]">
    <div className="max-w-6xl mx-auto px-[32px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
      <div className="text-left mb-[48px] max-[768px]:mb-[36px] max-[480px]:mb-[24px]">
        {/* Desktop and Tablet Heading */}
        <h2 className="hidden sm:block text-[60px] md:text-[40px] font-bold text-[#363636] mb-[24px] md:mb-[18px] leading-tight whitespace-nowrap">
          For Teams That Need
          <span className="text-[#5563FF] font-bold relative mx-[8px]">
            <img
              src={circleImage}
              alt="Oval around Clarity"
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-[260px] md:w-[200px] h-[87px] md:h-[67px] object-fill"
            />
            <span className="relative z-10">&nbsp;Clarity,&nbsp;</span>
          </span>
          Not <span className="text-[#E53935] font-bold">Complexity</span>
        </h2>

        {/* Mobile Only Heading */}
        <h2 className="block sm:hidden text-[32px] font-bold text-[#363636] mb-[16px] leading-tight">
          For Teams That Need
          <span className="text-[#5563FF] font-bold relative mx-[6px]">
            <img
              src={circleImage}
              alt="Oval around Clarity"
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-[140px] h-[48px] object-fill"
            />
            <span className="relative z-10">&nbsp;Clarity,&nbsp;</span>
          </span>
          Not <span className="text-[#E53935] font-bold">Complexity</span>
        </h2>
      </div>{" "}
      <div className="text-[24px] max-[768px]:text-[20px] max-[480px]:text-[18px] text-[#363636] mb-[32px] max-[768px]:mb-[24px] max-[480px]:mb-[16px] text-left">
        The{" "}
        <span className="text-[#5563FF] font-bold text-[40px] max-[768px]:text-[32px] max-[480px]:text-[24px]">
          Digital Health
        </span>{" "}
        Check helps you
      </div>
      <ul className="space-y-[16px] max-[768px]:space-y-[12px] max-[480px]:space-y-[8px] mb-[48px] max-[768px]:mb-[36px] max-[480px]:mb-[24px] text-left">
        <li className="flex items-center gap-[16px] max-[480px]:gap-[12px] text-[24px] max-[768px]:text-[20px] max-[480px]:text-[18px] text-[#363636]">
          <div className="w-[32px] max-[480px]:w-[24px] h-[32px] max-[480px]:h-[24px] bg-[#5563FF] rounded-md flex items-center justify-center flex-shrink-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="max-[480px]:w-[16px] max-[480px]:h-[16px]"
            >
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
        <li className="flex items-center gap-[16px] max-[480px]:gap-[12px] text-[24px] max-[768px]:text-[20px] max-[480px]:text-[18px] text-[#363636]">
          <div className="w-[32px] max-[480px]:w-[24px] h-[32px] max-[480px]:h-[24px] bg-[#5563FF] rounded-md flex items-center justify-center flex-shrink-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="max-[480px]:w-[16px] max-[480px]:h-[16px]"
            >
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
        <li className="flex items-center gap-[16px] max-[480px]:gap-[12px] text-[24px] max-[768px]:text-[20px] max-[480px]:text-[18px] text-[#363636]">
          <div className="w-[32px] max-[480px]:w-[24px] h-[32px] max-[480px]:h-[24px] bg-[#5563FF] rounded-md flex items-center justify-center flex-shrink-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="max-[480px]:w-[16px] max-[480px]:h-[16px]"
            >
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
      <div className="text-[24px] max-[768px]:text-[20px] max-[480px]:text-[18px] text-[#363636] text-left">
        Use it with your team. Share it with leadership. Make your next digital
        move with purpose.
      </div>
    </div>
  </section>
);

export default ClaritySection;
