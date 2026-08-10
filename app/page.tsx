"use client";

import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";

const experiences = [
  {
    company: "DBS Bank",
    role: "Production Support Trainee, Group Technology",
    period: "Dec 2025 – Jun 2026",
    location: "Singapore",
    logo: "/dbs.jpg",
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
    logo: "/ailytics.jpg",
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
    logo: "/ccu.jpg",
    skills: ["Hyperspectral Imaging", "AI & IoT", "Academic Writing", "Research"],
    points: [
      "Conducted research on Hyperspectral Imaging and its integration with AI and IoT for sustainable smart city applications, reviewing 150+ academic papers.",
      "Co-authored MDPI journal manuscripts (MDPI Technologies & MDPI Smart Cities) through literature reviews, conceptual frameworks, graphical abstracts, and manuscript editing.",
      "Delivered weekly technical presentations to supervisors and peers, earning an 'Excellent' evaluation grade along with a performance bonus.",
    ],
  },
];

function BrandLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center border border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] transition-colors">
        <span className="text-sm font-bold tracking-tighter">
          JJ
        </span>
      </div>
      <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--foreground)]">
        Portfolio
      </span>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.22C2 16.74 4.87 20.56 8.84 21.91C9.34 22.01 9.52 21.69 9.52 21.41C9.52 21.16 9.51 20.5 9.5 19.62C6.73 20.25 6.14 18.24 6.14 18.24C5.69 17.05 5.03 16.73 5.03 16.73C4.12 16.09 5.1 16.1 5.1 16.1C6.1 16.18 6.62 17.16 6.62 17.16C7.52 18.75 8.97 18.3 9.54 18.03C9.63 17.37 9.89 16.92 10.17 16.67C7.96 16.41 5.64 15.54 5.64 11.69C5.64 10.59 6.02 9.69 6.64 8.98C6.54 8.72 6.19 7.69 6.73 6.31C6.73 6.31 7.55 6.04 9.5 7.4C10.29 7.17 11.14 7.06 12 7.06C12.86 7.06 13.71 7.17 14.5 7.4C16.45 6.04 17.27 6.31 17.27 6.31C17.81 7.69 17.46 8.72 17.36 8.98C17.98 9.69 18.36 10.59 18.36 11.69C18.36 15.55 16.04 16.4 13.82 16.66C14.17 16.97 14.48 17.58 14.48 18.52C14.48 19.87 14.47 20.96 14.47 21.41C14.47 21.69 14.65 22.02 15.16 21.91C19.13 20.56 22 16.74 22 12.22C22 6.58 17.52 2 12 2Z" fill="currentColor"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5.17 7.08C4.05 7.08 3.13 6.16 3.13 5.04C3.13 3.92 4.05 3 5.17 3C6.29 3 7.21 3.92 7.21 5.04C7.21 6.16 6.29 7.08 5.17 7.08ZM3.41 21H6.93V8.23H3.41V21ZM9.13 8.23H12.51V9.97H12.56C13.03 9.08 14.18 8.14 16.43 8.14C20.02 8.14 20.68 10.5 20.68 13.58V21H17.16V14.43C17.16 12.86 17.13 10.84 14.97 10.84C12.77 10.84 12.43 12.56 12.43 14.34V21H8.91L9.13 8.23Z" fill="currentColor"/>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 7H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-[var(--foreground)] font-sentient bg-transparent">
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navigation Bar */}
        <nav className="fixed top-0 z-50 w-full bg-[var(--nav-bg)] backdrop-blur-md transition-colors border-b border-[var(--border)]">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
            <a href="#home">
              <BrandLogo />
            </a>

            <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.15em] md:flex">
              <a href="#home" className="text-[var(--foreground)] hover:opacity-70">Home</a>
              <a href="#about" className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">About</a>
              <a href="#experience" className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">Experience</a>
              <a href="#projects" className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">Projects</a>
              <a href="#contact" className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">Contact</a>
              
              <a
                href="/Jumana_Jouhar_Resume.pdf"
                download
                className="border border-[var(--foreground)] bg-[var(--foreground)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--background)] transition-all hover:opacity-85"
              >
                Resume ↓
              </a>

              <ThemeToggle />
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                className="flex h-11 w-11 items-center justify-center border border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="border-y border-[var(--border)] bg-[var(--foreground)] px-6 py-6 text-[var(--background)] md:hidden">
              <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm font-medium uppercase tracking-[0.15em]">
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#about" onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100">About</a>
                <a href="#experience" onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100">Experience</a>
                <a href="#projects" onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100">Projects</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100">Contact</a>
                <a
                  href="/Jumana_Jouhar_Resume.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 text-left font-bold border-t border-[var(--background)]/20 pt-4"
                >
                  Download Resume ↓
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pt-28 pb-12 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="text-[clamp(2.25rem,3.5vw,3.25rem)] font-bold uppercase leading-[1.1] tracking-tight text-[var(--foreground)]">
                Jumana Jouhar
              </h1>

              <p className="mt-6 max-w-lg text-lg italic leading-relaxed text-[var(--muted)]">
                A Computer Science graduate looking to build a career in technology and take on new challenges.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="bg-[var(--foreground)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--background)] transition-all hover:opacity-90"
                >
                  Explore Work
                </a>

                <a
                  href="/Jumana_Jouhar_Resume.pdf"
                  download
                  className="border border-[var(--foreground)] bg-transparent px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--foreground)] transition-all hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                >
                  Download Resume ↓
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:pl-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
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
                      className="border border-[var(--border)] bg-[var(--card-bg)] px-4 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-[var(--foreground)] transition-colors hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                  Status
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.1em] text-[var(--foreground)]">
                  Open to Opportunities · Singapore / Remote
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mx-auto min-h-screen w-full max-w-7xl border-t border-[var(--border)] px-6 pt-28 pb-12 lg:px-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-[var(--foreground)]">
            About
          </h2>

          <div className="mt-10 grid items-start gap-12 lg:grid-cols-[280px_1fr]">
            {/* Headshot Visual */}
            <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden border border-[var(--border)] bg-[var(--card-bg)] shadow-md">
              <img
                src="/headshot.jpeg"
                alt="Jumana Jouhar"
                className="h-full w-full object-cover grayscale contrast-105 transition-all duration-500 hover:scale-105 hover:grayscale-0"
              />
            </div>

            {/* Bio Details */}
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-[var(--muted)]">
                Computer science graduate centered on software development, test automation, and building reliable digital solutions.
              </p>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Experienced in full-cycle testing (SIT/UAT), data engineering pipelines, annotation workflows for computer vision models, and academic research in AI and IoT integration.
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="mx-auto min-h-screen w-full max-w-7xl border-t border-[var(--border)] px-6 pt-28 pb-12 lg:px-12">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-[var(--foreground)]">
            Work Experience
          </h2>

          <div className="mt-12 flex flex-col">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="border-t border-[var(--border)] py-10 grid gap-8 md:grid-cols-[300px_1fr]"
              >
                {/* Left Column: Logo, Dates, Role & Tags */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden border border-[var(--border)] bg-white p-1">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                      {exp.period}
                    </span>
                    <h3 className="mt-1 text-2xl font-bold uppercase tracking-tight text-[var(--foreground)]">
                      {exp.company}
                    </h3>
                    <p className="mt-1 text-xs italic text-[var(--muted)]">
                      {exp.role} · {exp.location}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-[var(--border)] bg-[var(--card-bg)] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--foreground)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Bullet Points */}
                <div className="flex items-center">
                  <ul className="flex flex-col gap-3 text-sm leading-relaxed text-[var(--foreground)]">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--foreground)]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mx-auto min-h-screen w-full max-w-7xl border-t border-[var(--border)] px-6 pt-28 pb-12 lg:px-12">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-[var(--foreground)]">
            Projects
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            A showcase of data manipulation pipelines, automated tools, and software solutions.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mx-auto min-h-screen w-full max-w-7xl flex flex-col justify-between border-t border-[var(--border)] px-6 pt-28 pb-12 lg:px-12">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-[var(--foreground)]">
              Contact
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
              Get in touch for software development or technical opportunities.
            </p>
          </div>

          <div className="mt-20 border-t border-[var(--border)] pt-8">
            <div className="flex items-center gap-7">
              <a
                href="https://github.com/jumanajouhar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[var(--foreground)] transition-all hover:opacity-50"
              >
                <GithubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/jumana-jouhar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[var(--foreground)] transition-all hover:opacity-50"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}