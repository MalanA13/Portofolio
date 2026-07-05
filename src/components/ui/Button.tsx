import { cn } from "../../utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

/**
 * Button — Premium hover polish
 * 
 * Refinements:
 * - Longer, more editorial easing
 * - Subtle lift + shadow on primary actions
 * - Underline reveal for ghost buttons
 * - Consistent focus states
 */
const Button = ({
  children,
  variant = "primary",
  href,
  external,
  className,
  onClick,
  ...rest
}: ButtonProps) => {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-ring cursor-pointer";

  const variants = {
    primary:
      "bg-[#111111] text-white shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:bg-[#242424] hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.18)]",
    secondary:
      "border border-[#111111]/10 bg-white/80 text-[#111111] backdrop-blur-xl hover:bg-white hover:-translate-y-1 hover:border-[#111111]/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]",
    ghost:
      "text-[#111111] after:absolute after:bottom-2 after:left-7 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-[calc(100%-3.5rem)]",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        <span className="relative z-10 flex items-center gap-2 transition-transform duration-500 group-hover:scale-[1.02]">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-500 group-hover:scale-[1.02]">
        {children}
      </span>
    </button>
  );
};

export default Button;
