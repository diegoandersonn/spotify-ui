import React from "react";
import profilePhoto from "../../assets/profilepic.jpg";
import { BsThreeDots } from "react-icons/bs";
import { FaHouse, FaRegBell, FaRegWindowRestore } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import { IoFolderOpenOutline, IoSearch } from "react-icons/io5";
import { PiUsersThreeBold } from "react-icons/pi";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex gap-2">
        <div>
          <BsThreeDots size={30} />
        </div>
        <div className="flex text-zinc-500">
          <IoIosArrowBack size={30} /> <IoIosArrowForward size={30} />
        </div>
      </div>
      <div className="flex gap-1">
        <div className="rounded-full bg-zinc-900 p-3">
          <FaHouse size={24} />
        </div>
        <div className="flex gap-2 justify-center rounded-full bg-zinc-900 text-zinc-500 font-semibold p-3">
          <div>
            <IoSearch size={24} />
          </div>
          <div>
            <p>O que você quer ouvir? |</p>
          </div>
          <div>
            <IoFolderOpenOutline size={24} />
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-2 items-center justify-center">
          <div>
            <FaRegBell size={20} />
          </div>
          <div>
            <PiUsersThreeBold size={20} />
          </div>
          <div>
            <img
              src={profilePhoto}
              alt="User profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
        <div className="flex gap-6 items-center justify-center">
          <div className="text-5xl">
            <p>-</p>
          </div>
          <div>
            <FaRegWindowRestore size={18} />
          </div>
          <div>
            <IoMdClose size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
