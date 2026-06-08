import { motion } from "motion/react";
import {
  Sparkles,
  Palette,
  Figma,
  Wand2,
  Scissors,
  Gamepad2,
  Code2,
  Camera,
  Lightbulb
} from "@/components/icons/Icon";

export function ToolsDark() {
  const tools = [
    { name: "Adobe Illustrator", category: "Vector Design", icon: Palette, gradient: "from-[#ff6b35] to-[#e85d2a]" },
    { name: "Figma", category: "UI/UX Design", icon: Figma, gradient: "from-[#ff8c42] to-[#ff6b35]" },
    { name: "Canva", category: "Graphic Design", icon: Wand2, gradient: "from-[#e85d2a] to-[#ff6b35]" },
    { name: "CapCut", category: "Video Editing", icon: Scissors, gradient: "from-[#ff6b35] to-[#ff8c42]" },
    { name: "Unity", category: "Game Development", icon: Gamepad2, gradient: "from-[#ff8c42] to-[#e85d2a]" },
    { name: "Visual Studio Code", category: "Code Editor", icon: Code2, gradient: "from-[#ff6b35] to-[#ff8c42]" },
    { name: "Mirrorless Camera", category: "Photography", icon: Camera, gradient: "from-[#e85d2a] to-[#ff8c42]" },
    { name: "Lighting Equipment", category: "Studio Setup", icon: Lightbulb, gradient: "from-[#ff8c42] to-[#ff6b35]" }
  ];

  return (
    <section id="tools" className="py-24 px-6 bg-[#fef4ee] dark:bg-black relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#ff6b35] rounded-full blur-[150px] opacity-5 dark:opacity-10 transition-opacity duration-300" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#ff6b35]" />
              <span className="text-[#ff8c42] font-medium text-sm">Tools</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-[#1a1a1a] dark:text-white transition-colors duration-300">Alat & </span>
              <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] bg-clip-text text-transparent">
                Perangkat Lunak
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] mx-auto rounded-full mb-6" />
            <p className="text-lg text-[#666] dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
              Alat profesional yang saya gunakan untuk mewujudkan visi kreatif
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${tool.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#ff6b35]/20 hover:border-[#ff6b35]/50 transition-all shadow-sm dark:shadow-none hover:shadow-[0_0_30px_rgba(255,107,53,0.15)] dark:hover:shadow-[0_0_30px_rgba(255,107,53,0.2)]"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_0_20px_rgba(255,107,53,0.3)]`}>
                      <tool.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>

                    <h4 className="font-bold text-[#1a1a1a] dark:text-white mb-1 group-hover:text-[#ff6b35] transition-colors text-sm">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-[#888] dark:text-gray-500 transition-colors duration-300">{tool.category}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
