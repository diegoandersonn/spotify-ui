import React from "react";
import playboyPic from "../../assets/playboypic.jpg";
import cromadinhoPic from "../../assets/cromadinhopic.png";
import playlistPic from "../../assets/playlistpic.jpg";

export default function Nav() {
  const playlists = Array(8).fill({
    title: "This Is Mc IG",
    imgSrc: playlistPic,
  });
  const playboyCard = Array(7).fill({
    title: "Lorem ipsum dolor sit amet consectetur adipisicing...",
    imgSrc: playboyPic,
  });
  const cromadinhoCard = Array(7).fill({
    title: "Lorem ipsum dolor sit amet consectetur adipisicing...",
    imgSrc: cromadinhoPic,
  });
  return (
    <div className="flex flex-col flex-1 bg-neutral-900 rounded-md w-full overflow-hidden">
      <div className="bg-gradient-to-t from-neutral-900 to-red-600 rounded-t-md">
        <div className="flex gap-2 p-4 px-8">
          <button className="bg-white text-black p-1.5 px-3 text-sm rounded-full font-medium">
            Tudo
          </button>
          <button className="bg-white/10 hover:bg-white/15 p-1.5 px-3 text-sm rounded-full font-medium">
            Música
          </button>
          <button className="bg-white/10 hover:bg-white/15 p-1.5 px-3 text-sm rounded-full font-medium">
            Podcasts
          </button>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-3 p-2 px-8">
            {playlists.map((playlist, index) => (
              <button key={index} className="bg-white/10 flex rounded-md gap-3">
                <img
                  src={playlist.imgSrc}
                  alt={playlist.title}
                  title={playlist.title}
                  className="w-16 h-16 rounded-l-md"
                />
                <h1 className="flex items-center text-lg font-bold">
                  {playlist.title}
                </h1>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-4 py-2 px-6">
        <div className="flex justify-between">
          <button className="text-3xl font-extrabold hover:underline">Playb0y!</button>
          <p className="flex items-center text-zinc-400 text-sm font-semibold hover:underline pr-10">Mostrar Tudo</p>
        </div>
        <div className="flex">
          {playboyCard.map((card, index) => (
            <div className="flex flex-col py-3 p-1 w-52 rounded-md hover:bg-neutral-800">
              <button
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <img
                  src={card.imgSrc}
                  alt="playb0y"
                  title="playb0y"
                  className="h-44 w-44 rounded-md"
                />
                <p className="text-sm text-zinc-400 break-words whitespace-normal">
                  {card.title}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-4 py-2 px-6">
        <div className="flex justify-between">
          <button className="text-3xl font-extrabold hover:underline">Cromadinho!</button>
          <p className="flex items-center text-zinc-400 text-sm font-semibold hover:underline pr-10">Mostrar Tudo</p>
        </div>
        <div className="flex">
          {cromadinhoCard.map((card, index) => (
            <div className="flex flex-col py-3 p-1 w-52 rounded-md hover:bg-neutral-800">
              <button
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <img
                  src={card.imgSrc}
                  alt="playb0y"
                  title="playb0y"
                  className="h-44 w-44 rounded-md"
                />
                <p className="text-sm text-zinc-400 break-words whitespace-normal">
                  {card.title}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
