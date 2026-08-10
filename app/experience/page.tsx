"use client";

import Link from "next/link";
import { useState } from "react";

function GithubIcon() {
  return (
    <svg
      width="19"
      height="19"
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
      width="19"
      height="19"
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
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4 7H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const experiences = [
  {
    company: "DBS Bank",
    role: "Production Support Trainee, Group Technology",
    period: "Dec 2025 – Jun 2026",
    location: "Singapore",
    skills: ["Jira", "Confluence", "SIT / UAT Testing", "Disaster Recovery"],
    points: [
      "Performed System Integration Testing (SIT) and User Acceptance Testing (UAT) during ATM switch migration for ATM, ATM+, BTM, and BTM+ applications by preparing test data, analyzing backend logs across legacy and new systems, documenting test outcomes, developing technical documentation in Confluence, and tracking defects via Jira.",
      "Supported Knowledge Base (KB) initiative and application rollout by onboarding multiple Group Technology (Applications) teams onto KB Hub and Claude Code, creating user guides, conducting user demos, tracking team progress to completion, and supporting UAT execution.",
      "Supported critical Change Requests (CRs) and Disaster Recovery (DR) activities during scheduled maintenance windows by coordinating activities, tracking progress, and assisting teams throughout planned system changes across DBS applications.",
    ],
  },
  {
    company: "Ailytics",
    role: "Data Annotation Specialist Intern",
    period: "Aug 2025 – Nov 2025",
    location: "Singapore",
    skills: ["Python", "LabelMe", "YOLO", "Data Preprocessing", "Agile"],
    points: [
      "Collected, preprocessed, annotated, and validated 6,000+ images and test videos from existing IP camera infrastructure across multiple industrial safety and operational scenarios for custom YOLO-based object detection models using Python and LabelMe, supporting AI-powered video analytics within Agile sprint cycles.",
      "Developed scripts and applied data engineering best practices to improve data quality and workflow efficiency.",
      "Supported project documentation and participated in Agile activities including daily stand-ups, sprint planning, retrospectives, and team syncs to align with cross-functional teams.",
    ],
  },
  {
    company: "National Chung Cheng University",
    role: "Research Intern (TEEP Scholarship Program)",
    period: "Jul 2024 – Sep 2024",
    location: "Chiayi, Taiwan",
    skills: ["Hyperspectral Imaging", "AI & IoT", "Academic Writing", "Research"],
    points: [
      "Conducted research on Hyperspectral Imaging and its integration with AI and IoT for sustainable smart city applications, reviewing 150+ academic papers.",
      "Co-authored MDPI journal manuscripts (MDPI Technologies & MDPI Smart Cities) through literature reviews, conceptual frameworks, graphical abstracts, and manuscript editing.",
      "Delivered weekly technical presentations to supervisors and peers, earning an 'Excellent' evaluation grade along with a performance bonus.",
    ],
  },
];

export default function Experience() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#e3e3e3] font-sentient text-[#0d0d0d]">
      {/* Navigation */}
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 lg:px-12">
        <div className="hidden items-center gap-10 text-xs font-semibold uppercase tracking-[0.2em] md:flex">
          <Link
            href="/"
            className="text-[#525252] transition-colors hover:text-[#0d0d0d]"
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
            className="text-[#0d0d0d] font-bold border-b border-[#0d0d0d] pb-0.5"
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
          className="flex h-9 w-9 items-center justify-center border border-[#0d0d0d] bg-[#0d0d0d] text-white md:hidden"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-y border-[#0d0d0d] bg-[#0d0d0d] px-6 py-5 text-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs uppercase tracking-widest">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#a3a3a3]"
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
              className="text-white font-bold"
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

      {/* Main Content */}
      <section className="mx-auto flex w-full max-w-7xl flex-col justify-center px-6 pb-16 pt-4 lg:px-12">
        <h1 className="font-clash text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-[#0d0d0d]">
          Work Experience
        </h1>

        {/* Experience List */}
        <div className="mt-8 flex flex-col">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border-t border-[#0d0d0d] py-10 grid gap-8 md:grid-cols-[280px_1fr]"
            >
              {/* Left Column: Dates & Company Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#525252]">
                    {exp.period}
                  </span>
                  <h2 className="font-clash mt-1 text-2xl font-bold uppercase tracking-tight text-[#0d0d0d]">
                    {exp.company}
                  </h2>
                  <p className="mt-1 text-xs italic text-[#525252]">
                    {exp.role} · {exp.location}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-[#0d0d0d] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#0d0d0d]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Bullet Points */}
              <div className="flex items-center">
                <ul className="flex flex-col gap-3 text-sm leading-relaxed text-[#0d0d0d]">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0d0d0d]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Divider & Links */}
        <div className="border-t border-[#0d0d0d] pt-8">
          <div className="flex items-center gap-6">
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