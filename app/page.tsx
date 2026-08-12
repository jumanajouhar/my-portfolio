"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";
import { sendEmail } from "./actions/sendEmail";

const experiences = [
  {
    company: "DBS Bank",
    role: "Production Support Trainee, Group Technology",
    period: "Dec 2025 – Jun 2026",
    location: "Singapore",
    logo: "/dbs.jpg",
    skills: ["SIT / UAT Testing", "Jira", "Confluence", "Claude Code"],
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
    skills: ["Academic Writing", "Research", "Hyperspectral Imaging", "AI & IoT"],
    points: [
      "Conducted research on Hyperspectral Imaging and its integration with AI and IoT for sustainable smart city applications, reviewing 150+ academic papers.",
      "Co-authored MDPI journal manuscripts (MDPI Technologies & MDPI Smart Cities) through literature reviews, conceptual frameworks, graphical abstracts, and manuscript editing.",
      "Delivered weekly technical presentations to supervisors and peers, earning an 'Excellent' evaluation grade along with a performance bonus.",
    ],
  },
  {
    company: "Intel Corporation",
    role: "Intel Unnati Industrial Trainee",
    period: "May 2024 – Jul 2024",
    location: "Remote / India",
    logo: "/intel.jpg",
    skills: ["Python", "Streamlit","Natural Language Processing"],
    points: [
      "Developed an NLP-based business contract validation platform to classify content within contract clauses and highlight contract deviations from templates.",
      "Designed an interactive UI with dynamic views for multi-format document upload, deviation visualization, and clause display, ensuring seamless end-to-end user experience.",
      "Co-authored a technical report outlining system architecture and potential enhancements.",
    ],
  },
  {
    company: "Intel Corporation",
    role: "Intel Unnati Industrial Trainee",
    period: "May 2023 – Jul 2023",
    location: "Remote / India",
    logo: "/intel.jpg",
    skills: ["Python", "Machine Learning", "Scikit-Learn", "Data Preprocessing"],
    points: [
      "Secured 1st Place at Intel Unnati Industrial Training 2023 by implementing a high-performance ML pipeline for fake news detection using Python and scikit-learn.",
      "Engineered preprocessing workflows including stopword removal, lemmatization, and TF-IDF, evaluating six classifiers and selecting XGBoost as top performer.",
      "Improved logistic regression training speed by 1.8x using Intel® Extension for Scikit-learn, leading to a peer-reviewed publication in Procedia Computer Science.",
    ],
  },
];

const projects = [
  {
    title: "Digital Forensics Investigation in Vehicle Accident Cases",
    description:
      "Developed an end-to-end blockchain platform integrating React, Node.js, Firebase, Pinata IPFS, and smart contracts via Ganache and Truffle for tamper-proof crash data integrity, enhanced with Deepseek LLM for automated forensic reporting.",
    tags: ["Blockchain", "React", "Node.js", "IPFS", "Deepseek", "LLM"],
    github: "https://github.com/jumanajouhar/Crashchain",
  },
  {
    title: "Day/Night Photo Classification",
    description:
      "Classified 1,850+ images using OpenCV processing and MobileNetV2, incorporating OCR timestamp extraction for day and night categorization.",
    tags: ["Python", "OpenCV", "MobileNetV2", "COmputer Vision"],
    github: "https://github.com/jumanajouhar/day_night_classification",
  },
  {
    title: "Quickeval: Automated Answer Sheet Evaluator",
    description:
      "Built a full-stack MERN application leveraging GPT-4 Vision to automatically grade handwritten exam answer sheets, reducing grading time by 50% with secure Firebase authentication and Bytescale file management.",
    tags: ["React", "Node.js", "MongoDB", "GPT-4 Vision", "Firebase"],
    github: "https://github.com/jumanajouhar/QuickEval",
  },
  {
    title: "RoadVision: Real-Time Traffic Sign Recognition",
    description:
      "Trained a YOLOv8 object detection model on traffic sign datasets to process videos with high precision, generating annotated .avi outputs with bounding boxes and class-wise confidence scores.",
    tags: ["Python", "YOLOv8", "Computer Vision", "Object Detection"],
    github: "https://github.com/jumanajouhar/RoadVision",
  },
  {
    title: "Global Economic Data Analysis",
    description:
      "Developed a web application using IBM Cognos Analytics, Flask, HTML, CSS, and JavaScript to visualize large economic datasets, delivering interactive dashboards and reports for actionable insights.",
    tags: ["IBM Cognos", "Data Visualization", "Python", "Flask", "JavaScript"],
    github: "https://github.com/jumanajouhar/IBM-Hack-Challenge",
  },
];

