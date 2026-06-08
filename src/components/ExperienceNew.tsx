import { motion } from "motion/react";
import { GraduationCap, Briefcase, Video, Camera, Sparkles } from "@/components/icons/Icon";

export function ExperienceNew() {
  const educationHistory = [
    {
      year: "2024 — Present",
      institution: "Politeknik Elektronika Negeri Surabaya (PENS)",
      location: "PSDKU Lamongan",
      degree: "Multimedia Broadcasting – Semester 4",
      gradient: "from-[#ff6b35] to-[#e85d2a]",
      highlights: [
        "Focused on multimedia broadcasting technology",
        "Photography, videography, and digital content production"
      ]
    },
    {
      year: "2021 — 2024",
      institution: "SMK Wachid Hasjim Maduran",
      location: "Lamongan",
      degree: "Multimedia Major",
      gradient: "from-[#ff8c42] to-[#ff6b35]",
      highlights: [
        "Learned graphic design, photography, videography, and editing",
        "Developed creativity in digital content production"
      ]
    },
    {
      year: "2018 — 2021",
      institution: "SMPN 1 Laren",
      location: "Lamongan",
      degree: "Junior High School",
      gradient: "from-[#e85d2a] to-[#ff8c42]",
      highlights: [
        "Developed discipline, teamwork, and academic skills"
      ]
    },
    {
      year: "2012 — 2018",
      institution: "SDN Pangkatrejo",
      location: "Lamongan",
      degree: "Elementary School",
      gradient: "from-[#ff6b35] to-[#ff8c42]",
      highlights: [
        "Built foundational skills (reading, writing, arithmetic)",
        "Developed discipline and responsibility"
      ]
    }
  ];

  const workExperience = [
    {
      year: "2023",
      duration: "3 Months",
      company: "R7 Photo & Videography",
      position: "Video Editing Intern",
      icon: Video,
      gradient: "from-[#ff6b35] to-[#e85d2a]",
      tasks: [
        "Basic video editing (cut-to-cut)",
        "Arranged footage based on storyline",
        "Synchronized audio and video",
        "Added transitions and simple effects"
      ]
    },
    {
      year: "2023",
      duration: "Freelance",
      company: "VVIP Video Film Pro",
      position: "Video Editor & Cameraman (Live Streaming)",
      icon: Camera,
      gradient: "from-[#ff8c42] to-[#ff6b35]",
      tasks: [
        "Edited videos based on client needs",
        "Organized footage into engaging content",
        "Operated camera (framing, focus, lighting)",
        "Coordinated with production team"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#fff8f5] dark:bg-black relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#ff6b35] rounded-full blur-[150px] opacity-5 dark:opacity-10 transition-opacity duration-300" />

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
              <span className="text-[#ff8c42] font-medium text-sm">Experience</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-[#1a1a1a] dark:text-white transition-colors duration-300">Pengalaman & </span>
              <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] bg-clip-text text-transparent">
                Pencapaian
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] mx-auto rounded-full mb-6" />
            <p className="text-lg text-[#666] dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
              Perjalanan pendidikan dan pengalaman profesional dalam multimedia broadcasting
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff6b35]/20 to-[#e85d2a]/20 flex items-center justify-center border border-[#ff6b35]/30">
                  <GraduationCap className="w-7 h-7 text-[#ff6b35]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1a1a1a] dark:text-white transition-colors duration-300">Education</h3>
                  <p className="text-[#888] dark:text-gray-400 transition-colors duration-300">Academic Background</p>
                </div>
              </motion.div>

              <div className="space-y-6">
                {educationHistory.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${edu.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500`} />

                    <div className="relative p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#ff6b35]/20 hover:border-[#ff6b35]/50 transition-all shadow-sm dark:shadow-none">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${edu.gradient} flex items-center justify-center shadow-[0_0_20px_rgba(255,107,53,0.3)]`}>
                          <GraduationCap className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="mb-2">
                            <span className="px-3 py-1 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 text-[#ff8c42] font-semibold text-xs">
                              {edu.year}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-1 group-hover:text-[#ff6b35] transition-colors">
                            {edu.institution}
                          </h4>
                          <p className="text-[#ff8c42] text-sm mb-1">{edu.degree}</p>
                          <p className="text-[#888] dark:text-gray-500 text-xs mb-4 transition-colors duration-300">{edu.location}</p>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] mt-2 flex-shrink-0" />
                            <span className="text-[#555] dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff8c42]/20 to-[#ff6b35]/20 flex items-center justify-center border border-[#ff8c42]/30">
                  <Briefcase className="w-7 h-7 text-[#ff8c42]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#1a1a1a] dark:text-white transition-colors duration-300">Experience</h3>
                  <p className="text-[#888] dark:text-gray-400 transition-colors duration-300">Work History</p>
                </div>
              </motion.div>

              <div className="space-y-6">
                {workExperience.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${work.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500`} />

                    <div className="relative p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#ff6b35]/20 hover:border-[#ff6b35]/50 transition-all shadow-sm dark:shadow-none">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${work.gradient} flex items-center justify-center shadow-[0_0_20px_rgba(255,107,53,0.3)]`}>
                          <work.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 text-[#ff8c42] font-semibold text-xs">
                              {work.year}
                            </span>
                            <span className="text-[#888] dark:text-gray-500 text-xs transition-colors duration-300">— {work.duration}</span>
                          </div>
                          <h4 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-1 group-hover:text-[#ff6b35] transition-colors">
                            {work.company}
                          </h4>
                          <p className="text-[#ff8c42] text-sm mb-4">Role: {work.position}</p>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {work.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] mt-2 flex-shrink-0" />
                            <span className="text-[#555] dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
