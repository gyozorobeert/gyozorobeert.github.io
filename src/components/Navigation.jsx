import { useState } from "react";
import { FaHouse, FaUser, FaCode, FaFolderOpen, FaEnvelope } from "react-icons/fa6";

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigationItems = [
      { label: "Home", href: "#home", Icon: FaHouse },
      { label: "About", href: "#about", Icon: FaUser },
      { label: "Skills", href: "#skills", Icon: FaCode },
      { label: "Projects", href: "#projects", Icon: FaFolderOpen },
      { label: "Contact", href: "#contact", Icon: FaEnvelope },
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
    <div id="navbar" className="fixed top-0 left-0 z-50 h-[60px] w-full bg-(--color-bg)">
        <nav className="relative flex h-full items-center justify-between px-4">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold text-(--color-text-primary)"
          >
            <span className="text-(--color-text-accent)">Robert</span>'s Portfolio
          </a>

          {/* Desktop navigation */}
          <ul className="hidden items-center space-x-4 md:flex">
            {navigationItems.map(({ label, href, Icon }) => (
              <li key={label} className="">
                <a
                  href={href}
                  className="flex items-center gap-2 text-(--color-text-primary) hover:text-(--color-text-accent)"
                >
                  <Icon size={18} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {/* Desktop navigation */}

          {/* Mobile menu button */}
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-(--color-text-primary) md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`h-0.5 w-6 bg-current transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
            />
            <span
              className={`h-0.5 w-6 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`h-0.5 w-6 bg-current transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
            />
          </button>
          {/* Mobile menu button */}

          {/* Mobile navigation */}
          <ul
            id="mobile-navigation"
            className={`absolute left-0 top-[60px] w-full flex-col gap-1 bg-(--color-bg) px-4 py-3 shadow-lg md:hidden ${menuOpen ? "flex" : "hidden"
              }`}
          >
            {navigationItems.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 py-3 text-(--color-text-primary) hover:text-(--color-text-accent)"
                >
                  <Icon size={18} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile navigation */}
        </nav>
      </div>
    );
};