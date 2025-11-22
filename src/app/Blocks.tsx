"use client";

import {
  Moon,
  Sun,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  BarChart3,
} from "lucide-react";
import PowerBIEmbed from "./PowerBIEmbed";
import {
  Card,
  Chip,
  Container,
  InViewFadeUp,
  Parallax,
  Section,
  TiltCard,
} from "./primitives";

/** ======== NAVBAR (centered, no logo/name) ======== */
export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100 border-b-2 border-blue-600">
      <Container className="h-14 flex items-center justify-center ">
        <nav className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:opacity-80 ">
            About
          </a>
          <a href="#skills" className="hover:opacity-80 ">
            Skills
          </a>
          <a href="#projects" className="hover:opacity-80 ">
            Projects
          </a>
          <a href="#contact" className="hover:opacity-800">
            Contact
          </a>
        </nav>
      </Container>
    </header>
  );
}

/** ======== HERO ======== */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-20 sm:py-24">
        {/* WRAPPER FIX: Remove Grid → use flex column centered */}
        <div className="flex flex-col items-center justify-center text-center mx-auto max-w-3xl">
          <InViewFadeUp>
            <h1 className="text-10xl sm:text-5xl font-extrabold leading-tight text-blue-700 zoom-target">
              Building delightful UIs and data stories.
            </h1>

            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Mechanical Engineer turned Frontend & Data enthusiast. I design
              and build interactive web experiences and create meaningful
              insights using Power BI, Python, and UI/UX principles.
            </p>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Chip className="bg-orange-400 text-white px-3 py-1 text-xs font-medium">Design Systems</Chip>
              <Chip className="bg-orange-400 text-white px-3 py-1 text-xs font-medium">Frontend Dev</Chip>
              <Chip className="bg-orange-400 text-white px-3 py-1 text-xs font-medium">BI Dashboards</Chip>
              <Chip className="bg-orange-400 text-white px-3 py-1 text-xs font-medium">Graphic Design</Chip>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex justify-center gap-2">
              <a
                href="#projects"
                className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-white font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 zoom-target"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-xl border border-gray-300 px-5 py-2.5 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 zoom-target"
              >
                Contact
              </a>
            </div>
          </InViewFadeUp>
        </div>
      </Container>
    </section>
  );
}

/** ======== ABOUT ======== */
export function About() {
  return (
    <Section id="about" eyebrow="About" title="Hi, I'm G.S.V. Sai Chandra">
      <div className="grid gap-5 md:grid-cols-[1.2fr_.8fr]">
        <TiltCard>
          <Card className="p-5">
            <p className="text-gray-500">
              I'm a Mechanical Engineering student who loves turning ideas into
              clean, responsive interfaces and meaningful data visuals. I work
              across design (Figma), frontend (React, Tailwind), and analytics
              (Python, SQL, Power BI) to build products that feel fast and tell
              a story.
            </p>
          </Card>
        </TiltCard>
        <InViewFadeUp delay={0.1}>
          <Card className="p-5">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-blue-600 text-white grid place-items-center text-lg font-bold">
                SC
              </div>
              <div className="text-sm">
                <div className="font-semibold">Open to Internships</div>
                <div className="text-gray-500">
                  Product • Frontend • Data/BI
                </div>
              </div>
            </div>
          </Card>
        </InViewFadeUp>
      </div>
    </Section>
  );
}

