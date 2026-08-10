"use client";

import Link from "next/link";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

function GithubIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2C6.48 2 2 6.58 2 12.22C2 16.74 4.87 20.56 8.84 21.91C9.34 22.01 9.52 21.69 9.52 21.41C9.52 21.16 9.51 20.5 9.5 19.62C6.73 20.25 6.14 18.24 6.14 18.24C5.69 17.05 5.03 16.73 5.03 16.73C4.12 16.09 5.1 16.1 5.1 16.1C6.1 16.18 6.62 17.16 6.62 17.16C7.52 18.75 8.97 18.3 9.54 18.03C9.63 17.37 9.89 16.92 10.17 16.67C7.96 16.41 5.64 15.54 5.64 11.69C5.64 10.59 6.02 9.69 6.64 8.98C6.54 8.72 6.19 7.69 6.73 6.31C6.73 6.31 7.55 6.04 9.5 7.4C10.29 7.17 11.14 7.06 12 7.06C12.86 7.06 13.71 7.17 14.5 7.4C16.45 6.04 17.27 6.31 17.27 6.31C17.81 7.69 17.46 8.72 17.36 8.98C17.98 9.69 18.36 10.59 18.36 11.69C18.36 15.55 16.04 16.4 13.82 16.66C14.17 16.97 14.48 17.58 14.48 18.52C14.48 19.87 14.47 20.96 14.47 21.41C14.47 21.69 14.65 22.02 15.16 21.91C19.13 20.56 22 16.74 22 12.22C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5.17 7.08C4.05 7.08 3.13 6.16 3.13 5.04C3.13 3.92 4.05 3 5.17 3C6.29 3 7.21 3.92 7.21 5.04C7.21 6.16 6.29 7.08 5.17 7.08ZM3.41 21H6.93V8.23H3.41V21ZM9.13 8.23H12.51V9.97H12.56C13.03 9.08 14.18 8.14 16.43 8.14C20.02 8.14 20.68 10.5 20.68 13.58V21H17.16V14.43C17.16 12.86 17.13 10.84 14.97 10.84C12.77 10.84 12.43 12.56 12.43 14.34V21H8.91L9.13 8.23Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 7H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 12H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 17H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-[#e3e3e3] font-sentient text-[#0d0d0d]">
      {/* Navigation - Aligned to the Right */}
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-end px-6 py-8 lg:px-12">
        <div className="hidden items-center gap-10 text-sm font-semibold uppercase tracking-[0.2em] md:flex">
          <Link
            href="/"
            className="border-b-2 border-[#0d0d0d] pb-0.5 font-bold text-[#0d0d0d]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-[#525252] transition-colors hover:text-[#0d0d0d]"
          >
            About
          </Link>

          <Link
            href="/experience"
            className="text-[#525252] transition-colors hover:text-[#0d0d0d]"
          >
            Experience
          </Link>

          <Link
            href="/projects"
            className="text-[#525252] transition-colors hover:text-[#0d0d0d]"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="text-[#525252] transition-colors hover:text-[#0d0d0d]"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="flex h-11 w-11 items-center justify-center border border-[#0d0d0d] bg-[#0d0d0d] text-white md:hidden"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-y border-[#0d0d0d] bg-[#0d0d0d] px-6 py-6 text-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm uppercase tracking-widest">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-bold text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#a3a3a3]"
            >
              About
            </Link>

            <Link
              href="/experience"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#a3a3a3]"
            >
              Experience
            </Link>

            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#a3a3a3]"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#a3a3a3]"
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-12 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Main Title & Bio */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className={`${headingFont.className} text-[clamp(3.5rem,7vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-[#0d0d0d]`}>
                Jumana <br />
                Jouhar
              </h1>

              <p className="mt-8 max-w-lg text-lg italic leading-relaxed text-[#525252]">
                A Computer Science graduate looking to build a career in technology and take on new challenges.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="bg-[#0d0d0d] px-9 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#262626]"
              >
                Explore Work
              </Link>

              <Link
                href="/about"
                className="border border-[#0d0d0d] bg-transparent px-9 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#0d0d0d] transition-all hover:bg-[#0d0d0d] hover:text-white"
              >
                About Me
              </Link>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col gap-12 lg:pl-8">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[#525252]">
                Areas I Work In
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Software Development",
                  "Testing",
                  "Automation",
                  "Data",
                  "AI / ML",
                  "Research",
                ].map((area) => (
                  <span
                    key={area}
                    className="border border-[#0d0d0d]/30 bg-transparent px-4 py-2.5 text-sm font-medium uppercase tracking-wider text-[#0d0d0d] transition-colors hover:border-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#525252]">
                Status
              </p>
              <p className="font-sentient mt-2 text-lg font-medium tracking-wide text-[#0d0d0d]">
                Open to Opportunities · Singapore / Remote
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-20 border-t border-[#0d0d0d]/20 pt-8">
          <div className="flex items-center gap-7">
            <a
              href="https://github.com/jumanajouhar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#0d0d0d] transition-all hover:opacity-50"
            >
              <GithubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/jumana-jouhar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#0d0d0d] transition-all hover:opacity-50"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}