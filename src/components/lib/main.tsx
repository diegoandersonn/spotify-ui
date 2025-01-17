import React from "react";
import Sidebar from "./sidebar.tsx";
import Nav from "./nav.tsx";

export default function Main() {
  return (
    <div className="flex w-screen h-screen justify-between gap-2">
      <Sidebar />
      <Nav />
    </div>
  );
}
