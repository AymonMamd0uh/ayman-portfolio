
import { motion } from "motion/react";
import {
  GraduationCap,
  Code2,
  Presentation,
  Building2,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

const experiences = [
  {
    date: "Current Position",
    type: "CURRENT ROLE",
    title: "Marketing",
    company: "L'Addresse Real Estate",
    location: "Madinaty, Cairo, Egypt",
    description:
      "Currently working in real estate marketing, contributing to property marketing activities and supporting the presentation and promotion of real estate opportunities.",
    icon: Building2,
    tags: ["Real Estate", "Marketing", "Communication"],
    featured: true,
    status: "Current",
  },
  {
    date: "March 2025 — May 2026",
    type: "TEACHING EXPERIENCE",
    title: "Technical Instructor",
    company: "Nass Academy",
    location: "Egypt",
    description:
      "Delivered practical web development training sessions covering PHP, Laravel, APIs, and frontend fundamentals. Mentored students through hands-on projects, debugging sessions, and code reviews.",
    icon: Presentation,
    tags: ["PHP", "Laravel", "Web Development", "Teaching"],
    featured: false,
    status: "Previous",
  },
  {
    date: "2023 — Present",
    type: "DEVELOPMENT EXPERIENCE",
    title: "Freelance Full Stack Web Developer",
    company: "Freelance",
    location: "Remote",
    description:
      "Developing responsive web applications using Laravel, PHP, JavaScript, and Node.js. Building RESTful APIs, authentication systems, and database-driven applications with a focus on performance, scalability, and clean code.",
    icon: Code2,
    tags: ["PHP", "Laravel", "Node.js", "MySQL", "REST APIs"],
    featured: true,
    status: "Ongoing",
  },
  {
    date: "2023",
    type: "EDUCATION",
    title: "Information Technology",
    company: "Mansoura University",
    location: "Mansoura, Egypt",
    description:
      "Studied Information Technology at the Faculty of Computer Science and Information Technology, developing a foundation in computing and software development.",
    icon: GraduationCap,
    tags: ["Information Technology", "Software Development"],
    featured: false,
    status: "Completed",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="MY JOURNEY"
            title="Experience & Education."
            description="My professional journey across software development, technical education, and real estate marketing."
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">

          {/* Timeline Line */}
          <div className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-blue-500 via-cyan-400/50 to-transparent md:left-7" />

          <div className="space-y-10">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={`${item.title}-${item.company}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="relative pl-14 md:pl-20"
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-[#0B1224] text-blue-400 shadow-lg shadow-blue-500/10 md:left-2">
                    <Icon size={19} />
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`glass-panel p-6 transition-colors duration-300 md:p-8 ${
                      item.featured
                        ? "border-blue-400/30 shadow-lg shadow-blue-500/5"
                        : "hover:border-blue-400/30"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-bold tracking-[0.15em] text-blue-400">
                        {item.type}
                      </span>

                      <span
                        className={`rounded-full border px-3 py-1 text-xs ${
                          item.status === "Current"
                            ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-400"
                            : "border-slate-700 bg-slate-900/60 text-slate-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-white md:text-2xl">
                      {item.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                      <span className="flex items-center gap-2 text-cyan-400">
                        <BriefcaseBusiness size={15} />
                        {item.company}
                      </span>

                      <span className="flex items-center gap-2 text-slate-500">
                        <MapPin size={14} />
                        {item.location}
                      </span>
                    </div>

                    <div className="mt-4 text-xs font-medium text-slate-500">
                      {item.date}
                    </div>

                    <p className="mt-5 text-sm leading-8 text-slate-400">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-center gap-3 text-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/5 text-blue-400">
            <Code2 size={22} />
          </div>

          <h3 className="text-lg font-bold text-white">
            The Journey Continues.
          </h3>

          <p className="max-w-lg text-sm leading-7 text-slate-400">
            Every experience brings a new perspective,
            and every project is another opportunity to grow.
          </p>
        </motion.div>

      </Container>
    </section>
  );
}
