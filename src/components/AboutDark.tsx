import { motion } from "motion/react";
import { Camera, Video, Palette, Film, Sparkles } from "@/components/icons/Icon";
import profilImage from "@/assets/images/profil.jpeg";

export function AboutDark() {
  const skills = [
    { icon: Camera, label: "Fotografi", color: "#ff6b35" },
    { icon: Video, label: "Editing Video", color: "#ff8c42" },
    { icon: Palette, label: "Desain Media Sosial", color: "#ff6b35" },
    { icon: Film, label: "Live Streaming", color: "#ff8c42" }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#fff8f5] dark:bg-black relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff6b35] rounded-full blur-[150px] opacity-5 dark:opacity-10 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff8c42] rounded-full blur-[150px] opacity-5 dark:opacity-10 transition-opacity duration-300" />

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
              <span className="text-[#ff8c42] font-medium text-sm">About</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-[#1a1a1a] dark:text-white transition-colors duration-300">Desainer. Kreator. </span>
              <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] bg-clip-text text-transparent">
                Pencerita.
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#ff6b35]/40 to-[#e85d2a]/40 rounded-3xl blur-3xl opacity-30 dark:opacity-60 group-hover:opacity-60 dark:group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative aspect-square bg-gradient-to-br from-[#f5e8de] to-[#fef0e6] dark:from-[#2a2a2a] dark:to-[#1a1a1a] rounded-3xl border-2 border-[#ff6b35]/30 overflow-hidden group-hover:border-[#ff6b35]/60 transition-all shadow-[0_0_40px_rgba(255,107,53,0.1)] dark:shadow-[0_0_40px_rgba(255,107,53,0.2)]">
                <img
                  src={profilImage}
                  alt="Zahwa Olivia Marshanti - Foto Profil"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/3 to-[#e85d2a]/3" />

                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <div className="text-2xl font-bold text-white mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                    Zahwa Olivia Marshanti
                  </div>
                  <div className="text-[#ff8c42] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                    Multimedia Broadcasting
                  </div>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#e85d2a] flex items-center justify-center shadow-[0_0_20px_rgba(255,107,53,0.5)]">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-lg text-[#444] dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  Mahasiswi Politeknik Elektronika Negeri Surabaya (PENS) semester 4 jurusan <span className="text-[#ff6b35] font-semibold">Multimedia Broadcasting</span> yang memiliki passion dalam fotografi, desain grafis, serta editing foto dan video.
                </p>
                <p className="text-lg text-[#444] dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  Berpengalaman dalam praktik kerja di studio foto dan pembuatan konten media sosial. Mampu bekerja individu maupun tim dengan pengalaman sebagai video editor dan kameramen live streaming.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#ff6b35]/20 hover:border-[#ff6b35]/50 transition-all cursor-pointer group shadow-sm dark:shadow-none"
                  >
                    <skill.icon className="w-8 h-8 mb-3 text-[#ff6b35] group-hover:scale-110 transition-transform" />
                    <div className="font-semibold text-[#1a1a1a] dark:text-white transition-colors duration-300">{skill.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
