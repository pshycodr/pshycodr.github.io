"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { sendGTMEvent } from "@next/third-parties/google";

import { DarkMode, LightMode } from "../icons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("mode") as "light" | "dark" | null;
    setMode(stored ?? "light");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", mode);
    localStorage.setItem("mode", mode);
  }, [mode]);

  function toggleTheme() {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-b-(--color-border) bg-(--color-bg) backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-12 w-full max-w-5xl items-center justify-between px-5 lg:px-10">
          <Link
            href="/"
            onClick={() =>
              sendGTMEvent({
                event: "nav_click",
                target: "home",
              })
            }
            className="text-sm text-(--color-text-main) transition-colors duration-200 hover:opacity-60"
          >
            pshycodr.
          </Link>

          <div className="flex items-center gap-6">
            <button onClick={toggleTheme} className="cursor-pointer">
              {mode === "light" ? (
                <DarkMode className="" size={16} />
              ) : (
                <LightMode className="" size={16} />
              )}
            </button>

            <Link
              href="https://devdump.tech"
              onClick={() =>
                sendGTMEvent({
                  event: "nav_click",
                  target: "blogs",
                })
              }
              className="text-xs text-(--color-text-muted) transition-opacity duration-200 hover:opacity-60"
            >
              blog
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-12" />
    </>
  );
};

export default Navbar;