/** ======== SKILLS ======== */
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
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {groups.map((g) => (
          <TiltCard key={g.label}>
            <Card className="p-5">
              <div className="mb-2 text-sm font-semibold">{g.label}</div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </Card>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}

/** ======== PROJECTS ======== */
/** PASTE YOUR LINKS HERE */
const PBI_BUS_URL = ""; // e.g. "https://app.powerbi.com/view?r=..."
const PBI_SENTIMENT_URL = ""; // e.g. "https://app.powerbi.com/view?r=..."

function ProjectCard({ title, summary, tags = [], cover, github }: any) {
  return (
    <TiltCard className="card-zoom">
      <Card className="p-5 bg-white border border-gray-200 shadow-sm">
        <div className="grid gap-5 md:grid-cols-[1.1fr_.9fr]">
          {/* Thumbnail */}
          <div>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
              {cover ? (
                <img
                  src={cover}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="grid h-full place-items-center">
                  <BarChart3 className="h-10 w-10 text-gray-300" />
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {tags.map((t: string) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-xl font-bold text-blue-700 zoom-target">
              {title}
            </h3>

            <p className="mt-2 text-sm text-gray-600">{summary}</p>

            {/* GitHub Button */}
            <a
              href={github}
              target="_blank"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-black text-white hover:bg-blue-700 transition-all zoom-target"
            >
              View on GitHub
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Card>
    </TiltCard>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      className="pt-8"
    >
      <div className="space-y-6">
        <ProjectCard
          title="Bus Route & Timing Optimization"
          summary=" Analyzed 100+ records of bus operations to identify inefficiencies in route scheduling and passenger distribution. Built an interactive Excel dashboard with pivot tables and charts to visualize delays, crowding trends, and on-time
 performance. Applied rule-based AI recommendations to optimize bus timings and routes, achieving 20–30% reduction in
 average delays and improved resource utilization"
          tags={["Python", "Analytics", "Optimization", "Excel", "Dashboards"]}
          github="https://github.com/ganjisaichandra/Bus-Route-and-Timing-Optimization"
          cover="/projects/analytics.jpg"
        />

        <ProjectCard
          title="Product Reviews Sentiment Analysis"
          summary=" Developed an AI-powered web application using Python, Streamlit, and Hugging Face Transformers to classify
 product reviews from platforms like Amazon and Flipkart into Positive, Negative, or Neutral sentiments, Implemented features such as sentiment distribution charts, word clouds for positive/negative reviews, and
 single/bulk CSV review analysis, enhancing user experience and data visualization using Matplotlib, Seaborn,
 and Pandas,Integrated export functionality to allow users to download analyzed data for further analysis and reporting,
 leveraging Pandas and CSV handling libraries."
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
    </Section>
  );
}

/** ======== CONTACT ======== */
export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <div className="grid gap-4 sm:grid-cols-3">
        <TiltCard>
          <a
            href="mailto:saichandra38ganji@gmail.com"
            className="group block rounded-2xl border border-gray-500 p-5 hover:bg-gray-100 border-x-5 border-orange-600"
          >
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              <div>
                <div className="text-sm font-semibold">Email</div>
                <div className="text-xs text-gray-500 group-hover:underline">
                  saichandra38ganji@gmail.com
                </div>
              </div>
            </div>
          </a>
        </TiltCard>

        <TiltCard>
          <a
            href="https://github.com/ganjisaichandra"
            target="_blank"
            className="group block rounded-2xl border border-gray-500 p-5 hover:bg-gray-50 border-x-5 border-orange-600"
          >
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5" />
              <div>
                <div className="text-sm font-semibold">GitHub</div>
                <div className="text-xs text-gray-500 group-hover:underline">
                  /ganjisaichandra
                </div>
              </div>
            </div>
          </a>
        </TiltCard>

        <TiltCard>
          <a
            href="https://www.linkedin.com/in/ganji-sri-vijaya-sai-chandra/"
            target="_blank"
            className="group block rounded-2xl border border-gray-500 p-5 hover:bg-gray-50 border-b-5 border-orange-600"
          >
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5" />
              <div>
                <div className="text-sm font-semibold">LinkedIn</div>
                <div className="text-xs text-gray-500 group-hover:underline">
                  @G.S.V.Sai Chandra
                </div>
              </div>
            </div>
          </a>
        </TiltCard>
      </div>
    </Section>
  );
}

/** ======== FOOTER ======== */
export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10 text-center text-xs text-gray-500">
      <Container>
        © {new Date().getFullYear()} Sai Chandra — Portfolio
      </Container>
    </footer>
  );
}
/** ======== DESIGN WORK (GRAPHIC DESIGN GRID) ======== */
/** ======== DESIGN WORK — MASONRY GRID ======== */
export function DesignWork() {
  const designs = [
    { title: "Website Banner", image: "/projects/Mivi.jpg" },
    { title: "Website Banner", image: "/projects/AD.jpg" },
    { title: "Webiste Banner", image: "/projects/AD-2.jpg" },
    { title: "Creative Poster", image: "/projects/MSC.jpg" },
    { title: "Social Media Post", image: "/projects/Brand.jpg" },
    { title: "Social Media Post", image: "/projects/SOCD.jpg" },
    { title: "Product Mockup", image: "/projects/SOCD2.jpg" },
  ];

  return (
    <Section
      id="design"
      eyebrow="Graphic Design"
      title="Creative Design Work"
      className="pt-6"
    >
      {/* Masonry Grid using CSS columns */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
        {designs.map((item, index) => (
          <TiltCard key={index} className="card-zoom inline-block w-full">
            <div className="overflow-hidden rounded-2xl border-5 border-x-20 border-grey-900 dark:border-orange-700 bg-white dark:bg-neutral-100 shadow-sm hover:shadow-lg transition-all duration-200">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover rounded-t-2xl"
                loading="lazy"
              />

              <div className="p-3">
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-800 zoom-target">
                  {item.title}
                </p>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}

/** ======== MAIN COMPOSITION ======== */
export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DesignWork />
      <Contact />
      <Footer />
    </div>
  );
}
