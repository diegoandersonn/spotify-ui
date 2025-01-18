import React from "react";
import profilePhoto from "../../assets/profilepic.jpg";
import { BsThreeDots } from "react-icons/bs";
import {
  FaHouse,
  FaRegBell,
  FaRegWindowRestore,
  FaRegWindowMinimize,
} from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import { IoFolderOpenOutline, IoSearch } from "react-icons/io5";
import { PiUsersThreeBold } from "react-icons/pi";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-2">
      <div className="flex gap-2">
        <div>
          <BsThreeDots size={30} />
        </div>
        <div className="flex">
          <IoIosArrowBack
            size={30}
            title="Voltar"
            className="text-zinc-400 hover:text-white"
          />
          <IoIosArrowForward size={30} className="text-zinc-800" />
        </div>
      </div>
      <div className="flex gap-1">
        <button className="rounded-full bg-zinc-900 p-3 hover:scale-110 transition-transform duration-200">
          <FaHouse title="Início" size={24} />
        </button>
        <div className="group flex w-96 border border-zinc-900 justify-between rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 font-semibold p-3 hover:border-zinc-500 hover:border">
          <div className="flex gap-2">
            <IoSearch
              size={24}
              title="Buscar"
              className="group-hover:text-white"
            />
            <input
              type="text"
              placeholder="O que você quer ouvir?"
              className="bg-transparent outline-none text-white placeholder:text-zinc-500"
            />
          </div>
          <div className="flex gap-2">
            <div className="w-px h-6 bg-slate-400"></div>
            <IoFolderOpenOutline
              size={24}
              title="Navegar"
              className="hover:text-white"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-2 items-center justify-center text-zinc-400">
          <div>
            <FaRegBell
              size={20}
              title="Novidade"
              className="hover:text-white"
            />
          </div>
          <div>
            <PiUsersThreeBold
              size={20}
              title="Atividade Dos Amigos"
              className="hover:text-white"
            />
          </div>
          <div className="p-2 bg-zinc-900 rounded-full hover:scale-105 transition-transform duration-200">
            <img
              src={profilePhoto}
              alt="User profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="hover:bg-zinc-700 p-3">
            <FaRegWindowMinimize size={14} />
          </div>
          <div className="hover:bg-zinc-700 p-3">
            <FaRegWindowRestore size={14} />
          </div>
          <div className="hover:bg-red-800 p-3">
            <IoMdClose size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
