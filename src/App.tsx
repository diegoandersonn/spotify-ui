import React from "react";
import Header from "./components/lib/header.tsx";
import Footer from "./components/lib/footer.tsx";
import Main from "./components/lib/main.tsx";

export default function App() {
  return (
    <div className="flex flex-col w-screen h-screen bg-black text-white p-2 gap-2">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
