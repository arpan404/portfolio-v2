import React from "react";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";
export default function Intro() {
  return (
    <main className="flex items-center justify-between flex-wrap md:px-10 px-8 gap-6 w-full">
      <div className="flex justify-center w-full sm:w-fit">
        <div>
          <h2 className="sm:text-6xl text-gray-50 font-bold text-5xl">
            Hey there!
            <br /> I&apos;m <span className="font-black text-[#ff8e00]">Arpan</span>.
          </h2>
          <span className="mt-2">
            <h2 className="text-gray-300 lg:text-xl md:text-lg text-[1.01rem] ">
              Aspiring scholar & seasoned software engineer.
            </h2>
          </span>
          <div className="flex gap-4 mt-6 flex-wrap">
            <Link href="https://www.linkedin.com/in/arpan404/" target="_blank">
              <button className="group hover:bg-sky-600 relative bg-sky-700 rounded-lg text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6">
                <AiFillLinkedin className="text-3xl" />
                <span className="border-l-2 px-1">arpan404</span>
                <div className="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute">
                  See my profile!
                </div>
              </button>
            </Link>
            <Link href="https://github.com/arpan404/" target="_blank">
              <button className="group hover:bg-gray-900 relative bg-gray-800 rounded-lg text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6">
                <AiFillGithub className="text-3xl" />
                <span className="border-l-2 px-1">arpan404</span>
                <div className="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-500 bg-gray-900 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-gray-900 before:absolute">
                  Visit my treasury!
                </div>
              </button>
            </Link>
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
