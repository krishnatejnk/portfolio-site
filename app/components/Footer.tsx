"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black to-blue-900/10 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved. Built with Next.js & Framer Motion
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-6"
          >
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            {[
              { name: "GitHub", url: "https://github.com/krishnatejnk" },
              { name: "LinkedIn", url: "https://linkedin.com/in/krishnatejnk/" },
              { name: "Email", url: "mailto:krishnatejnk@gmail.com" },
              { name: "Phone", url: "tel:+19029893113" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-10 h-10 flex items-center justify-center bg-black/50 border border-blue-500/30 rounded-full text-xs font-semibold text-blue-400 hover:border-blue-500 hover:bg-blue-500/10 transition-all"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                title={social.name}
              >
                {social.name.charAt(0)}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-blue-500/20 text-center"
        >
          <p className="text-gray-500 text-sm">
            Made with passion and dedication
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

