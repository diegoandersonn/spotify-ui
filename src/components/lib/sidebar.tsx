import React from "react";
import playlistPic from "../../assets/playlistpic.jpg";
import { AiFillPushpin } from "react-icons/ai";
import { FaBookOpen, FaPlus, FaArrowRight } from "react-icons/fa6";
import { IoIosList } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export default function Sidebar() {
  const playlists = Array(25).fill({
    title: "This Is Mc IG",
    description: "Playlist • Diego Anderson",
    imgSrc: playlistPic,
  });

  return (
    <div className="flex w-96 bg-zinc-900 rounded-md flex-col p-4 gap-4 h-full max-h-full overflow-hidden">
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-3 text-zinc-300">
          <FaBookOpen size={24} />
          <p className="font-bold">Sua Biblioteca</p>
        </div>
        <div className="flex gap-3 text-zinc-400">
          <FaPlus size={15} />
          <FaArrowRight size={15} />
        </div>
      </div>
      <div className="flex justify-start gap-2">
        <button className="bg-zinc-800 p-1.5 px-3 text-sm rounded-full">
          Playlists
        </button>
        <button className="bg-zinc-800 p-1.5 px-3 text-sm rounded-full">
          Artistas
        </button>
      </div>
      <div className="flex text-zinc-400 justify-between items-center">
        <div>
          <IoSearch size={20} />
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-sm font-semibold">Recentes</p>
          <IoIosList size={20} />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-4 max-h-full overflow-y-auto overflow-x-hidden scrollbar-thumb">
          {playlists.map((playlist, index) => (
            <li key={index} className="flex justify-between gap-3">
              <div className="flex gap-3">
                <img
                  src={playlist.imgSrc}
                  alt=""
                  className="w-12 h-12 rounded-sm"
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
