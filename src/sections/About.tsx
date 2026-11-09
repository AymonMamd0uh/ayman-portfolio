
import { motion } from "motion/react";
import {
  Code2,
  Rocket,
  Target,

} from "lucide-react";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";



const highlights = [
  {
    value: "PHP & Laravel",
    label: "Primary Backend Stack",
  },
  {
    value: "Node.js",
    label: "Backend Development",
  },
  {
    value: "REST APIs",
    label: "Application Integration",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="GET TO KNOW ME"
            title="Beyond the Code."
            description="My background, technical interests, and the mindset behind the things I build."
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid items-start gap-8 lg:grid-cols-5">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="glass-panel relative overflow-hidden p-7 md:p-10 lg:col-span-3"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />

            <div className="relative z-10">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Code2 size={23} />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Who I Am
                  </p>
                  <p className="text-xs text-slate-500">
                    Full Stack Web Developer
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold leading-relaxed md:text-3xl">
                Building ideas into
                <span className="text-gradient">
                  {" "}real-world solutions.
                </span>
              </h3>

              <div className="mt-6 space-y-5 text-sm leading-8 text-slate-400 md:text-base">
                <p>
                  I'm Ayman Mamdouh Elsayed, a Full Stack Web
                  Developer with a strong focus on backend
                  development using PHP and Laravel.
                </p>

                <p>
                  I have practical experience building web
                  applications, RESTful APIs, authentication
                  systems, and database-driven solutions using
                  Laravel, MySQL, JavaScript, and Node.js.
                </p>

                <p>
                  I started my professional journey through
                  freelance development in 2023, working on
                  practical projects and continuously improving
                  my software development skills.
                </p>

                <p>
                  I also have experience as a Technical Instructor,
                  teaching web development and helping students
                  understand programming concepts through practical
                  training.
                </p>

                <p>
                  Currently, I work in real estate marketing at
                  L'Addresse in Madinaty, Cairo, while continuing
                  my journey in software development and building
                  technical projects.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                {[
                  "Backend Development",
                  "Laravel",
                  "REST APIs",
                  "Problem Solving",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-xs font-medium text-blue-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technical Highlights */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {highlights.map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{ x: 6 }}
                className="glass-panel p-6 transition-colors hover:border-blue-400/30"
              >
                <p className="text-2xl font-black text-gradient">
                  {item.value}
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  {item.label}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6"
            >
              <div className="flex items-center gap-3">
                <Rocket className="text-cyan-400" size={22} />
                <p className="font-bold text-white">
                  Always Learning & Building
                </p>
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Exploring new technologies, building practical
                projects, and improving my software engineering skills.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Professional Mindset */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-2xl border border-slate-800 bg-[#080D1D] p-7 md:p-9"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Target className="shrink-0 text-blue-400" size={30} />

              <div>
                <h3 className="text-lg font-bold text-white">
                  My Development Philosophy
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Clean code, thoughtful architecture, and
                  reliable solutions that solve real problems.
                </p>
              </div>
            </div>

            <span className="text-xs font-bold tracking-[0.2em] text-blue-400">
              QUALITY OVER QUANTITY
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
