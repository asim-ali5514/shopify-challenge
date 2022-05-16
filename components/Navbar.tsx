import React from "react";
import moon from "../public/images/moon.svg";
import sun from "../public/images/sun.svg";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);
  return (
    <nav className="flex dark:text-white text-black flex-row items-center justify-between   w-full max-w-[900px]">
      <h1 className="text-4xl">Fun with AI</h1>
      <div>
        <div
          className="hover:cursor-pointer dark:hidden fill-white"
          onClick={() => setTheme(colorTheme)}
        >
          <Image src={moon} />
        </div>
        <div
          className="hover:cursor-pointer dark:flex hidden"
          onClick={() => setTheme(colorTheme)}
        >
          <Image src={sun} />
        </div>
      </div>
    </nav>
  );
}
