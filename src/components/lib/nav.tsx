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
    <div className="flex flex-col gap-4 flex-1 bg-zinc-900 rounded-md w-full py-4 px-14">
      <div className="flex gap-2">
        <button className="bg-white text-black p-1.5 px-3 text-sm rounded-full font-medium">
          Tudo
        </button>
        <button className="bg-zinc-600 p-1.5 px-3 text-sm rounded-full font-medium">
          Música
        </button>
        <button className="bg-zinc-600 p-1.5 px-3 text-sm rounded-full font-medium">
          Podcasts
        </button>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-3">
          {playlists.map((playlist, index) => (
            <button key={index} className="bg-zinc-600 flex rounded-md gap-3">
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
      <div className="flex flex-col gap-6 mt-10">
        <div className="flex justify-between">
          <h1 className="text-3xl font-extrabold">Playb0y!</h1>
          <p className="flex items-center text-sm">Mostrar Tudo</p>
        </div>
        <div className="flex">
          {playboyCard.map((card, index) => (
            <button key={index} className="flex flex-col gap-3">
              <img src={card.imgSrc} alt="playb0y" title="playb0y" className="h-44 w-44 rounded-md" />
              <p className="text-sm text-zinc-400">
                {card.title}
              </p>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-extrabold">Cromadinho!</h1>
          <p className="flex items-center text-sm">Mostrar Tudo</p>
        </div>
        <div className="flex">
          {cromadinhoCard.map((card, index) => (
            <button key={index} className="flex flex-col gap-3">
              <img src={card.imgSrc} alt="cromadinho" title="cromadinho" className="h-44 w-44 rounded-md" />
              <p className="text-sm text-zinc-400">
                {card.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
