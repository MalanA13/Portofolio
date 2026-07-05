import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, easing } from "../../lib/motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before starting the animation */
  delay?: number;
  /** If true, animate only once when entering the viewport */
  viewport?: boolean;
}

/**
 * Wrapper that fades children up on mount or viewport entry.
 *
 * Why a wrapper component instead of inline motion props?
 * This keeps section code clean — you wrap content in <FadeIn>
 * instead of repeating initial/animate/transition props on
 * every element. It also centralizes reduced-motion handling.
 *
 * Usage:
 *   <FadeIn>        — animates on mount (hero elements)
 *   <FadeIn viewport> — animates when scrolled into view
 */
const FadeIn = ({
  children,
  className,
  delay = 0,
  viewport = false,
}: FadeInProps) => {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={fadeUp.hidden}
      {...(viewport
        ? {
            whileInView: fadeUp.visible,
            viewport: { once: true, amount: 0.15 },
          }
        : { animate: fadeUp.visible })}
      transition={{ ...fadeUp.visible.transition, delay, ease: [...easing] }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
