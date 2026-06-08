import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { NavbarDark } from "@/components/NavbarDark";
import { HeroDark } from "@/components/HeroDark";
import { AboutDark } from "@/components/AboutDark";
import { PortfolioDark } from "@/components/PortfolioDark";
import { ExperienceNew } from "@/components/ExperienceNew";
import { ToolsDark } from "@/components/ToolsDark";
import { ContactDark } from "@/components/ContactDark";

function AppContent() {
  const { isDark } = useTheme();
  return (
    <div className={`${isDark ? "dark" : ""} min-h-screen transition-colors duration-300`}>
      <NavbarDark />
      <HeroDark />
      <AboutDark />
      <PortfolioDark />
      <ExperienceNew />
      <ToolsDark />
      <ContactDark />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
