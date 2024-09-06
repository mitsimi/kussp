"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import CancelIcon from "./icons/CancelIcon";

export default function Navbar() {
  const links = [
    { href: "#", label: "Home" },
    { href: "#", label: "Planner" },
    { href: "#", label: "About" },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeHeight = 100; // Height of the fade effect
  const fadeStart = 10; // Start fading at this scroll position
  const fadeEnd = fadeStart + fadeHeight;

  const opacity = Math.max(
    0,
    Math.min(1, (scrollY - fadeStart) / (fadeEnd - fadeStart))
  );

  return (
    <nav>
      <Disclosure as="div" className="z-50 fixed top-0 right-0 left-0">
        <div
          className={cn(
            "container md:mx-auto md:my-4 py-4 px-8",
            "bg-white dark:bg-neutral-800/80 border-slate-900/10",
            "md:border-0 border-y",
            "md:shadow-xl md:rounded-[14px]"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Branding */}
            <div className="flex items-center space-x-2">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
              >
                <path
                  fillRule="evenodd"
                  d="M.11 3.187A.5.5 0 01.5 3h13a.5.5 0 01.488.608l-.22.991a3.001 3.001 0 01-1.3 5.854l-.132.59A2.5 2.5 0 019.896 13H4.104a2.5 2.5 0 01-2.44-1.958L.012 3.608a.5.5 0 01.098-.42zm12.574 6.288a2 2 0 00.866-3.899l-.866 3.9zM1.124 4l1.516 6.825A1.5 1.5 0 004.104 12h5.792a1.5 1.5 0 001.464-1.175L12.877 4H1.123z"
                />
              </svg>
              <span className="text-lg font-semibold">KUSSP</span>
            </div>
            {/* Desktop Link Options */}
            <ul className="hidden md:flex flex-wrap items-center justify-center space-x-1 list-none">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex items-center justify-center rounded-full px-3 py-1.5 text-sm font-semibold transition-colors",
                      "text-lg",
                      "hover:bg-gray-200 hover:text-gray-900",
                      "focus:bg-gray-200 focus:text-gray-900 focus:outline-none",
                      "active:bg-gray-300"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Third object for alignment */}
            <div className="hidden md:block w-[92px]" aria-hidden="true" />
            {/* Mobile menu button*/}
            <div className={"flex items-center md:hidden"}>
              <DisclosureButton
                className={cn(
                  "group relative inline-flex items-center justify-center",
                  "rounded-md p-2",
                  " hover:bg-neutral-700 hover:text-white"
                )}
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <CancelIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>
        {/* Mobile Link Menu */}
        <DisclosurePanel
          className={cn(
            "md:hidden rounded-b-md shadow-md z-40",
            "bg-neutral-50/85 backdrop-blur dark:bg-neutral-900",
            "origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
          )}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {links.map((link) => (
              <DisclosureButton
                key={link.href}
                as="a"
                href={link.href}
                className={cn(
                  "w-full block px-3 py-2",
                  "flex flex-col items-center rounded-md",
                  "hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-neutral-800 dark:hover:text-foreground",
                  "focus:bg-gray-200 focus:text-gray-900 focus:outline-none",
                  "active:bg-gray-300"
                )}
              >
                <span
                  className={cn(
                    "rounded-md text-base font-semibold",
                    "hover:focus:underline underline-offset-4 decoration-2"
                  )}
                >
                  {link.label}
                </span>
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      {/* Fade content */}
      <div>
        <div
          className="dark:hidden pointer-events-none fixed top-0 left-0 right-0 z-40 h-40"
          aria-hidden
          style={{
            background: `linear-gradient(to bottom, rgba(255,255,255,${opacity}) 0%, rgba(255,255,255,${opacity}) 50%, rgba(255,255,255,0) 100%)`,
          }}
        />
        <div
          className="hidden dark:block pointer-events-none fixed top-0 left-0 right-0 z-40 h-40"
          aria-hidden
          style={{
            background: `linear-gradient(to bottom, rgba(39, 39, 42, ${opacity}) 0%, rgba(39, 39, 42, ${opacity}) 50%, rgba(39, 39, 42, 0) 100%)`,
          }}
        />
      </div>
    </nav>
  );
}
