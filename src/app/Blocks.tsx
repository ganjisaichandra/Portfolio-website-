"use client";

import * as React from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  BarChart3,
  Briefcase,
  ArrowRight,
  Menu,
  X,
  Trophy,
  Zap,
  Award,
  Link,
  GraduationCap,
} from "lucide-react";
import {
  Card,
  Chip,
  Container,
  InViewFadeUp,
  Section,
} from "./primitives";
import { SiteBackground } from "@/components/SiteBackground";
import { ThemeToggle } from "@/components/ThemeToggle";

/** ======== NAVBAR (Tailwind Plus Style) ======== */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Coding Profile", href: "#profiles" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setIsMenuOpen(false);
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-zinc-800/60 dark:bg-zinc-950/75">
      <Container className="h-16 flex items-center justify-between md:justify-center md:relative">
        <div className="flex items-center md:absolute md:left-0">
          <img src="/projects/Profile.jpg" alt="Sai Chandra" className="h-8 w-8 rounded-full border border-gray-200 object-cover dark:border-zinc-700 md:hidden" />
        </div>
        <nav className="hidden md:flex items-center justify-center">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10 dark:shadow-black/30">
            {navItems.map((item) => (
              <li key={item.href}><a href={item.href} className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">{item.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2 md:absolute md:right-0">
          <ThemeToggle />
          <button onClick={toggleMenu} className="md:hidden p-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden border-t border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <Container>
            <nav className="flex flex-col py-4 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu} className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-teal-500 dark:text-gray-400 dark:hover:bg-zinc-900 dark:hover:text-teal-400">{item.label}</a>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

/** ======== HERO (Tailwind Plus Grid Style) ======== */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <Container className="py-12 sm:py-20 lg:py-24">
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[3fr_2fr]">
          {/* Left Column - Main Heading */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600 dark:text-gray-400">
                Mechanical Engineer & Designer
              </p>
              <h1 className="mt-2 text-6xl tracking-tighter sm:text-8xl text-pretty font-bold text-gray-900 dark:text-gray-50">
                Building delightful <span className="underline decoration-red-800/30">UIs</span> and <span className="underline decoration-orange-500/30">data stories</span>
              </h1>
            </InViewFadeUp>
          </div>

          {/* Right Column - Image, Description & Actions */}
          <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] gradient-border-l">
            {/* Profile Image */}
            <div className="px-4 py-2 max-lg:line-y max-lg:mt-6 sm:px-2">
              <InViewFadeUp delay={0.05}>
                <div className="relative w-full max-w-sm mx-auto lg:max-w-full">
                  <div className="aspect-square overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-700/60 bg-gray-100 dark:bg-zinc-800 shadow-sm">
                    <img
                      src="/projects/Profile.jpg"
                      alt="Sai Chandra"
                      className="h-full w-full object-cover sepia"
                      loading="eager"
                    />
                  </div>
                </div>
              </InViewFadeUp>
            </div>

            {/* Description */}
            <div className="flex items-center px-4 py-2 max-lg:line-y max-lg:mt-6 sm:px-2">
              <InViewFadeUp delay={0.1}>
                <p className="max-w-2xl text-lg leading-7 font-medium text-pretty text-gray-600 dark:text-gray-400">
                  Mechanical Engineer turned Frontend & Data enthusiast. I design
                  and build interactive web experiences and create meaningful
                  insights using Power BI, Python, and UI/UX principles.
                </p>
              </InViewFadeUp>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 px-4 py-2 whitespace-nowrap max-lg:line-t max-lg:mt-6 sm:px-2 gradient-border-t">
              <InViewFadeUp delay={0.2}>
                <a
                  href="#projects"
                  className="gap-2 inline-flex justify-center rounded-full text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-950 text-white hover:bg-gray-800 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400 focus-visible:outline-gray-950 px-4 py-2 transition-colors"
                >
                  View Projects
                  <svg
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 10 10"
                    className="-mr-0.5 w-2.5"
                  >
                    <path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z"></path>
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="gap-2 inline-flex justify-center rounded-full text-sm font-semibold ring-1 text-gray-950 ring-gray-950/10 hover:ring-gray-950/20 dark:text-gray-100 dark:ring-white/15 dark:hover:ring-white/25 px-4 py-2 transition-colors p-6 surface-card duration-300 hover:border-teal-500 hover:shadow-lg hover:-translate-y-0.2 dark:hover:bg-zinc-800/80"
                >
                  Contact
                  <svg
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 10 10"
                    className="-mr-0.5 w-2.5 fill-gray-600 dark:fill-gray-400"
                  >
                    <path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z"></path>
                  </svg>
                </a>
              </InViewFadeUp>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** ======== ABOUT (Grid-Based Style) ======== */
export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-transparent">
      <Container>
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          {/* Left Column - Title */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600 dark:text-gray-400">
                About
              </p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900 dark:text-gray-50">
                Hi, I'm G.S.V. Sai Chandra
              </h2>
            </InViewFadeUp>
          </div>

          {/* Right Column - Content */}
          <div className="grid grid-cols-1 grid-rows-[1fr_auto] gradient-border-l">
            <div className="flex items-center px-4 py-2 max-lg:line-y max-lg:mt-6 sm:px-2">
              <InViewFadeUp delay={0.1}>
                <p className="max-w-2xl text-lg leading-7 font-medium text-pretty text-gray-600 dark:text-gray-400">
                  I'm a Mechanical Engineering student who loves turning ideas into
                  clean, responsive interfaces and meaningful data visuals. I work
                  across design <span className="underline decoration-red-800/30">(Figma)</span>, frontend <span className="underline decoration-red-800/30">(React, Tailwind)</span>, and analytics
                  <span className="underline decoration-red-800/30">(Python, SQL, Power BI)</span> to build products that feel fast and tell
                  a story.
                </p>
              </InViewFadeUp>
            </div>
            <div className="px-4 py-2 max-lg:line-t max-lg:mt-6 sm:px-2 gradient-border-t">
              <InViewFadeUp delay={0.2}>
                <div className="flex items-start gap-4 p-4 surface-card">
                  <div className="h-12 w-12 rounded-lg bg-gray-900 text-white dark:bg-teal-950 dark:ring-1 dark:ring-teal-500/20 grid place-items-center text-lg font-bold flex-shrink-0">
                    SC
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-50 mb-1">Open to Internships</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      UI/UX Design | Frontend | Data/Business Intelligence | Product Management 
                    </div>
                  </div>
                </div>
              </InViewFadeUp>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** ======== EDUCATION (Grid-Based Style) ======== */
export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Mechanical Engineering",
      institution: "NIT Andhra Pradesh",
      period: "2026",
      description: "Focused on engineering principles, design systems, and data analysis. Relevant coursework includes CAD/CAM, Thermodynamics, and Engineering Mathematics.",
      highlights: ["Project Excellence Award",],
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-24 surface-section-alt">
      <Container>
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          {/* Left Column - Title */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600 dark:text-gray-400">
                Education
              </p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900 dark:text-gray-50">
                Academic background
              </h2>
            </InViewFadeUp>
          </div>

          {/* Right Column - Education Cards */}
          <div className="px-4 py-2 max-lg:mt-6 sm:px-2 gradient-border-l">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <InViewFadeUp key={index} delay={index * 0.1}>
                  <div className="p-6 surface-card transition-all duration-300 hover:border-teal-500 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-lg bg-gray-900 text-white dark:bg-teal-950 dark:ring-1 dark:ring-teal-500/20 grid place-items-center">
                          <GraduationCap className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                              {edu.degree}
                            </h3>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                              {edu.institution}
                            </p>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                          {edu.description}
                        </p>
                        {edu.highlights && edu.highlights.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {edu.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-teal-950/60 dark:text-teal-300"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </InViewFadeUp>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** ======== SKILLS (Grid-Based Style) ======== */
export function Skills() {
  const groups = [
    {
      label: "Frontend",
      items: ["React", "Next.js", "Tailwind", "Framer Motion", "Vite"],
    },
    {
      label: "Design",
      items: [
        "Figma",
        "Photoshop",
        "Illustrator",
        "Design Systems",
        "Prototyping",
        "Illustration",
      ],
    },
    {
      label: "Data / BI",
      items: ["Power BI", "SQL", "Python", "Pandas", "Tableau"],
    },
    { label: "Tools", items: ["GitHub", "Vercel", "Colab", "VS Code"]
     },
     {
      label: "Artificial Intelligence",
      items: ["Hugging Face", "OpenAI", "Google AI", "Claude", "Gemini", "Machine Learning", "NLP", "Streamlit"],
     }
  ];
  return (
    <section id="skills" className="py-16 sm:py-24 bg-transparent">
      <Container>
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          {/* Left Column - Title */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600 dark:text-gray-400">
                Skills
              </p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900 dark:text-gray-50">
                <span className="underline decoration-red-800/30">What I work with</span>
              </h2>
            </InViewFadeUp>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="px-4 py-2 max-lg:mt-6 sm:px-2 gradient-border-l">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {groups.map((g, idx) => (
                <InViewFadeUp key={g.label} delay={idx * 0.1}>
                  <div className="p-5 surface-card transition-all duration-300 hover:border-teal-500 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-50">{g.label}</div>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-full bg-gray-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-gray-700 dark:text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </InViewFadeUp>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** ======== CODING PROFILES ======== */
type Profile = {
  platform: string;
  handle: string;
  link: string;
  highlight: string;
  badges: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export function CodingProfiles() {
  const profiles: Profile[] = [
    {
      platform: "HackerRank",
      handle: "SaiChandra",
      link: "https://www.hackerrank.com/profile/saichandra38gan1",
      highlight: "Problem Solving",
      badges: ["Python", "SQL"],
      icon: Trophy,
    },
  ];

  return (
    <section id="profiles" className="py-16 sm:py-24 surface-section-alt">
      <Container>
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          {/* Left Column - Title */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600 dark:text-gray-400">
                Coding Profiles
              </p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900 dark:text-gray-50">
                Proof of practice
              </h2>
              <p className="mt-6 text-lg leading-7 text-gray-600 dark:text-gray-400 max-w-md">
                Consistent competitive programming practice on HackerRank to keep my
                fundamentals sharp.
              </p>
            </InViewFadeUp>
          </div>

          {/* Right Column - Profile Cards */}
          <div className="px-4 py-2 max-lg:mt-6 sm:px-2 gradient-border-l">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profiles.map((profile) => {
                const Icon = profile.icon;
                return (
                  <InViewFadeUp key={profile.platform}>
                    <a
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col surface-card p-5 transition-all duration-300 hover:border-teal-500 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-lg bg-gray-100 dark:bg-zinc-800 p-2 text-gray-700 dark:text-zinc-300 group-hover:bg-gray-200 dark:group-hover:bg-zinc-700 transition-colors">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                            {profile.platform}
                          </div>
                        </div>
                        <Zap className="h-4 w-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="mt-3 text-2xl font-bold text-gray-900 dark:text-gray-50">
                        {profile.handle}
                      </div>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{profile.highlight}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {profile.badges.map((badge) => (
                          <span
                            key={badge}
                            className="inline-flex items-center rounded-full bg-gray-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-gray-700 dark:text-zinc-300"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </a>
                  </InViewFadeUp>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** ======== PROJECTS (Premium Card Style) ======== */
interface ProjectCardProps { index: number; title: string; summary: string; tags?: string[]; github: string; }
function ProjectCard({ index, title, summary, tags = [], github }: ProjectCardProps) {
  return (
    <InViewFadeUp>
      <article className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-700/55 bg-white/80 dark:bg-zinc-900/70 p-8 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_24px_60px_-20px_rgba(20,184,166,0.22)] dark:hover:shadow-[0_24px_60px_-20px_rgba(45,212,191,0.18)] sm:p-10">
        <motion.div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-teal-400/15 via-orange-300/10 to-transparent blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
        <motion.div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
        <div className="relative">
          <div className="mb-8 flex items-center justify-between gap-4 border-b border-gray-200 dark:border-zinc-700/60 pb-6">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-teal-600 dark:text-teal-400">Project {String(index).padStart(2, "0")}</span>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-gray-200 via-gray-300 dark:via-zinc-600 to-transparent sm:block" />
            <BarChart3 className="h-5 w-5 text-gray-300 dark:text-zinc-600 transition-colors duration-300 group-hover:text-teal-500" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 transition-colors duration-300 group-hover:text-gray-950 dark:group-hover:text-white sm:text-3xl">{title}</h3>
            <p className="max-w-2xl text-base leading-7 font-medium text-gray-600 dark:text-gray-400 sm:text-lg">{summary}</p>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {tags.map((tag) => (<span key={tag} className="chip-outline">{tag}</span>))}
              </div>
            )}
          </div>
          <div className="mt-8 flex flex-col gap-4 border-t border-gray-200 dark:border-zinc-700/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Explore the build, code, and implementation details.</p>
            <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gray-950 px-5 dark:bg-teal-500 dark:text-zinc-950 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800 dark:hover:bg-teal-400 hover:gap-3">View project <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </article>
    </InViewFadeUp>
  );
}
export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 surface-section">
      <Container>
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600 dark:text-gray-400">Projects</p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900 dark:text-gray-50">Selected work</h2>
            </InViewFadeUp>
          </div>
          <div className="px-4 py-2 max-lg:mt-6 sm:px-2 gradient-border-l">
            <div className="space-y-8">
              <ProjectCard index={1} title="Bus Route & Timing Optimization" summary="Analyzed 100+ bus operation records to identify route and passenger-flow inefficiencies, visualizing delays and crowding through an interactive Excel dashboard. Applied rule-based AI recommendations to optimize scheduling, reducing delays by 20–30% and improving resource utilization." tags={["Python", "Analytics", "Optimization", "Excel", "Dashboards"]} github="https://github.com/ganjisaichandra/Bus-Route-and-Timing-Optimization" />
              <ProjectCard index={2} title="Product Reviews Sentiment Analysis" summary="Developed an AI-powered sentiment analysis web app using Python, Streamlit, and Transformers to classify Amazon/Flipkart reviews as Positive, Negative, or Neutral. Added charts, word clouds, and bulk CSV analysis with Matplotlib, Seaborn, and Pandas for enhanced insights and user experience." tags={["Python", "NLP", "Machine Learning", "Hugging Face", "pandas", "matplotlib", "streamlit", "WordCloud"]} github="https://ganjisaichandra-ai-product-review-sentiment-analyzer-app-qux1kx.streamlit.app/?embed_options=light_theme" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** ======== EXPERIENCE (Grid-Based Style) ======== */
export function Experience() {
  const experiences = [
    {
      company: "Nubra",
      role: "Graphic & UI/UX Designer Intern",
      period: "Jan 2026 - Present · 7 mos",
      description:
        "Designed and improved user experiences across mobile, web, and tablet platforms for a fintech trading product. Created UI designs for Orders, Market Overview, Wealth Dashboard, IPO, Mutual Funds, and Commodities. Collaborated with product managers and developers to translate requirements into intuitive interfaces. Built wireframes, interactive prototypes, and high-fidelity designs in Figma, while supporting the growth of Nubra's design system.",
      tags: [
        "Figma",
        "UI/UX Design",
        "Fintech",
        "Prototyping",
        "Design Systems",
        "Wireframing",
        "User Research",
        "Responsive Design",
        "Collaboration",
        "Interaction Design",
        "Visual Design",
        "Accessibility",
        "User-Centered Design",
      ],
    },
    {
      company: "Glint 247",
      role: "Product & UI/UX Designer",
      period: "July 2025 - Aug 2025",
      description: "Partnered with product leads and engineers to design landing pages & component-based UI systems, improving responsiveness and brand-consistency scores by 20%.",
      tags: ["Figma", "Framer", "UI/UX Design", "Design Systems", "Prototyping"],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 surface-section-alt">
      <Container>
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          {/* Left Column - Title */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600 dark:text-gray-400">
                Experience
              </p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900 dark:text-gray-50">
                Where I've worked
              </h2>
            </InViewFadeUp>
          </div>

          {/* Right Column - Experience Cards */}
          <div className="px-4 py-2 max-lg:mt-6 sm:px-2 gradient-border-l">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <InViewFadeUp key={index} delay={index * 0.1}>
                  <div className="p-6 surface-card transition-all duration-300 hover:border-teal-500 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-lg bg-gray-900 text-white dark:bg-teal-950 dark:ring-1 dark:ring-teal-500/20 grid place-items-center">
                          <Briefcase className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                              {exp.company}
                            </p>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                          {exp.description}
                        </p>
                        {exp.tags && exp.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 dark:bg-orange-950/50 dark:text-orange-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </InViewFadeUp>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** ======== CERTIFICATIONS ======== */
export function Certifications() {
  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera · Google",
      year: "2025",
      details: "Data cleaning, visualization, and dashboards with real-world case studies.",
    },
    {
      title: "Deloitte Australia - Data Analytics Job Simulation",
      issuer: "Forage",
      year: "2025",
      details: " Excel, End-to-end BI workflows: data modeling, DAX, and interactive reports.",
    },
    {
      title: "Machine Learning for Data Science using Python",
      issuer: "NIT Warangal",
      year: "2023",
      details: "Data cleaning, visualization, and machine learning with real-world case studies.",
    },
    {
      title: "Build a Full Website usingn WordPress",
      issuer: "Coursera",
      year: "2023",
      details: "Modern HTML, CSS, and WordPress development",
    }
  ];

  return (
    <section id="certifications" className="py-16 sm:py-24 surface-section">
      <Container>
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          {/* Left Column - Title */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600 dark:text-gray-400">
                Certifications
              </p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900 dark:text-gray-50">
                Verified skills
              </h2>
              <p className="mt-6 text-lg leading-7 text-gray-600 dark:text-gray-400 max-w-md">
                A snapshot of courses and credentials that back up my skills in data,
                analytics, and frontend development.
              </p>
            </InViewFadeUp>
          </div>

          {/* Right Column - List */}
          <div className="px-4 py-2 max-lg:mt-6 sm:px-2 gradient-border-l">
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <InViewFadeUp key={cert.title} delay={idx * 0.08}>
                  <div className="flex gap-4 surface-card p-4 transition-all duration-300 hover:border-teal-500 hover:shadow-lg hover:-translate-y-0.3">
                    <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-900 text-white dark:bg-teal-950 dark:ring-1 dark:ring-teal-500/20">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                          {cert.title}
                        </h3>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          {cert.year}
                        </span>
                      </div>
                      <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                        {cert.issuer}
                      </div>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {cert.details}
                      </p>
                    </div>
                  </div>
                </InViewFadeUp>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** ======== DESIGN WORK (Grid-Based Style) ======== */
export function DesignWork() {
  const designs = [
    { title: "Website Banner", image: "/projects/Mivi.jpg" },
    { title: "Website Banner", image: "/projects/AD.jpg" },
    { title: "Website Banner", image: "/projects/AD-2.jpg" },
    { title: "Creative Poster", image: "/projects/MSC.jpg" },
    { title: "Social Media Post", image: "/projects/Brand.jpg" },
    { title: "Social Media Post", image: "/projects/SOCD.jpg" },
    { title: "Product Mockup", image: "/projects/SOCD2.jpg" },
  ];

  return (
    <section id="design" className="py-16 sm:py-24 surface-section">
      <Container>
        {/* Grid Layout with Title and Content */}
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          {/* Left Column - Title Section */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 lg:border-r lg:border-gray-200 dark:lg:border-zinc-800">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600 dark:text-gray-400">
                Graphic Design
              </p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900 dark:text-gray-50">
                Creative Design Work
              </h2>
              <p className="mt-6 text-lg leading-7 text-gray-600 dark:text-gray-400 max-w-md">
                A collection of visual designs including banners, posters, and social media content.
              </p>
            </InViewFadeUp>
          </div>

          {/* Right Column - Vertical Autoscroll Carousel */}
          <div className="px-4 py-2 max-lg:mt-6 sm:px-2 gradient-border-l">
            <div className="relative h-[600px] sm:h-[700px] overflow-hidden rounded-2xl">
              {/* Fade gradients at top and bottom */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/90 to-transparent dark:from-zinc-950/90 z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/90 to-transparent dark:from-zinc-950/90 z-10 pointer-events-none" />
              
              {/* Scrolling container */}
              <div className="animate-scroll-vertical space-y-4">
                {/* First set of items */}
                {designs.map((item, index) => (
                  <DesignTile key={`first-${index}`} item={item} index={index} />
                ))}
                {/* Duplicate set for seamless loop */}
                {designs.map((item, index) => (
                  <DesignTile key={`second-${index}`} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type DesignItem = {
  title: string;
  image: string;
};

function DesignTile({ item, index }: { item: DesignItem; index: number }) {
  return (
    <div className="overflow-hidden surface-card group hover:border-teal-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <div className="w-full overflow-hidden bg-gray-100 dark:bg-zinc-800 p-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-full max-w-[90%] mx-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-3 border-t border-gray-200 dark:border-zinc-700/60">
        <p className="text-xs font-medium text-gray-700 dark:text-zinc-300 uppercase tracking-wide">{item.title}</p>
      </div>
    </div>
  );
}

/** ======== CONTACT (Grid-Based Style) ======== */
export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 surface-section">
      <Container>
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          {/* Left Column - Title */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600 dark:text-gray-400">
                Contact
              </p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900 dark:text-gray-50">
                Let's build something
              </h2>
            </InViewFadeUp>
          </div>

          {/* Right Column - Contact Cards */}
          <div className="px-4 py-2 max-lg:mt-6 sm:px-2 gradient-border-l">
            <div className="flex items-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                <InViewFadeUp delay={0.1}>
                  <a
                    href="mailto:saichandra38ganji@gmail.com"
                    className="group flex flex-col p-6 surface-card transition-all duration-300 hover:border-teal-500 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-zinc-800/80 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 group-hover:bg-gray-200 dark:group-hover:bg-zinc-700 transition-colors">
                        <Mail className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-gray-50">Email</div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors break-all">
                      saichandra38ganji@gmail.com
                    </div>
                  </a>
                </InViewFadeUp>

                <InViewFadeUp delay={0.2}>
                  <a
                    href="https://github.com/ganjisaichandra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col p-6 surface-card transition-all duration-300 hover:border-teal-500 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-zinc-800/80 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 group-hover:bg-gray-200 dark:group-hover:bg-zinc-700 transition-colors">
                        <Github className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-gray-50">GitHub</div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                      /ganjisaichandra
                    </div>
                  </a>
                </InViewFadeUp>

                <InViewFadeUp delay={0.3}>
                  <a
                    href="https://www.linkedin.com/in/ganji-sri-vijaya-sai-chandra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col p-6 surface-card transition-all duration-300 hover:border-teal-500 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-zinc-800/80 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 group-hover:bg-gray-200 dark:group-hover:bg-zinc-700 transition-colors">
                        <Linkedin className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-gray-50">LinkedIn</div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                      @G.S.V.Sai Chandra
                    </div>
                  </a>
                </InViewFadeUp>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** ======== FOOTER (Grid-Based Style) ======== */
export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-zinc-800 surface-section-alt py-12 sm:py-16">
      <Container>
        <div className="px-4 sm:px-2">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Sai Chandra — Portfolio
          </div>
        </div>
      </Container>
    </footer>
  );
}

/** ======== MAIN COMPOSITION ======== */
export default function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <SiteBackground className="fixed inset-0 -z-10" />
      <div className="relative z-0">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <CodingProfiles />
        <Projects />
        <Experience />
        <Certifications />
        <DesignWork />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
