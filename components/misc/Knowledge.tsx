import React from "react";
// import { SkillsTab } from "./SkillsTab";

export default function Knowledge() {
  return (
    <div className="flex items-center justify-between flex-wrap md:px-10 px-8 gap-6 w-full">
      <div className="flex justify-center w-full sm:w-fit">
        <div>
          <h2 className="sm:text-6xl text-5xl text-gray-50">
            What <span className="text-[#ff8e00]">I</span> know?
          </h2>
          <h3 className="text-gray-300">
            Pretty much, but still more to learn.
          </h3>
        </div>
      </div>
      <div className="flex justify-center w-full sm:w-fit">
        {/* <SkillsTab /> */}
      </div>
    </div>
  );
}
