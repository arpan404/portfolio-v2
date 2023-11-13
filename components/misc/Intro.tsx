import React from "react";
import Image from "next/image";
import LinkedinButton from "../buttons/LinkedinButton";
import GithubButton from "../buttons/GithubButton";
export default function Intro() {
  return (
    <main className="flex items-center justify-between flex-wrap md:px-10 px-8 gap-6 w-full">
      <div className="flex justify-center w-full sm:w-fit">
        <div>
          <h2 className="sm:text-6xl text-gray-50 font-bold text-5xl">
            Hey there!
            <br /> I&apos;m{" "}
            <span className="font-black text-[#ff8e00]">Arpan</span>.
          </h2>
          <span className="mt-2">
            <h2 className="text-gray-300 lg:text-xl md:text-lg text-[1.01rem] ">
              Aspiring scholar & seasoned software engineer.
            </h2>
          </span>
          <div className="flex gap-4 mt-6 flex-wrap">
            <LinkedinButton />
            <GithubButton />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full sm:w-fit">
        <Image
          src="/images/introPic.png"
          height={500}
          width={500}
          alt=""
          className="lg:w-[500px]  w-[250px] sm:w-[200px] md:w-[250px]"
          draggable={false}
        />
      </div>
    </main>
  );
}
