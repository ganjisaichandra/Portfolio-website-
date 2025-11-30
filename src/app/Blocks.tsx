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
} from "lucide-react";
import {
  Card,
  Chip,
  Container,
  InViewFadeUp,
  Section,
} from "./primitives";

/** ======== NAVBAR (Tailwind Plus Style) ======== */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
      <Container className="h-16 flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">Sai Chandra</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-gray-900 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-gray-900 transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden border-t border-gray-200 bg-white">
          <Container>
            <nav className="flex flex-col py-4 space-y-4">
              <a
                href="#about"
                onClick={closeMenu}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={closeMenu}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={closeMenu}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Projects
              </a>
              <a
                href="#experience"
                onClick={closeMenu}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Contact
              </a>
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
    <section className="relative overflow-hidden bg-gray">
      <Container className="py-12 sm:py-20 lg:py-24">
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[3fr_2fr]">
          {/* Left Column - Main Heading */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600">
                Mechanical Engineer & Designer
              </p>
              <h1 className="mt-2 text-6xl tracking-tighter sm:text-8xl text-pretty font-bold text-gray-900">
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
                  <div className="aspect-square overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-100 shadow-sm">
                    <img
                      src="/projects/Profile.jpg"
                      alt="Sai Chandra"
                      className="h-full w-full object-cover grayscale"
                      loading="eager"
                    />
                  </div>
                </div>
              </InViewFadeUp>
            </div>

            {/* Description */}
            <div className="flex items-center px-4 py-2 max-lg:line-y max-lg:mt-6 sm:px-2">
              <InViewFadeUp delay={0.1}>
                <p className="max-w-2xl text-lg leading-7 font-medium text-pretty text-gray-600">
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
                  className="gap-2 inline-flex justify-center rounded-full text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-950 text-white hover:bg-gray-800 focus-visible:outline-gray-950 px-4 py-2 transition-colors"
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
                  className="gap-2 inline-flex justify-center rounded-full text-sm font-semibold ring-1 text-gray-950 ring-gray-950/10 hover:ring-gray-950/20 px-4 py-2 transition-colors"
                >
                  Contact
                  <svg
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 10 10"
                    className="-mr-0.5 w-2.5 fill-gray-600"
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
    <section id="about" className="py-16 sm:py-24 bg-gray">
      <Container>
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          {/* Left Column - Title */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600">
                About
              </p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900">
                Hi, I'm G.S.V. Sai Chandra
              </h2>
            </InViewFadeUp>
          </div>

          {/* Right Column - Content */}
          <div className="grid grid-cols-1 grid-rows-[1fr_auto] gradient-border-l">
            <div className="flex items-center px-4 py-2 max-lg:line-y max-lg:mt-6 sm:px-2">
              <InViewFadeUp delay={0.1}>
                <p className="max-w-2xl text-lg leading-7 font-medium text-pretty text-gray-600">
                  I'm a Mechanical Engineering student who loves turning ideas into
                  clean, responsive interfaces and meaningful data visuals. I work
                  across design <span className="underline decoration-red-800/30">(Figma)</span>, frontend <span className="underline decoration-red-800/30">(React, Tailwind)</span>, and analytics
                  (Python, SQL, Power BI) to build products that feel fast and tell
                  a story.
                </p>
              </InViewFadeUp>
            </div>
            <div className="px-4 py-2 max-lg:line-t max-lg:mt-6 sm:px-2 gradient-border-t">
              <InViewFadeUp delay={0.2}>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200/80">
                  <div className="h-12 w-12 rounded-lg bg-gray-900 text-white grid place-items-center text-lg font-bold flex-shrink-0">
                    SC
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Open to Internships</div>
                    <div className="text-sm text-gray-600">
                      Product Management | Frontend | Data/Business Intelligence
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
    { label: "Tools", items: ["GitHub", "Vercel", "Colab", "VS Code"] },
  ];
  return (
    <section id="skills" className="py-16 sm:py-24 bg-gray">
      <Container>
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          {/* Left Column - Title */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600">
                Skills
              </p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900">
                <span className="underline decoration-red-800/30">What I work with</span>
              </h2>
            </InViewFadeUp>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="px-4 py-2 max-lg:mt-6 sm:px-2 gradient-border-l">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {groups.map((g, idx) => (
                <InViewFadeUp key={g.label} delay={idx * 0.1}>
                  <div className="p-5 bg-white rounded-lg border border-gray-200/80 shadow-sm hover:border-gray-300 transition-colors">
                    <div className="mb-3 text-sm font-semibold text-gray-900">{g.label}</div>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
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

/** ======== PROJECTS (Tailwind Plus Style) ======== */
function ProjectCard({ title, summary, tags = [], cover, github }: any) {
  return (
    <InViewFadeUp>
      <div className="group overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm hover:border-gray-300 hover:shadow-md transition-all">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className="aspect-video overflow-hidden bg-gray-100">
            {cover ? (
              <img
                src={cover}
                alt={title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="grid h-full place-items-center">
                <BarChart3 className="h-12 w-12 text-gray-300" />
              </div>
            )}
          </div>
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((t: string) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              View on GitHub
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </InViewFadeUp>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          {/* Left Column - Title */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600">
                Projects
              </p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900">
                Selected work
              </h2>
            </InViewFadeUp>
          </div>

          {/* Right Column - Projects */}
          <div className="px-4 py-2 max-lg:mt-6 sm:px-2 gradient-border-l">
            <div className="space-y-6">
              <ProjectCard
                title="Bus Route & Timing Optimization"
                summary="Analyzed 100+ records of bus operations to identify inefficiencies in route scheduling and passenger distribution. Built an interactive Excel dashboard with pivot tables and charts to visualize delays, crowding trends, and on-time performance. Applied rule-based AI recommendations to optimize bus timings and routes, achieving 20–30% reduction in average delays and improved resource utilization."
                tags={["Python", "Analytics", "Optimization", "Excel", "Dashboards"]}
                github="https://github.com/ganjisaichandra/Bus-Route-and-Timing-Optimization"
                cover="/projects/analytics.jpg"
              />

              <ProjectCard
                title="Product Reviews Sentiment Analysis"
                summary="Developed an AI-powered web application using Python, Streamlit, and Hugging Face Transformers to classify product reviews from platforms like Amazon and Flipkart into Positive, Negative, or Neutral sentiments. Implemented features such as sentiment distribution charts, word clouds for positive/negative reviews, and single/bulk CSV review analysis, enhancing user experience and data visualization using Matplotlib, Seaborn, and Pandas."
                tags={[
                  "Python",
                  "NLP",
                  "Machine Learning",
                  "Hugging Face",
                  "pandas",
                  "matplotlib",
                  "streamlit",
                  "WordCloud",
                ]}
                github="https://github.com/your-username/sentiment-analysis"
                cover="/projects/stream.jpg"
              />
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
      company: "Glint 247",
      role: "Product & UI/UX Designer",
      period: "July 2025 - Aug 2025",
      description: "Partnered with product leads and engineers to design landing pages & component-based UI systems, improving responsiveness and brand-consistency scores by 20%.",
      tags: ["Figma", "Framer", "UI/UX Design", "Design Systems", "Prototyping"],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          {/* Left Column - Title */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600">
                Experience
              </p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900">
                Where I've worked
              </h2>
            </InViewFadeUp>
          </div>

          {/* Right Column - Experience Cards */}
          <div className="px-4 py-2 max-lg:mt-6 sm:px-2 gradient-border-l">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <InViewFadeUp key={index} delay={index * 0.1}>
                  <div className="p-6 bg-white rounded-lg border border-gray-200/80 shadow-sm hover:border-gray-300 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-lg bg-gray-900 text-white grid place-items-center">
                          <Briefcase className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-medium text-gray-600 mt-1">
                              {exp.company}
                            </p>
                          </div>
                          <span className="text-sm text-gray-500 font-medium">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {exp.description}
                        </p>
                        {exp.tags && exp.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700"
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
    <section id="design" className="py-16 sm:py-24 bg-gray-50">
      <Container>
        {/* Grid Layout with Title and Content */}
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          {/* Left Column - Title Section */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 lg:border-r lg:border-gray-200">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600">
                Graphic Design
              </p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900">
                Creative Design Work
              </h2>
              <p className="mt-6 text-lg leading-7 text-gray-600 max-w-md">
                A collection of visual designs including banners, posters, and social media content.
              </p>
            </InViewFadeUp>
          </div>

          {/* Right Column - Design Grid */}
          <div className="px-4 py-2 max-lg:mt-6 sm:px-2 lg:border-l lg:border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {designs.map((item, index) => (
                <DesignTile key={index} item={item} index={index} />
              ))}
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
    <InViewFadeUp delay={index * 0.1}>
      <div className="overflow-hidden rounded-lg border border-gray-200/80 bg-white shadow-sm group hover:border-gray-300 hover:shadow-md transition-all">
        <div className="w-full overflow-hidden bg-gray-100">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-3 border-t border-gray-200/80">
          <p className="text-xs font-medium text-gray-700 uppercase tracking-wide">{item.title}</p>
        </div>
      </div>
    </InViewFadeUp>
  );
}

/** ======== CONTACT (Grid-Based Style) ======== */
export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <div className="mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[2fr_3fr]">
          {/* Left Column - Title */}
          <div className="px-4 py-2 max-lg:line-b sm:px-2 gradient-border-r">
            <InViewFadeUp>
              <p className="font-mono text-[0.8125rem] font-medium tracking-widest uppercase text-gray-600">
                Contact
              </p>
              <h2 className="mt-2 text-5xl tracking-tighter sm:text-6xl lg:text-7xl text-pretty font-bold text-gray-900">
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
                    className="group flex flex-col p-6 rounded-lg border border-gray-200 bg-white shadow-sm hover:border-gray-300 hover:shadow-md hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors">
                        <Mail className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">Email</div>
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors break-all">
                      saichandra38ganji@gmail.com
                    </div>
                  </a>
                </InViewFadeUp>

                <InViewFadeUp delay={0.2}>
                  <a
                    href="https://github.com/ganjisaichandra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col p-6 rounded-lg border border-gray-200 bg-white shadow-sm hover:border-gray-300 hover:shadow-md hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors">
                        <Github className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">GitHub</div>
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                      /ganjisaichandra
                    </div>
                  </a>
                </InViewFadeUp>

                <InViewFadeUp delay={0.3}>
                  <a
                    href="https://www.linkedin.com/in/ganji-sri-vijaya-sai-chandra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col p-6 rounded-lg border border-gray-200 bg-white shadow-sm hover:border-gray-300 hover:shadow-md hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors">
                        <Linkedin className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">LinkedIn</div>
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
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
    <footer className="border-t border-gray-200 bg-white py-12 sm:py-16">
      <Container>
        <div className="px-4 sm:px-2">
          <div className="text-center text-sm text-gray-500">
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
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <DesignWork />
      <Contact />
      <Footer />
    </div>
  );
}
