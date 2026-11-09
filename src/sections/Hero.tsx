import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Code2 } from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import DeveloperTerminal from "../components/ui/DeveloperTerminal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium tracking-wide text-emerald-300">
                OPEN TO OPPORTUNITIES
              </span>
            </motion.div>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-blue-400"
            >
              <Code2 size={17} />
              HELLO, I'M AYMAN MAMDOUH
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl xl:text-7xl"
            >
              I Build
              <br />
              Powerful
              <br />
              <span className="text-gradient">Backend Systems.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 max-w-xl text-base leading-8 text-slate-400 md:text-lg"
            >
              I'm a Backend Developer specializing in Laravel, PHP and Node.js.
              I build scalable APIs, reliable applications, and solutions that
              turn complex problems into clean code.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Explore My Work
                <ArrowRight size={18} />
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Let's Talk
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center gap-5"
            >
              <span className="text-xs font-medium tracking-widest text-slate-500">
                FIND ME ON
              </span>

              {/* GitHub */}
              <a
                href="http://github.com/AymonMamd0uh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
              >
                <FaGithub size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aymanmamdouh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
              >
                <FaLinkedinIn size={20} />{" "}
              </a>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <DeveloperTerminal />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-24 hidden items-center justify-center gap-3 text-xs tracking-widest text-slate-500 md:flex"
        >
          <ArrowDown size={15} />
          SCROLL TO EXPLORE
        </motion.div>
      </Container>
    </section>
  );
}
