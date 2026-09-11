import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import { navItems, personal } from "../data/site";

export function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link ${activeId === item.id ? "nav-link-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-7 lg:flex">
          <a href={personal.emailHref} className="nav-cta">
            Let&apos;s Talk <ArrowUpRight className="h-4 w-4" />
          </a>
          <span className="availability">
            <span /> AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        <button
          className="icon-button lg:hidden"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className={`mobile-menu ${isOpen ? "mobile-menu-open" : ""}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`mobile-nav-link ${activeId === item.id ? "mobile-nav-link-active" : ""}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a href={personal.emailHref} className="nav-cta mt-3 justify-center" onClick={closeMenu}>
            Let&apos;s Talk <ArrowUpRight className="h-4 w-4" />
          </a>
          <span className="availability justify-center pt-2">
            <span /> AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>
      </div>
    </header>
  );
}
