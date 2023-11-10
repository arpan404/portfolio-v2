import React from "react";
import TopNavBar from "../navs/TopNavBar";
import Intro from "../misc/Intro";

export default function IntroScreen() {
  return (
    <>
      <div className="h-[100dvh] relative flex items-center">
        <div className="absolute w-full top-0">
          <TopNavBar />
        </div>
        <Intro />
      </div>
    </>
  );
}
