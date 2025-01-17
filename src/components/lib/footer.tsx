import React from "react";
import albumPic from "../../assets/albumpic.jpg";
import nextButton from "../../assets/next.png";
import pauseButton from "../../assets/pause.png";
import previousButton from "../../assets/previous.png";
import repeatButton from "../../assets/repeat.png";
import shuffleButton from "../../assets/shuffle.png";
import connectToADeviceButton from "../../assets/connecttoadevice.png";
import fullscreenButton from "../../assets/fullscreen.png";
import lyricsButton from "../../assets/lyrics.png";
import volumeButton from "../../assets/volume.png";
import queueButton from "../../assets/queue.png";
import { FaCheckCircle } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-between p-2">
      <div className="flex gap-4">
        <div>
          <img src={albumPic} alt="" className="w-14 h-14 rounded-sm" />
        </div>
        <div className="flex flex-col justify-center">
          <a href="/" className="text-sm font-medium">
            Faz Completo, Chefe
          </a>
          <a href="/" className="flex items-center gap-1 text-xs text-zinc-400">
            Mc IG, DJ WN
          </a>
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-green-500" />
        </div>
      </div>
      <div className="flex">
        <div className="flex gap-4 items-center">
          <button>
            <img src={shuffleButton} alt="" className="w-4 h-4" />
          </button>
          <button>
            <img src={previousButton} alt="" className="w-4 h-4" />
          </button>
          <button>
            <img src={pauseButton} alt="" className="w-8 h-8" />
          </button>
          <button>
            <img src={nextButton} alt="" className="w-4 h-4" />
          </button>
          <button>
            <img src={repeatButton} alt="" className="w-4 h-4" />
          </button>
        </div>
        <div></div>
      </div>
      <div className="flex">
        <div className="flex gap-4">
          <button>
            <img src={lyricsButton} alt="" className="w-4 h-4" />
          </button>
          <button>
            <img src={queueButton} alt="" className="w-4 h-4" />
          </button>
          <button>
            <img src={connectToADeviceButton} alt="" className="w-4 h-4" />
          </button>
          <button>
            <img src={volumeButton} alt="" className="w-4 h-4" />
          </button>
          <button>
            <img src={fullscreenButton} alt="" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
