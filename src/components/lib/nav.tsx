import React from "react";
import artistPic from "../../assets/henriqueejuliano.jpg";
import secondArtistPic from "../../assets/jorgeemateus.jpg";
import playlistPic from "../../assets/playlistpic.jpg";

export default function Nav() {
  const playlists = Array(8).fill({
    title: "Top 50 - Brasil",
    imgSrc: playlistPic,
  });
  const artistCard = Array(6).fill({
    title: "Lorem ipsum dolor sit amet consectetur adipisicing...",
    imgSrc: artistPic,
  });
  const secondArtistCard = Array(6).fill({
    title: "Lorem ipsum dolor sit amet consectetur adipisicing...",
    imgSrc: secondArtistPic,
  });

  return (
    <div className="flex flex-col flex-1 bg-neutral-900 rounded-md overflow-y-auto max-h-screen scrollbar-thumb">
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
          <button className="text-3xl font-extrabold hover:underline">
            Henrique e Juliano!
          </button>
          <p className="flex items-center text-zinc-400 text-sm font-semibold hover:underline pr-10">
            Mostrar Tudo
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {artistCard.map((card, index) => (
            <div
              key={index}
              className="flex flex-col py-3 p-1 w-52 rounded-md hover:bg-neutral-800"
            >
              <button className="flex flex-col justify-center items-center">
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
          <button className="text-3xl font-extrabold hover:underline">
            Jorge e Mateus!
          </button>
          <p className="flex items-center text-zinc-400 text-sm font-semibold hover:underline pr-10">
            Mostrar Tudo
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {secondArtistCard.map((card, index) => (
            <div
              key={index}
              className="flex flex-col py-3 p-1 w-52 rounded-md hover:bg-neutral-800"
            >
              <button className="flex flex-col justify-center items-center">
                <img
                  src={card.imgSrc}
                  alt="secondArtist"
                  title="secondArtist"
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
          <button className="text-3xl font-extrabold hover:underline">
            Jorge e Mateus!
          </button>
          <p className="flex items-center text-zinc-400 text-sm font-semibold hover:underline pr-10">
            Mostrar Tudo
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {secondArtistCard.map((card, index) => (
            <div
              key={index}
              className="flex flex-col py-3 p-1 w-52 rounded-md hover:bg-neutral-800"
            >
              <button className="flex flex-col justify-center items-center">
                <img
                  src={card.imgSrc}
                  alt="secondArtist"
                  title="secondArtist"
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
          <button className="text-3xl font-extrabold hover:underline">
            Jorge e Mateus!
          </button>
          <p className="flex items-center text-zinc-400 text-sm font-semibold hover:underline pr-10">
            Mostrar Tudo
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {secondArtistCard.map((card, index) => (
            <div
              key={index}
              className="flex flex-col py-3 p-1 w-52 rounded-md hover:bg-neutral-800"
            >
              <button className="flex flex-col justify-center items-center">
                <img
                  src={card.imgSrc}
                  alt="secondArtist"
                  title="secondArtist"
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
