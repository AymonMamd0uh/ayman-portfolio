
import { motion } from "motion/react";
import {
  Code2,
  Globe,
  Database,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

const skillGroups = [
  {
    title: "Backend Development",
    description: "Building server-side applications and robust APIs.",
    icon: Code2,
    featured: true,
    skills: ["PHP", "Laravel", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces.",
    icon: Globe,
    featured: false,
    skills: ["JavaScript", "React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Databases",
    description: "Designing and working with structured and NoSQL databases.",
    icon: Database,
    featured: false,
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & Workflow",
    description: "Tools I use throughout the development process.",
    icon: Wrench,
    featured: false,
    skills: ["Git", "GitHub", "Postman", "Composer", "npm", "Vite"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-150px] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <Container>
        <SectionHeading
          eyebrow="MY TOOLKIT"
          title="Technologies I Work With"
          description="A collection of technologies and tools I use to build reliable backend systems and modern web applications."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                variants={cardVariants}
                whileHover={{ y: -7 }}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition-colors duration-300 md:p-8 ${
                  group.featured
                    ? "border-blue-500/30 bg-blue-500/[0.07]"
                    : "border-white/[0.08] bg-white/[0.025] hover:border-cyan-400/30"
                }`}
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                        group.featured
                          ? "border-blue-400/20 bg-blue-500/15 text-blue-400"
                          : "border-white/10 bg-white/5 text-cyan-400"
                      }`}
                    >
                      <Icon size={23} />
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                    />
                  </div>

                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {group.title}
                  </h3>

                  <p className="mb-6 text-sm leading-6 text-gray-400">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.08 + skillIndex * 0.04,
                          duration: 0.3,
                        }}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          <p className="text-sm text-gray-400">
            Always learning, always building, always improving.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export default Skills;
