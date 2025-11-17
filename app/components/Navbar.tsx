"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize theme
  useEffect(() => {
    const saved = (typeof window !== "undefined" ? localStorage.getItem("theme") : null) as "light" | "dark" | null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = saved ?? (prefersDark ? "dark" : "light");
    setTheme(next);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(next);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(next);
    localStorage.setItem("theme", next);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md shadow-lg dark:bg-black/80 bg-white/80"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="absolute bottom-0 left-0 h-0.5 bg-blue-500/30 w-full">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMenuOpen(false);
            }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Krishna Tej
          </motion.a>

          <div className="hidden md:flex items-center space-x-6">
            {/* Lever-style theme toggle (desktop) */}
            <button
              type="button"
              aria-label="Toggle theme"
              aria-pressed={theme === "dark"}
              onClick={toggleTheme}
              className="relative inline-flex items-center justify-center w-16 h-8 rounded-full border border-blue-500/30 transition-colors bg-white/70 dark:bg-black/40 hover:bg-white/80 dark:hover:bg-black/50"
            >
              <div className="absolute inset-0 px-2 flex items-center justify-between">
                {/* Sun icon for light mode */}
                <svg
                  className={`w-4 h-4 transition-colors ${theme === "light" ? "text-yellow-500" : "text-gray-400"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
                {/* Moon icon for dark mode */}
                <svg
                  className={`w-4 h-4 transition-colors ${theme === "dark" ? "text-blue-400" : "text-gray-400"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
              <motion.div
                className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg"
                animate={{ x: theme === "dark" ? 32 : 0, rotate: theme === "dark" ? 18 : -18 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                <div className="absolute top-1/2 right-[-6px] -translate-y-1/2 w-2 h-3 bg-blue-300/80 rounded-sm" />
              </motion.div>
            </button>

            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3 md:hidden">
            {/* Lever toggle (mobile) */}
            <button
              type="button"
              aria-label="Toggle theme"
              aria-pressed={theme === "dark"}
              onClick={toggleTheme}
              className="relative inline-flex items-center justify-center w-14 h-8 rounded-full border border-blue-500/30 transition-colors bg-white/70 dark:bg-black/40 hover:bg-white/80 dark:hover:bg-black/50"
            >
              <div className="absolute inset-0 px-1.5 flex items-center justify-between">
                {/* Sun icon for light mode */}
                <svg
                  className={`w-3.5 h-3.5 transition-colors ${theme === "light" ? "text-yellow-500" : "text-gray-400"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
                {/* Moon icon for dark mode */}
                <svg
                  className={`w-3.5 h-3.5 transition-colors ${theme === "dark" ? "text-blue-400" : "text-gray-400"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
              <motion.div
                className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg"
                animate={{ x: theme === "dark" ? 24 : 0, rotate: theme === "dark" ? 18 : -18 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              />
            </button>

            <motion.button
              className="md:hidden text-gray-900 dark:text-white"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.href.substring(1)
                    ? "text-blue-700 dark:text-blue-400 bg-blue-200/40 dark:bg-blue-500/10"
                    : "text-gray-700 hover:bg-blue-100/50 hover:text-black dark:text-gray-200 dark:hover:bg-blue-500/10 dark:hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

