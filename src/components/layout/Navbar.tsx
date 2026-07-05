import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";

/**
 * Navbar — Premium Glass Morphism Polish
 * 
 * Refinements:
 * - Floating glass effect with backdrop blur
 * - Subtle shadow that lifts on scroll
 * - Premium hover states with smooth color transitions
 * - Micro-interaction on mobile toggle
 */

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    handleNavClick();
  };

  return (
    <motion.header
      initial={shouldReduce ? undefined : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-[#111111]/5 bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-2xl"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10 lg:px-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="font-serif-display text-xl font-bold italic tracking-tight transition-colors duration-300 hover:text-[#5F6368] focus-ring"
        >
          Alan.
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => scrollToSection(e, href)}
                className="group relative text-sm font-semibold tracking-wide text-[#111111]/70 transition-colors duration-300 hover:text-[#111111] focus-ring"
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#111111] transition-all duration-500 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop contact button */}
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "#contact")}
          className="hidden rounded-full border border-[#111111]/10 bg-white/55 px-7 py-3 text-sm font-bold uppercase tracking-widest text-[#111111]/80 shadow-[0_10px_30px_rgba(17,17,17,0.06)] backdrop-blur-2xl focus-ring md:inline-flex"
        >
          Contact
        </a>

        {/* Mobile menu toggle */}
        <button
          className="group flex items-center justify-center rounded-xl p-2.5 text-[#111111] transition-all duration-300 hover:bg-[#FAF8F6] focus-ring md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X size={24} className="transition-transform duration-300 group-hover:rotate-90" />
          ) : (
            <Menu size={24} className="transition-transform duration-300 group-hover:scale-110" />
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <motion.div
          initial={shouldReduce ? undefined : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-[#111111]/5 bg-white/90 px-6 pb-6 backdrop-blur-2xl md:hidden"
        >
          <ul className="flex flex-col gap-1 pt-4">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => scrollToSection(e, href)}
                  className="block rounded-xl px-5 py-4 text-base font-semibold tracking-wide text-[#111111] transition-all duration-300 hover:bg-[#FAF8F6] hover:translate-x-1 focus-ring"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="mt-4 block rounded-full border border-[#111111]/10 bg-white/55 px-6 py-4 text-center text-sm font-bold uppercase tracking-widest text-[#111111]/80 shadow-[0_10px_30px_rgba(17,17,17,0.06)] backdrop-blur-2xl focus-ring"
          >
            Contact
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
