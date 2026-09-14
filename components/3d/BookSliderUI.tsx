"use client";

import React from "react";
import { useAtom } from "jotai";
import { pageAtom } from "./store";
import { useLanguage } from "@/context/LanguageContext";

export default function BookSliderUI() {
  const [page, setPage] = useAtom(pageAtom);
  const { t } = useLanguage();

  const handleNext = () => {
    if (page < 3) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8 z-10 font-serif text-[#4a3b32]">
      <header className="flex justify-between items-center opacity-80">
        <h1 className="text-3xl font-bold tracking-widest border-b-2 border-[#4a3b32] pb-1">
          A. SUDE ÖZDEN
        </h1>
        <div className="text-sm italic">est. 2024</div>
      </header>

      <div className="flex justify-between items-center w-full mt-auto mb-8">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className={`pointer-events-auto px-6 py-3 border-2 border-[#4a3b32] bg-[#f4ebd8] hover:bg-[#e6d5b8] transition-colors shadow-[4px_4px_0_#4a3b32] active:shadow-[1px_1px_0_#4a3b32] active:translate-x-[3px] active:translate-y-[3px] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider font-bold ${page === 0 ? 'invisible' : ''}`}
        >
          {t("nav.home") || "Back"}
        </button>

        <div className="bg-[#f4ebd8] px-4 py-2 border-2 border-[#4a3b32] shadow-[2px_2px_0_#4a3b32] font-bold">
          Chapter {page + 1}
        </div>

        <button
          onClick={handleNext}
          disabled={page === 3}
          className={`pointer-events-auto px-6 py-3 border-2 border-[#4a3b32] bg-[#f4ebd8] hover:bg-[#e6d5b8] transition-colors shadow-[4px_4px_0_#4a3b32] active:shadow-[1px_1px_0_#4a3b32] active:translate-x-[3px] active:translate-y-[3px] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider font-bold ${page === 3 ? 'invisible' : ''}`}
        >
          {t("nav.about") || "Next"}
        </button>
      </div>
    </div>
  );
}