const publications = [
  {
    title: "Modern Trends and Recent Applications of Hyperspectral Imaging: A Review",
    publisher: "Technologies (MDPI)",
    date: "Apr 23, 2025",
    description: "A comprehensive review highlighting cross-disciplinary applications of hyperspectral imaging across medicine, agriculture, and industry.",
    link: "https://www.mdpi.com/2227-7080/13/5/170",
  },
  {
    title: "Advancing Urban Development: Applications of Hyperspectral Imaging in Smart City Innovations",
    publisher: "Smart Cities (MDPI)",
    date: "Mar 14, 2025",
    description: "An open-access review exploring how hyperspectral imaging enhances smart city applications such as environmental monitoring.",
    link: "https://www.mdpi.com/2624-6511/8/2/51",
  },
  {
    title: "Fake News Detection Using Python and Machine Learning",
    publisher: "Procedia Computer Science (Elsevier)",
    date: "Apr 8, 2024",
    description: "Research exploring machine learning models to combat misinformation through data preprocessing, model training, and evaluation.",
    link: "https://www.sciencedirect.com/science/article/pii/S1877050924006252",
  },
];

function BrandLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center border border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] transition-colors">
        <span className="text-sm font-bold tracking-tighter">JJ</span>
      </div>
      <span className="text-base font-bold uppercase tracking-[0.15em] text-[var(--foreground)]">
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

function GmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
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

