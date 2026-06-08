import { motion } from "motion/react";
import { Menu, Sun, Moon } from "@/components/icons/Icon";
import { useTheme } from "@/context/ThemeContext";

export function NavbarDark() {
  const { isDark, toggleTheme } = useTheme();
  const menuItems = ["Home", "About", "Portfolio", "Experience", "Tools", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/90 dark:bg-black/80 backdrop-blur-xl border-b border-[#ff6b35]/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold"
        >
          <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] bg-clip-text text-transparent">
            ZAHWA
          </span>
          <span className="text-[#1a1a1a] dark:text-white"> OLIVIA</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-[#555] dark:text-gray-400 hover:text-[#ff6b35] dark:hover:text-[#ff6b35] transition-colors font-medium relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#ff6b35]/10 border border-[#ff6b35]/20 hover:bg-[#ff6b35]/20 transition-all"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-[#ff8c42]" />
            ) : (
              <Moon className="w-5 h-5 text-[#ff6b35]" />
            )}
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="hidden sm:block px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ff6b35] to-[#e85d2a] font-semibold shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] transition-all text-white"
          >
            Mari Bekerja Sama
          </motion.button>

          <button className="md:hidden text-[#ff6b35]">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
