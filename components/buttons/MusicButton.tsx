"use client";
import useGlobalStore from "@/state";
import { ChangeEventHandler, useRef } from "react";
import "./MusicButton.css";
import ReactAudioPlayer from "react-audio-player";
export default function BackgroundAudio() {
  const isMusicPlaying = useGlobalStore((state) => state.isMusicPlaying);
  const setMusicPlaying = useGlobalStore((state) => state.setMusicPlaying);
  const audioRef = useRef<ReactAudioPlayer>(null);
  const handleMusicPlay: ChangeEventHandler<HTMLInputElement> = () => {
    if (isMusicPlaying) {
      setMusicPlaying(false);
      audioRef.current?.audioEl.current?.pause();
    } else {
      setMusicPlaying(true);
      audioRef.current?.audioEl.current?.play();
    }
  };
  return (
    <>
      <label
        className="bg-music-container click-effect"
        data-tooltip-id="music-button"
      >
        <input
          className="bg-music-checkbox"
          type="checkbox"
          onChange={handleMusicPlay}
          aria-label="background music play pause"
        />
        <div className="bg-music-checkmark h-[40px] w-[40px] rounded-full sm:h-[60px] sm:w-[60px] md:h-[65px] md:w-[65px] lg:w-[68px] lg:h-[68px] flex justify-center items-center bg-[#151515] relative">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] h-[20px] sm:h-[40px] sm:w-[40px] md:h-[42px] md:w-[42px] lg:w-[45px] lg:h-[45px] music-icon"
          >
            <path
              fillRule="evenodd"
              d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </label>
      <ReactAudioPlayer
        src="/audio/background-music.mp3"
        autoPlay={false}
        preload="metadata"
        controls={false}
        volume={0.1}
        loop={true}
        ref={audioRef}
        className="opacity-0"
      />
    </>
  );
}
