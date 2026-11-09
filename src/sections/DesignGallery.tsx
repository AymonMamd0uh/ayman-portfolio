
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  Maximize2,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

const designs = [
  {
    id: 1,
    image: "/images/designs/des1.jpg",
    title: "Elevate Essence",
    category: "Fashion & Beauty",
  },
  {
    id: 2,
    image: "/images/designs/des2.jpg",
    title: "Private Your Style",
    category: "Fashion & Beauty",
  },
  {
    id: 3,
    image: "/images/designs/des3.jpg",
    title: "Coffee Lovers",
    category: "Food & Beverage",
  },
  {
    id: 4,
    image: "/images/designs/des4.jpg",
    title: "Wake Up to Warmth",
    category: "Food & Beverage",
  },
  {
    id: 5,
    image: "/images/designs/des5.jpg",
    title: "Beyond Limits",
    category: "Technology",
  },
  {
    id: 6,
    image: "/images/designs/des6.jpg",
    title: "Experience Wireless",
    category: "Technology",
  },
  {
    id: 7,
    image: "/images/designs/des7.jpg",
    title: "Unleash Your Power",
    category: "Fitness",
  },
  {
    id: 8,
    image: "/images/designs/des8.jpg",
    title: "Start Training Today",
    category: "Fitness",
  },
  {
    id: 9,
    image: "/images/designs/des9.jpg",
    title: "Unleash Power",
    category: "Fitness",
  },
  {
    id: 10,
    image: "/images/designs/des10.jpg",
    title: "Your Power",
    category: "Fitness",
  },
  {
    id: 11,
    image: "/images/designs/des11.jpg",
    title: "Unmatched Taste",
    category: "Food & Beverage",
  },
  {
    id: 12,
    image: "/images/designs/des12.jpg",
    title: "Burger House",
    category: "Food & Beverage",
  },
  {
    id: 13,
    image: "/images/designs/des13.jpg",
    title: "Savor the Flavor",
    category: "Food & Beverage",
  },
];

const categories = [
  "All",
  "Fashion & Beauty",
  "Food & Beverage",
  "Technology",
  "Fitness",
];

function DesignGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDesign, setActiveDesign] = useState<number | null>(null);

  const filteredDesigns =
    activeCategory === "All"
      ? designs
      : designs.filter((design) => design.category === activeCategory);

  const currentIndex = designs.findIndex(
    (design) => design.id === activeDesign,
  );

  const showPrevious = () => {
    const previousIndex =
      (currentIndex - 1 + designs.length) % designs.length;

    setActiveDesign(designs[previousIndex].id);
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % designs.length;

    setActiveDesign(designs[nextIndex].id);
  };

  return (
    <section
      id="designs"
      className="section-padding relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-150px] top-1/4 h-[320px] w-[320px] rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-150px] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <Container>
        <SectionHeading
          eyebrow="CREATIVE WORK"
          title="Design Gallery"
          description="A collection of visual designs and creative experiments across different categories."
        />

        {/* Gallery intro */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-gray-400">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-400">
              <Images size={19} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Selected Designs
              </p>
              <p className="text-xs text-gray-500">
                {filteredDesigns.length} designs available
              </p>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                      : "border-white/[0.08] bg-white/[0.025] text-gray-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Designs Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredDesigns.map((design, index) => (
              <motion.button
                layout
                key={design.id}
                type="button"
                onClick={() => setActiveDesign(design.id)}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.035,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] text-left transition-colors duration-300 hover:border-cyan-400/30"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0b1220]">
                  <img
                    src={design.image}
                    alt={design.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/0 to-black/0 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <span className="mb-1 block text-[10px] font-medium uppercase tracking-wider text-cyan-300 sm:text-xs">
                      {design.category}
                    </span>

                    <div className="flex items-end justify-between gap-2">
                      <h3 className="text-sm font-semibold text-white sm:text-base">
                        {design.title}
                      </h3>

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                        <Maximize2 size={15} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center text-xs leading-6 text-gray-500"
        >
          Creative work is another way I explore ideas, visual storytelling,
          and user experience.
        </motion.p>
      </Container>

      {/* Fullscreen Preview */}
      <AnimatePresence>
        {activeDesign !== null && currentIndex !== -1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveDesign(null)}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setActiveDesign(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={21} />
            </button>

            <button
              type="button"
              aria-label="Previous design"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={23} />
            </button>

            <motion.div
              key={activeDesign}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-[90vh] w-full max-w-3xl flex-col items-center"
            >
              <img
                src={designs[currentIndex].image}
                alt={designs[currentIndex].title}
                className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
              />

              <div className="mt-4 text-center">
                <h3 className="text-base font-semibold text-white">
                  {designs[currentIndex].title}
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  {designs[currentIndex].category} · {currentIndex + 1} of{" "}
                  {designs.length}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Next design"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:h-12 sm:w-12"
            >
              <ChevronRight size={23} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default DesignGallery;
