import React from "react";
import albumPic from "../../assets/albumpic.jpg";
import connectToADeviceButton from "../../assets/connecttoadevice.png";
import fullscreenButton from "../../assets/fullscreen.png";
import queueButton from "../../assets/queue.png";
import { HiOutlineQueueList } from "react-icons/hi2";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { FaCheckCircle, FaPauseCircle } from "react-icons/fa";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { TbMicrophone2 } from "react-icons/tb";
import {
  FaShuffle,
  FaForwardStep,
  FaBackwardStep,
  FaRepeat,
  FaComputer,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex justify-between p-2 gap-2">
      <div className="flex gap-4">
        <div>
          <img src={albumPic} alt="" className="w-14 h-14 rounded-sm" />
        </div>
        <div className="flex flex-col justify-center">
          <button className="text-sm font-medium hover:underline">
            Faz Completo, Chefe
          </button>
          <button className="flex items-center gap-1 text-xs text-zinc-400 hover:underline">
            Mc IG, DJ WN
          </button>
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-green-500" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-6 items-center">
          <button>
            <FaShuffle
              title="Ativar a Ordem Aleatória"
              className="w-4 h-4 text-zinc-400 hover:text-white hover:scale-110"
            />
          </button>
          <button>
            <FaBackwardStep
              title="Voltar"
              className="w-5 h-5 text-zinc-400 hover:text-white hover:scale-110"
            />
          </button>
          <button>
            <FaPauseCircle title="Pausar" className="w-8 h-8 hover:scale-110" />
          </button>
          <button>
            <FaForwardStep
              title="Avançar"
              className="w-5 h-5 text-zinc-400 hover:text-white hover:scale-110"
            />
          </button>
          <button>
            <FaRepeat
              title="Repetir"
              className="w-5 h-5 text-zinc-400 hover:text-white hover:scale-110"
            />
          </button>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-zinc-400">1:02</span>
          <div className="group h-1 w-96 rounded-md bg-zinc-600 cursor-pointer">
            <div className="h-1 w-24 rounded-l-md bg-white group-hover:bg-green-500"></div>
          </div>
          <span className="text-xs text-zinc-400">2:07</span>
        </div>
      </div>
      <div className="flex gap-4">
        <button>
          <TbMicrophone2
            title="Letra"
            className="w-5 h-5 text-zinc-400 hover:text-white hover:scale-110"
          />
        </button>
        <button>
          <HiOutlineQueueList
            title="Fila"
            className="w-6 h-6 text-zinc-400 hover:text-white hover:scale-110"
          />
        </button>
        <button>
          <FaComputer className="w-5 h-5 text-zinc-400 hover:text-white hover:scale-110" />
        </button>
        <button className="flex items-center gap-2">
          <IoVolumeMediumOutline
            title="Mudo"
            className="w-6 h-6 text-zinc-400 hover:text-white"
          />
          <div className="group h-1 w-24 rounded-md bg-zinc-600">
            <div className="h-1 w-12 rounded-l-md bg-white group-hover:bg-green-500"></div>
          </div>
        </button>
        <button>
          <AiOutlineArrowsAlt
            title="Tela Cheia"
            className="w-5 h-5 text-zinc-400 hover:scale-110"
          />
        </button>
      </div>
    </div>
  );
}