function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [projectPage, setProjectPage] = useState(0);
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const projectsPerPage = 3;
  const totalProjectPages = Math.ceil(projects.length / projectsPerPage);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jumanajouhar@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("success");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  const nextProjectPage = () => {
    setProjectPage((prev) => (prev + 1) % totalProjectPages);
  };

  const prevProjectPage = () => {
    setProjectPage((prev) => (prev - 1 + totalProjectPages) % totalProjectPages);
  };

  const nextExperience = () => {
    setExperienceIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setExperienceIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <div className="relative min-h-screen text-[var(--foreground)] bg-transparent">
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navigation Bar */}
        <nav className="fixed top-0 z-50 w-full bg-[var(--nav-bg)] backdrop-blur-md transition-colors border-b border-[var(--border)]">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
            <a href="#home">
              <BrandLogo />
            </a>

            <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.15em] md:flex">
              <a href="#home" className="text-[var(--foreground)] hover:text-[var(--accent-terracotta)] transition-colors">Home</a>
              <a href="#about" className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">About</a>
              <a href="#experience" className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">Experience</a>
              <a href="#projects" className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">Projects</a>
              <a href="#publications" className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">Publications</a>
              <a href="#contact" className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">Contact</a>
              
              <a
                href="/Jumana_Jouhar_Resume.pdf"
                download
                className="bg-[var(--btn-bg)] text-[var(--btn-text)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] rounded-full transition-all hover:opacity-90 shadow-sm"
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
                <a href="#publications" onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100">Publications</a>
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
        <section id="home" className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 pt-28 pb-16 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--card-bg)] text-[var(--accent-teal-dark)] border border-[var(--border)] mb-8 shadow-sm">
            Open to Opportunities · Singapore / Remote
          </span>

          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[var(--foreground)] leading-none mb-6">
            Jumana Jouhar
          </h1>

          <p className="text-sm md:text-base text-[var(--muted)] max-w-2xl mx-auto mb-8 leading-relaxed">
            A <span className="text-[var(--accent-terracotta)] font-semibold italic">Computer Science</span> graduate passionate about system implementation, driving quality assurance, and exploring intelligent systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto bg-[var(--btn-bg)] text-[var(--btn-text)] px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all hover:opacity-90 shadow-sm"
            >
              Explore Work
            </a>

            <a
              href="/Jumana_Jouhar_Resume.pdf"
              download
              className="w-full sm:w-auto border border-[var(--border)] bg-[var(--card-bg)] text-[var(--foreground)] px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:border-[var(--accent-terracotta)] hover:text-[var(--accent-terracotta)]"
            >
              Download Resume ↓
            </a>
          </div>

          <div className="w-full max-w-2xl pt-6 border-t border-[var(--border)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)] mb-4">
              Core Focus Areas
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {[
                "Software Development",
                "Software Testing & QA",
                "Data & AI/ML Applications",
                "Research",
              ].map((area) => (
                <span
                  key={area}
                  className="border border-[var(--border)] bg-[var(--card-bg)] px-4 py-2 rounded-full text-xs font-medium uppercase tracking-[0.1em] text-[var(--foreground)] transition-all hover:border-[var(--accent-teal-dark)] hover:text-[var(--accent-teal-dark)]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

              {/* About Section */}
<section id="about" className="mx-auto min-h-screen w-full max-w-5xl border-t border-[var(--border)] px-6 pt-24 pb-16 flex flex-col justify-center">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[var(--foreground)]">
      About <span className="text-[var(--accent-terracotta)] italic">Me</span>
    </h2>
  </div>

  <div className="grid items-center gap-10 md:grid-cols-[220px_1fr]">
    <div className="relative aspect-square w-full max-w-[220px] mx-auto rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] overflow-hidden shadow-sm transition-all duration-300 hover:border-[var(--accent-terracotta)]">
      <Image
        src="/headshot.png"
        alt="Jumana Jouhar Headshot"
        fill
        sizes="(max-width: 768px) 220px, 220px"
        priority
        draggable={false}
        className="object-contain pointer-events-none select-none transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 z-10 cursor-default" />
    </div>

    <div className="flex flex-col gap-6 text-center md:text-left p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] shadow-sm transition-all duration-300 hover:border-[var(--accent-terracotta)]">
      <p className="text-sm md:text-base leading-relaxed text-[var(--foreground)]">
        Computer Science and Engineering graduate from Saintgits College of Engineering with a Minor in Robotics and Automation. My background spans developing and testing technical solutions and handling data workflows across startups like Ailytics, dynamic banking environments like DBS, and research with National Chung Cheng University, with notable achievements including being named Winner of the Intel Unnati Industrial Training (Summer 2023).
      </p>
      <p className="text-sm md:text-base leading-relaxed text-[var(--muted)] border-t border-[var(--border)] pt-4">
        Open to diverse technology roles that leverage my adaptability, problem-solving skills, and collaborative mindset to contribute to impactful initiatives and grow within a forward-thinking organization.
      </p>
    </div>
  </div>
</section>

        {/* Work Experience Section */}
        <section id="experience" className="mx-auto min-h-screen w-full max-w-5xl border-t border-[var(--border)] px-6 pt-28 pb-16 flex flex-col justify-center">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[var(--foreground)]">
              Work <span className="text-[var(--accent-terracotta)] italic">Experience</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--muted)]">
              A history of professional roles, technical internships, and research experience.
            </p>
          </div>

          <div className="mt-12 relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${experienceIndex * 100}%)` }}
              >
                {experiences.map((exp, idx) => (
                  <div key={idx} className="w-full shrink-0 px-2">
                    <div className="p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] grid gap-8 md:grid-cols-[260px_1fr] h-full">
                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="relative mb-4 h-12 w-12 overflow-hidden bg-transparent">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={48}
                              height={48}
                              className="h-full w-full object-contain mix-blend-multiply dark:invert dark:mix-blend-screen"
                            />
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent-terracotta)]">
                            {exp.period}
                          </span>
                          <h3 className="text-2xl font-bold uppercase tracking-tight text-[var(--foreground)] mt-1">
                            {exp.company}
                          </h3>
                          <p className="text-xs italic text-[var(--muted)] mt-1">
                            {exp.role} · {exp.location}
                          </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-1.5">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider text-[var(--foreground)] font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center">
                        <ul className="flex flex-col gap-3 text-sm leading-relaxed text-[var(--foreground)]">
                          {exp.points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-terracotta)]" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevExperience}
                aria-label="Previous experience"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card-bg)] text-[var(--foreground)] transition-colors hover:border-[var(--accent-terracotta)] hover:text-[var(--accent-terracotta)] shadow-sm"
              >
                <ChevronLeftIcon />
              </button>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                {experienceIndex + 1} of {experiences.length}
              </span>

              <button
                onClick={nextExperience}
                aria-label="Next experience"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card-bg)] text-[var(--foreground)] transition-colors hover:border-[var(--accent-terracotta)] hover:text-[var(--accent-terracotta)] shadow-sm"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </section>

      {/* Featured Projects Section */}
