import React from "react";

export default function Aboutme() {
  return (
    <div className="flex items-center justify-between flex-wrap gap-6 px-8 w-full md:px-10">
      <div className="sm:flex-1 flex justify-center w-full sm:w-fit sm:justify-start">
        <div className="">
          <h2 className="sm:text-6xl text-gray-50 font-bold text-5xl">
            Who am <span className="font-black text-[#ff8e00]">I</span>?
          </h2>
          <h3 className="text-gray-200 sm:text-xl text-lg sm:w-[350px] text-justify">
            In short, a person who loves tech.
          </h3>
        </div>
      </div>
      <div className="sm:flex-1 flex justify-center w-full sm:w-fit sm:justify-end">
        <p className="text-justify text-neutral-200 max-w-[500px]">
          I am a dedicated scholar, a fervent tech enthusiast, and an adept
          software developer with a passion for unraveling complex problems
          using an array of programming tools and languages. My affinity for
          technology propels me into the realm of new innovations, while my
          unwavering commitment to the craft fuels my continuous journey as a
          developer. Fueled by a perpetual eagerness to learn and adapt to the
          dynamic tech landscape, I thrive on the challenges that accompany
          staying at the forefront of the ever-evolving digital realm.
        </p>
      </div>
    </div>
  );
}
