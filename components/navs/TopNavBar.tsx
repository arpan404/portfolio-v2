import React from "react";
import MusicButton from "../buttons/MusicButton";

export default function TopNavBar() {
  return (
    <div className="flex sm:px-10 sm:py-6 px-4 py-2 items-center justify-end">
      <MusicButton />
    </div>
  );
}
