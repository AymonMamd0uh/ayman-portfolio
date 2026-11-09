
import { motion } from "motion/react";
import { Terminal, Minus, Square, X } from "lucide-react";

const codeLines = [
  { text: "const developer = {", color: "text-purple-400" },
  { text: '  name: "Ayman Mamdouh",', color: "text-emerald-400" },
  { text: '  role: "Backend Developer",', color: "text-emerald-400" },
  { text: '  stack: ["Laravel", "PHP",', color: "text-emerald-400" },
  { text: '          "Node.js", "MySQL"],', color: "text-emerald-400" },
  { text: '  mindset: "Problem Solver",', color: "text-emerald-400" },
  { text: '  available: true', color: "text-orange-400" },
  { text: "};", color: "text-purple-400" },
];

export default function DeveloperTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-[520px]"
    >
      {/* Glow */}
      <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-[80px]" />

      <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-[#080D1D]/95 shadow-2xl shadow-blue-950/30">

        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Terminal size={14} />
            developer.ts
          </div>

          <div className="flex gap-2 text-slate-600">
            <Minus size={14} />
            <Square size={12} />
            <X size={14} />
          </div>
        </div>

        {/* Code */}
        <div className="p-5 md:p-7">
          <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
            <span className="text-blue-400">~/portfolio</span>
            <span>/</span>
            <span>developer.ts</span>
          </div>

          <div className="space-y-3 font-mono text-xs sm:text-sm md:text-[13px]">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.8 + index * 0.15,
                  duration: 0.3,
                }}
                className="flex gap-5"
              >
                <span className="w-4 shrink-0 text-right text-slate-600">
                  {index + 1}
                </span>

                <span className={line.color}>
                  {line.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Terminal Footer */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-5">
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              System initialized
            </div>

            <span className="text-xs text-slate-500">
              TypeScript · UTF-8
            </span>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-4 -top-5 rounded-xl border border-blue-400/20 bg-[#101A30] px-4 py-3 shadow-xl shadow-blue-500/10 md:-right-7"
      >
        <p className="text-xs text-slate-400">Backend Engineer</p>
        <p className="mt-1 text-sm font-bold text-blue-400">
          PHP / Laravel
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-5 -left-3 rounded-xl border border-cyan-400/20 bg-[#101A30] px-4 py-3 shadow-xl md:-left-7"
      >
        <p className="text-xs text-slate-400">Current Focus</p>
        <p className="mt-1 text-sm font-bold text-cyan-400">
          Scalable APIs
        </p>
      </motion.div>
    </motion.div>
  );
}