<section id="projects" className="mx-auto min-h-screen w-full max-w-6xl border-t border-[var(--border)] px-6 pt-24 pb-16 flex flex-col justify-center">
  <div className="text-center">
    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[var(--foreground)]">
      Featured <span className="text-[var(--accent-terracotta)] italic">Projects</span>
    </h2>
    <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--muted)]">
      A showcase of software, data and AI/ML projects I have worked on.
    </p>
  </div>

  <div className="mt-10">
    <div className={
      projectPage === totalProjectPages - 1 && projects.length % projectsPerPage !== 0 
        ? "flex flex-wrap justify-center gap-6 md:max-w-4xl md:mx-auto" 
        : "grid gap-6 md:grid-cols-3"
    }>
      {projects
        .slice(projectPage * projectsPerPage, (projectPage + 1) * projectsPerPage)
        .map((proj, idx) => {
          const globalIndex = projectPage * projectsPerPage + idx;
          const isLastPagePartial = projectPage === totalProjectPages - 1 && projects.length % projectsPerPage !== 0;
          
          return (
            <div
              key={globalIndex}
              className={`flex flex-col justify-between p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] min-h-[340px] transition-all duration-300 hover:border-[var(--accent-terracotta)] ${
                isLastPagePartial ? "w-full md:w-[calc(50%-12px)] max-w-md" : "w-full"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent-teal-dark)]">
                    0{globalIndex + 1} / 0{projects.length}
                  </span>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--muted)] hover:text-[var(--accent-terracotta)] transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                  {proj.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 border-t border-[var(--border)] pt-4">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider text-[var(--foreground)] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
    </div>

    {/* Navigation Buttons for Projects */}
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        onClick={prevProjectPage}
        aria-label="Previous project page"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card-bg)] text-[var(--foreground)] transition-colors hover:border-[var(--accent-terracotta)] hover:text-[var(--accent-terracotta)] shadow-sm"
      >
        <ChevronLeftIcon />
      </button>

      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
        Page {projectPage + 1} of {totalProjectPages}
      </span>

      <button
        onClick={nextProjectPage}
        aria-label="Next project page"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card-bg)] text-[var(--foreground)] transition-colors hover:border-[var(--accent-terracotta)] hover:text-[var(--accent-terracotta)] shadow-sm"
      >
        <ChevronRightIcon />
      </button>
    </div>
  </div>
</section>

        {/* Publications Section (All 3 on 1 page) */}
<section id="publications" className="mx-auto min-h-screen w-full max-w-6xl border-t border-[var(--border)] px-6 pt-24 pb-16 flex flex-col justify-center">
  <div className="text-center">
    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[var(--foreground)]">
      Research <span className="text-[var(--accent-terracotta)] italic">Publications</span>
    </h2>
    <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--muted)]">
      Peer-reviewed articles and conference proceedings on hyperspectral imaging and machine learning.
    </p>
  </div>

  <div className="mt-10">
    <div className="grid gap-6 md:grid-cols-3">
      {publications.map((pub, idx) => (
        <div
          key={idx}
          className="flex flex-col justify-between p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] min-h-[340px] transition-all duration-300 hover:border-[var(--accent-terracotta)]"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent-teal-dark)]">
                {pub.date}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
              {pub.title}
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-terracotta)] mb-3">
              {pub.publisher}
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
              {pub.description}
            </p>
          </div>

          <div className="border-t border-[var(--border)] pt-4 flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--foreground)]">
              Peer-Reviewed
            </span>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent-terracotta)] hover:underline"
            >
              Show publication →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      
       {/* Contact Section */}
<section id="contact" className="mx-auto min-h-screen w-full max-w-3xl flex flex-col justify-center border-t border-[var(--border)] px-6 pt-28 pb-16">
  <div className="text-center">
    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[var(--foreground)]">
      Get In <span className="text-[var(--accent-terracotta)] italic">Touch</span>
    </h2>
    <p className="mt-4 max-w-xl mx-auto text-base text-[var(--muted)]">
      Send a message regarding any technical opportunities.
    </p>

    <form onSubmit={handleSubmit} className="mt-8 text-left flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--foreground)]">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Jane Doe"
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-[var(--muted)] transition-colors focus:border-[var(--accent-terracotta)] focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--foreground)]">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="jane@example.com"
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-[var(--muted)] transition-colors focus:border-[var(--accent-terracotta)] focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--foreground)]">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Project Inquiry / Job Opportunity"
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-[var(--muted)] transition-colors focus:border-[var(--accent-terracotta)] focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--foreground)]">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell me about the project or role..."
          className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-[var(--muted)] transition-colors focus:border-[var(--accent-terracotta)] focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-[var(--btn-bg)] text-[var(--btn-text)] px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all hover:opacity-90 disabled:opacity-50 shadow-sm"
        >
          {status === "submitting" ? "Sending..." : "Send Message →"}
        </button>

        {status === "success" && (
          <p className="text-xs uppercase tracking-wider text-[var(--accent-teal-dark)]" aria-live="polite">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-xs uppercase tracking-wider text-[var(--accent-terracotta)]" aria-live="polite">
            Failed to send. Please try again.
          </p>
        )}
      </div>
    </form>
  </div>

  <div className="mt-10 border-t border-[var(--border)] pt-6 flex justify-center">
    <div className="flex flex-wrap items-center justify-center gap-7">
      <a
        href="https://github.com/jumanajouhar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-[var(--foreground)] transition-all hover:text-[var(--accent-terracotta)]"
      >
        <GithubIcon />
      </a>

      <a
        href="https://www.linkedin.com/in/jumana-jouhar/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-[var(--foreground)] transition-all hover:text-[var(--accent-terracotta)]"
      >
        <LinkedinIcon />
      </a>

      <div className="flex items-center gap-3">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jumanajouhar@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send email via Gmail"
          className="text-[var(--foreground)] transition-all hover:text-[var(--accent-terracotta)]"
        >
          <GmailIcon />
        </a>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="border border-[var(--border)] bg-[var(--card-bg)] px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)] transition-colors hover:border-[var(--accent-terracotta)] hover:text-[var(--foreground)]"
        >
          {copied ? "Copied! ✓" : "jumanajouhar@gmail.com"}
        </button>
      </div>
    </div>
  </div>
</section>
      </div>
    </div>
  );
}