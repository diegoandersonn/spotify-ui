import React from "react";
import albumPic from "../../assets/albumpic.jpg";
import { FaCheckCircle } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-between p-2">
      <div className="flex gap-4">
        <div>
          <img src={albumPic} alt="" className="w-12 h-12 rounded-sm" />
        </div>
        <div className="flex flex-col justify-center">
            <p className="text-sm font-medium">Faz Completo, Chefe</p>
            <p className="flex items-center gap-1 text-xs text-zinc-400">Mc IG, DJ WN</p>
        </div>
        <div className="flex items-center">
        <FaCheckCircle className="text-green-500"/>
        </div>
      </div>
      <div>asdasdasd</div>
      <div>asdsadsa</div>
    </div>
  );
}
