
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-400 shadow-lg shadow-blue-500/20",

    outline:
      "border border-slate-700 text-white hover:border-blue-400 hover:text-blue-400",

    ghost:
      "text-slate-300 hover:text-blue-400 hover:bg-white/5",
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        rounded-xl px-6 py-3
        font-semibold text-sm
        transition-all duration-300
        hover:-translate-y-1
        disabled:opacity-50 disabled:pointer-events-none
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
