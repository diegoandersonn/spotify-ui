import React from "react";
import playlistPic from "../../assets/playlistpic.jpg";
import { FaBookOpen, FaPlus, FaArrowRight, FaVolumeLow } from "react-icons/fa6";
import { AiFillPushpin } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { IoIosList } from "react-icons/io";

export default function Main() {
  return (
    <div className="flex justify-between gap-2">
      <div className="flex w-96 bg-zinc-900 rounded-md flex-col p-4 gap-4">
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
          <button className="bg-zinc-800 p-1 px-2 text-sm rounded-full">
            Playlists
          </button>
          <button className="bg-zinc-800 p-1 px-2 text-sm rounded-full">
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
        <div>
          <ul className="flex flex-col gap-4">
            <li className="flex justify-between gap-3">
              <div className="flex gap-3">
                <img
                  src={playlistPic}
                  alt=""
                  className="w-12 h-12 rounded-sm"
                />
                <div>
                  <p className="font-semibold">This Is Mc IG</p>
                  <p className="flex items-center gap-1 text-xs text-zinc-400 font-bold">
                    <AiFillPushpin size={15} className="text-green-500" />{" "}
                    Playlist • Diego Anderson
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <FaVolumeLow />
              </div>
            </li>
            <li className="flex gap-3">
              <div>
                <img
                  src={playlistPic}
                  alt=""
                  className="w-12 h-12 rounded-sm"
                />
              </div>
              <div>
                <p className="font-semibold">This Is Mc IG</p>
                <p className="flex items-center gap-1 text-xs text-zinc-400 font-bold">
                  <AiFillPushpin size={15} className="text-green-500" />{" "}
                  Playlist • Diego Anderson
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <div>
                <img
                  src={playlistPic}
                  alt=""
                  className="w-12 h-12 rounded-sm"
                />
              </div>
              <div>
                <p className="font-semibold">This Is Mc IG</p>
                <p className="flex items-center gap-1 text-xs text-zinc-400 font-bold">
                  <AiFillPushpin size={15} className="text-green-500" />{" "}
                  Playlist • Diego Anderson
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <div>
                <img
                  src={playlistPic}
                  alt=""
                  className="w-12 h-12 rounded-sm"
                />
              </div>
              <div>
                <p className="font-semibold">This Is Mc IG</p>
                <p className="flex items-center gap-1 text-xs text-zinc-400 font-bold">
                  <AiFillPushpin size={15} className="text-green-500" />{" "}
                  Playlist • Diego Anderson
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <div>
                <img
                  src={playlistPic}
                  alt=""
                  className="w-12 h-12 rounded-sm"
                />
              </div>
              <div>
                <p className="font-semibold">This Is Mc IG</p>
                <p className="flex items-center gap-1 text-xs text-zinc-400 font-bold">
                  <AiFillPushpin size={15} className="text-green-500" />{" "}
                  Playlist • Diego Anderson
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <div>
                <img
                  src={playlistPic}
                  alt=""
                  className="w-12 h-12 rounded-sm"
                />
              </div>
              <div>
                <p className="font-semibold">This Is Mc IG</p>
                <p className="flex items-center gap-1 text-xs text-zinc-400 font-bold">
                  <AiFillPushpin size={15} className="text-green-500" />{" "}
                  Playlist • Diego Anderson
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <div>
                <img
                  src={playlistPic}
                  alt=""
                  className="w-12 h-12 rounded-sm"
                />
              </div>
              <div>
                <p className="font-semibold">This Is Mc IG</p>
                <p className="flex items-center gap-1 text-xs text-zinc-400 font-bold">
                  <AiFillPushpin size={15} className="text-green-500" />{" "}
                  Playlist • Diego Anderson
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <div>
                <img
                  src={playlistPic}
                  alt=""
                  className="w-12 h-12 rounded-sm"
                />
              </div>
              <div>
                <p className="font-semibold">This Is Mc IG</p>
                <p className="flex items-center gap-1 text-xs text-zinc-400 font-bold">
                  <AiFillPushpin size={15} className="text-green-500" />{" "}
                  Playlist • Diego Anderson
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <div>
                <img
                  src={playlistPic}
                  alt=""
                  className="w-12 h-12 rounded-sm"
                />
              </div>
              <div>
                <p className="font-semibold">This Is Mc IG</p>
                <p className="flex items-center gap-1 text-xs text-zinc-400 font-bold">
                  <AiFillPushpin size={15} className="text-green-500" />{" "}
                  Playlist • Diego Anderson
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 bg-zinc-900 rounded-md">asdasdas</div>
    </div>
  );
}
