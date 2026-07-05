import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";

/**
 * Navigation items — edit this array to add/remove nav links.
 * Each item scrolls smoothly to the matching section id.
 */
const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

/**
 * Navbar — fixed top navigation with scroll-aware styling.
 *
 * Architecture decisions:
 *
 * 1. Local state only (scrolled, mobileOpen). The navbar does not
 *    need global state because no other component cares whether
 *    the menu is open.
 *
 * 2. Native anchor elements with smooth scroll behavior instead
 *    of React Router. A single-page portfolio doesn't need routing.
 *
 * 3. Transparent on hero, blurred white after scrolling — matches
 *    the reference design and PRD Section 24.
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** Close mobile menu when clicking a nav link */
  const handleNavClick = () => setMobileOpen(false);

  /** Smooth scroll to section */
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
      initial={shouldReduce ? undefined : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[#ECECEC] bg-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.04)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10 lg:px-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="font-serif-display text-xl font-bold italic tracking-tight focus-ring"
        >
          Alan.
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => scrollToSection(e, href)}
                className="text-sm font-medium text-[#5F6368] transition-colors duration-200 hover:text-[#111111] focus-ring"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop contact button */}
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "#contact")}
          className="hidden rounded-full bg-[#111111] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2a2a2a] hover:-translate-y-0.5 focus-ring md:inline-flex"
        >
          Contact
        </a>

        {/* Mobile menu toggle */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-[#111111] transition-colors hover:bg-[#FAF8F6] focus-ring md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <motion.div
          initial={shouldReduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-[#ECECEC] bg-white px-6 pb-6 md:hidden"
        >
          <ul className="flex flex-col gap-1 pt-4">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => scrollToSection(e, href)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-[#111111] transition-colors hover:bg-[#FAF8F6] focus-ring"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="mt-4 block rounded-full bg-[#111111] px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2a2a2a] focus-ring"
          >
            Contact
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
