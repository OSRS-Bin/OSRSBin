import React from "react";
import SearchSection from "./_components/SearchSection";
import UploadSection from "./_components/UploadSection";
import PopularSection from "./_components/PopularSection";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Home</h1>

      <div className="flex flex-col items-center my-12 gap-12">
        <SearchSection />

        {/* --- OR --- */}
        <div className="flex w-full items-center max-w-96">
          <div className="h-px grow bg-foreground"></div>
          <div className="mx-4 uppercase">Or</div>
          <div className="h-px grow bg-foreground"></div>
        </div>

        <UploadSection />
      </div>
      <PopularSection />
    </>
  );
}
