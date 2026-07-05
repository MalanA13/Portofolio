import { Mail, ArrowUpRight } from "lucide-react";
import { profile } from "../../data/profile";
import Container from "../../components/common/Container";
import FadeIn from "../../components/animations/FadeIn";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#111111] text-[#FAFAF8] selection:bg-[#FAFAF8] selection:text-[#111111]">
      
      {/* Decorative large text intersecting from top */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 flex justify-center opacity-[0.03]"
        aria-hidden="true"
      >
        <span className="font-serif-display mt-[-5%] text-[20vw] italic font-bold leading-none tracking-tight">
          {profile.shortName}.
        </span>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center pb-12 pt-40 md:pt-56 lg:pt-72">
          <FadeIn viewport className="flex flex-col items-center text-center w-full">
            
            <p className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-[#9AA0A6]">
              Let's build something
            </p>
            
            <a
              href={`mailto:${profile.email}`}
              className="group relative inline-flex flex-col items-center justify-center focus-ring"
            >
              <h2 className="font-serif-display text-[4rem] font-bold leading-[0.9] tracking-tight transition-transform duration-500 group-hover:-translate-y-2 md:text-[7rem] lg:text-[10rem]">
                Get In Touch
              </h2>
              {/* Animated underline */}
              <div className="mt-6 h-[2px] w-0 bg-[#FAFAF8] transition-all duration-700 ease-out group-hover:w-full" />
              
              <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FAFAF8] text-[#111111] opacity-0 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 p-6 md:p-8">
                <Mail size={32} className="md:h-10 md:w-10" />
              </div>
            </a>
            
          </FadeIn>
        </div>

        {/* Minimalist Bottom Bar */}
        <div className="mt-32 flex flex-col items-center justify-between gap-8 border-t border-white/10 py-10 md:flex-row">
          <p className="text-sm font-medium tracking-wide text-white/50">
            &copy; {currentYear} {profile.name}.
          </p>

          {/* Social Links */}
          {profile.socials.length > 0 && (
            <ul className="flex items-center gap-10">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white focus-ring"
                  >
                    {social.label}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
