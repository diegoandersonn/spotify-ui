import React from "react";
import playlistPic from "../../assets/playlistpic.jpg";
import { AiFillPushpin } from "react-icons/ai";
import { FaBookOpen, FaPlus, FaArrowRight } from "react-icons/fa6";
import { IoIosList } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export default function Sidebar() {
  const playlists = Array(25).fill({
    title: "Top 50 - Brasil",
    description: "Playlist • Diego Anderson",
    imgSrc: playlistPic,
  });

  return (
    <div className="flex w-96 bg-neutral-900 rounded-md flex-col p-4 gap-4 h-full max-h-full overflow-hidden">
      <div className="flex items-center justify-between gap-2">
        <button
          title="Ocultar Sua Biblioteca"
          className="group flex gap-3 text-zinc-300"
        >
          <FaBookOpen size={24} className="group-hover:text-white" />
          <p className="group-hover:text-white font-bold">Sua Biblioteca</p>
        </button>
        <div className="flex gap-3 text-zinc-400">
          <button className="hover:bg-zinc-800 p-2 rounded-full transition duration-200">
            <FaPlus
              size={15}
              className="text-zinc-400 hover:rounded-full hover:text-zinc-200"
              title="Criar Playlist ou Pasta"
            />
          </button>
          <button className="hover:bg-zinc-800 p-2 rounded-full transition duration-200">
            <FaArrowRight
              size={15}
              className="text-zinc-400 hover:rounded-full hover:text-zinc-200"
              title="Mostrar mais"
            />
          </button>
        </div>
      </div>
      <div className="flex justify-start gap-2">
        <button className="bg-zinc-800 hover:bg-zinc-700 p-1.5 px-3 text-sm rounded-full">
          Playlists
        </button>
        <button className="bg-zinc-800 hover:bg-zinc-700 p-1.5 px-3 text-sm rounded-full">
          Artistas
        </button>
      </div>
      <div className="flex text-zinc-400 justify-between items-center">
        <button className="hover:bg-zinc-800 p-1 rounded-full transition duration-200">
          <IoSearch size={20} title="Buscar em Sua Biblioteca" />
        </button>
        <div className="group flex gap-1 items-center">
          <p className="group-hover:text-white text-sm font-semibold">
            Recentes
          </p>
          <IoIosList size={20} className="group-hover:text-white" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="flex flex-col max-h-full overflow-y-auto overflow-x-hidden scrollbar-thumb">
          {playlists.map((playlist, index) => (
            <li
              key={index}
              className="group flex justify-between p-2 rounded-md gap-3 hover:bg-neutral-800"
            >
              <div className="flex gap-3">
                <img
                  src={playlist.imgSrc}
                  alt=""
                  className="w-12 h-12 rounded-sm group-hover:opacity-50"
                />
                <div>
                  <p className="font-semibold">{playlist.title}</p>
                  <p className="flex items-center gap-1 text-xs text-zinc-400 font-bold">
                    <AiFillPushpin size={15} className="text-green-500" />{" "}
                    {playlist.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
