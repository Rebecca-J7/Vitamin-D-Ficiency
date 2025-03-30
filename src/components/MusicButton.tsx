"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";

const MusicButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="absolute right-48 top-44 flex flex-row gap-5">
      <button
        onClick={togglePlayPause}
        className="bg-web-purple-2 flex items-center justify-center rounded-full p-2"
      >
        {!isPlaying && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
        {isPlaying && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path d="M6 6h4v12H6zm8 0h4v12h-4z" />
          </svg>
        )}
      </button>

      <p className="relative top-2 grow basis-3 font-mono text-xl font-semibold text-black">
        lofi serendipity
      </p>

      <audio ref={audioRef} src="bts-serendipity-lofi.mp3" />
    </div>
  );
};

export default MusicButton;
