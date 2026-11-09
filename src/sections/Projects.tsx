
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Layers3,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

const shopflowImages = [
  {
    src: "/images/projects/shopflow/store-home.png",
    alt: "ShopFlow storefront",
    label: "Storefront",
  },
  {
    src: "/images/projects/shopflow/product-details.png",
    alt: "ShopFlow product details",
    label: "Product Details",
  },
  {
    src: "/images/projects/shopflow/cart.png",
    alt: "ShopFlow shopping cart",
    label: "Shopping Cart",
  },
  {
    src: "/images/projects/shopflow/checkout.png",
    alt: "ShopFlow checkout",
    label: "Checkout",
  },
  {
    src: "/images/projects/shopflow/admin-dashboard.png",
    alt: "ShopFlow admin dashboard",
    label: "Admin Dashboard",
  },
  {
    src: "/images/projects/shopflow/admin-products.png",
    alt: "ShopFlow products management",
    label: "Products",
  },
  {
    src: "/images/projects/shopflow/admin-orders.png",
    alt: "ShopFlow orders management",
    label: "Orders",
  },
];

const otherProjects = [
  {
    number: "02",
    title: "RealtyOS",
    category: "Real Estate Platform",
    description:
      "A Laravel-based project focused on real estate management. Explore the source code to learn more about its implementation.",
    image: null,
    icon: Layers3,
    technologies: ["PHP", "Laravel"],
    github: "https://github.com/AymonMamd0uh/RealtyOS",
  },
  {
    number: "03",
    title: "Real-Time Chat App",
    category: "Full Stack Application",
    description:
      "A real-time messaging application featuring instant communication, online status, typing indicators, seen messages, and image sharing.",
    image: null,
    icon: Code2,
    technologies: ["Laravel", "Next.js", "Reverb", "WebSockets", "MySQL"],
    github: "https://github.com/AymonMamd0uh/nextjs-laravel-chat-app",
  },
  {
    number: "04",
    title: "Image Caption API",
    category: "Machine Learning / API",
    description:
      "An image captioning project that provides an API interface for generating descriptions of images.",
    image: null,
    icon: Code2,
    technologies: ["Python", "Machine Learning", "API"],
    github: "https://github.com/AymonMamd0uh/API-for-image-caption",
  },
  {
    number: "05",
    title: "AirPodStore",
    category: "E-Commerce Website",
    description:
      "An e-commerce website project built with Laravel for an AirPods store.",
    image: null,
    icon: Layers3,
    technologies: ["PHP", "Laravel"],
    github: "https://github.com/AymonMamd0uh/AirPodStore",
  },
];

function Projects() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-180px] top-1/4 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-150px] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <Container>
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects I've Built"
          description="A selection of applications and experiments I've worked on, from full-stack platforms to backend APIs."
        />

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-3xl border border-blue-500/25 bg-gradient-to-br from-blue-500/[0.09] via-[#0b1220] to-[#080d18] p-5 md:p-8"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative z-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-blue-300">
                FEATURED PROJECT
              </span>

              <span className="flex items-center gap-2 text-xs text-gray-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Live Project
              </span>
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
              {/* Project Info */}
              <div>
                <p className="mb-2 text-sm font-medium text-cyan-400">
                  Full Stack E-Commerce Platform
                </p>

                <h3 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                  ShopFlow<span className="text-blue-400">.</span>
                </h3>

                <p className="mb-6 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
                  A full-stack e-commerce platform built with Laravel and
                  React. It provides a complete shopping experience for
                  customers and a dedicated dashboard for administrators.
                </p>

                <div className="mb-7 flex flex-wrap gap-2">
                  {[
                    "Laravel 12",
                    "PHP",
                    "React",
                    "Vite",
                    "Tailwind CSS",
                    "MySQL",
                    "REST API",
                    "Sanctum",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-7 space-y-3">
                  {[
                    "Product browsing, search and shopping cart",
                    "Customer authentication and order management",
                    "Admin dashboard for products, categories and orders",
                    "Role-based authorization and protected API endpoints",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://shopflow-ecommerce-pi.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href="https://github.com/AymonMamd0uh/shopflow-ecommerce"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all hover:border-white/25 hover:bg-white/10"
                  >
                    <FaGithub size={17} />
                    Source Code
                  </a>
                </div>
              </div>

              {/* Main Screenshot */}
              <button
                type="button"
                onClick={() => setActiveImage(0)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080d18] p-2 text-left shadow-2xl shadow-blue-950/30"
              >
                <img
                  src={shopflowImages[0].src}
                  alt={shopflowImages[0].alt}
                  className="aspect-[4/3] w-full rounded-xl object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute bottom-5 left-5 rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-xs text-white backdrop-blur-md">
                  ShopFlow — Storefront
                </div>
              </button>
            </div>

            {/* Screenshots Gallery */}
            <div className="mt-10 border-t border-white/10 pt-7">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-200">
                  Explore the application
                </p>
                <span className="text-xs text-gray-500">
                  {shopflowImages.length} Screenshots
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {shopflowImages.slice(1).map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveImage(index + 1)}
                    className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-left transition-all hover:-translate-y-1 hover:border-cyan-400/40"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <p className="px-2 py-2 text-center text-[11px] text-gray-400">
                      {image.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="mb-8 mt-20 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-cyan-400">
              MORE PROJECTS
            </p>
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Other Things I've Built
            </h3>
          </div>

          <a
            href="https://github.com/AymonMamd0uh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-cyan-400"
          >
            View GitHub Profile
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {otherProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors duration-300 hover:border-cyan-400/25 md:p-7"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-400">
                      <Icon size={22} />
                    </div>

                    <span className="font-mono text-sm text-gray-600">
                      {project.number}
                    </span>
                  </div>

                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-cyan-400">
                    {project.category}
                  </p>

                  <h4 className="mb-3 text-xl font-semibold text-white">
                    {project.title}
                  </h4>

                  <p className="mb-6 min-h-[72px] text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mb-7 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[11px] text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-200 transition-colors hover:text-cyan-400"
                  >
                    <FaGithub size={17} />
                    View Source Code
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>

      {/* Screenshot Lightbox */}
      {activeImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setActiveImage(null)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white hover:bg-white/20"
          >
            ×
          </button>

          <div
            className="w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={shopflowImages[activeImage].src}
              alt={shopflowImages[activeImage].alt}
              className="max-h-[80vh] w-full rounded-xl object-contain"
            />

            <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
              <button
                type="button"
                onClick={() =>
                  setActiveImage(
                    (activeImage - 1 + shopflowImages.length) %
                      shopflowImages.length,
                  )
                }
                className="rounded-lg border border-white/10 px-4 py-2 hover:bg-white/10"
              >
                Previous
              </button>

              <span>
                {shopflowImages[activeImage].label} · {activeImage + 1}/
                {shopflowImages.length}
              </span>

              <button
                type="button"
                onClick={() =>
                  setActiveImage((activeImage + 1) % shopflowImages.length)
                }
                className="rounded-lg border border-white/10 px-4 py-2 hover:bg-white/10"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
