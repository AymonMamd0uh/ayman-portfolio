
import { motion } from "motion/react";
import {
  Mail,
  ArrowUpRight,
  Send,
  Code2,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

const contactLinks = [
  {
    title: "Email",
    value: "aymanmamdouh106@gmail.com",
    description: "Send me an email",
    href: "mailto:aymanmamdouh106@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    value: "Connect professionally",
    description: "Let's connect and grow",
    href: "https://www.linkedin.com/in/ayman-mamdouh-736bb3266/",
    icon: FaLinkedinIn,
  },
  {
    title: "GitHub",
    value: "AymonMamd0uh",
    description: "Explore my projects and code",
    href: "https://github.com/AymonMamd0uh",
    icon: FaGithub,
  },
];

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="section-padding relative overflow-hidden"
      >
        {/* Background glows */}
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="pointer-events-none absolute bottom-0 right-[-150px] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <Container>
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="Let's Work Together"
            description="Have a project in mind, a job opportunity, or just want to connect? I'd be happy to hear from you."
          />

          <div className="mx-auto max-w-4xl">
            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-8 overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/[0.12] via-[#0b1220] to-[#080d18] p-7 text-center md:p-12"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[90px]" />

              <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]" />

              <div className="relative z-10">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <Send size={27} />
                </div>

                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-cyan-400">
                  HAVE AN IDEA?
                </p>

                <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  Let's build something great.
                </h3>

                <p className="mx-auto mb-8 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
                  I'm open to discussing backend development opportunities,
                  full-stack projects, and collaborations.
                </p>

                <a
                  href="mailto:aymanmamdouh106@gmail.com?subject=Let's%20Work%20Together"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <Mail size={18} />
                  Say Hello
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.div>

            {/* Contact Links */}
            <div className="grid gap-4 md:grid-cols-3">
              {contactLinks.map((contact, index) => {
                const Icon = contact.icon;

                return (
                  <motion.a
                    key={contact.title}
                    href={contact.href}
                    target={
                      contact.title === "Email" ? undefined : "_blank"
                    }
                    rel={
                      contact.title === "Email" ? undefined : "noreferrer"
                    }
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -6 }}
                    className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-cyan-400/25 hover:bg-white/[0.04]"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-400">
                        <Icon size={21} />
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                      />
                    </div>

                    <h4 className="mb-1 text-base font-semibold text-white">
                      {contact.title}
                    </h4>

                    <p className="mb-2 break-all text-sm text-cyan-300">
                      {contact.value}
                    </p>

                    <p className="text-xs text-gray-500">
                      {contact.description}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.08] bg-[#070b13]">
        <Container>
          <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
            {/* Brand */}
            <a href="#home" className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                <Code2 size={21} />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Ayman Mamdouh
                </p>
                <p className="text-xs text-gray-500">
                  Full Stack Developer
                </p>
              </div>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AymonMamd0uh"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-cyan-400/30 hover:text-cyan-400"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/ayman-mamdouh-736bb3266/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-cyan-400/30 hover:text-cyan-400"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="mailto:aymanmamdouh106@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-cyan-400/30 hover:text-cyan-400"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Ayman Mamdouh. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Contact;
