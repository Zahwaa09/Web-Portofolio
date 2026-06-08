import { motion } from "motion/react";
import { Mail, Instagram, MapPin, Phone, Sparkles, TikTok } from "@/components/icons/Icon";

export function ContactDark() {
  const socials = [
    {
      id: "instagram",
      icon: Instagram,
      label: "@zhwolvmrsnt",
      platform: "Instagram",
      href: "https://www.instagram.com/zhwolvmrsnt",
      gradient: "from-[#ff6b35] to-[#e85d2a]"
    },
    {
      id: "tiktok",
      icon: TikTok,
      label: "@zhwolvmrsnt",
      platform: "TikTok",
      href: "https://www.tiktok.com/@zhwolvmrsnt",
      gradient: "from-[#ff8c42] to-[#ff6b35]"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-[#fff8f5] dark:bg-black relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#ff6b35] rounded-full blur-[150px] opacity-5 dark:opacity-10 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff8c42] rounded-full blur-[150px] opacity-5 dark:opacity-10 transition-opacity duration-300" />

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
              <span className="text-[#ff8c42] font-medium text-sm">Contact</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-[#1a1a1a] dark:text-white transition-colors duration-300">Mari Bekerja </span>
              <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] bg-clip-text text-transparent">
                Sama
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] mx-auto rounded-full mb-6" />
            <p className="text-lg text-[#666] dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
              Punya proyek yang ingin dikerjakan? Mari berkolaborasi dan ciptakan sesuatu yang luar biasa
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-6 transition-colors duration-300">Informasi Kontak</h3>

                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:zhwolvmrsnt@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#141414] border border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-all group shadow-sm dark:shadow-none"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff6b35]/20 to-[#e85d2a]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-[#ff6b35]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#888] dark:text-gray-500 mb-1 transition-colors duration-300">Email</div>
                      <div className="font-medium text-[#1a1a1a] dark:text-white group-hover:text-[#ff6b35] transition-colors">
                        zhwolvmrsnt@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/6285923332916"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#141414] border border-[#ff8c42]/20 hover:border-[#ff8c42]/40 transition-all group shadow-sm dark:shadow-none"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff8c42]/20 to-[#ff6b35]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-[#ff8c42]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#888] dark:text-gray-500 mb-1 transition-colors duration-300">WhatsApp</div>
                      <div className="font-medium text-[#1a1a1a] dark:text-white group-hover:text-[#ff8c42] transition-colors">
                        +62 859-2333-2916
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#141414] border border-[#e85d2a]/20 hover:border-[#e85d2a]/40 transition-all group shadow-sm dark:shadow-none">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#e85d2a]/20 to-[#ff8c42]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-[#e85d2a]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#888] dark:text-gray-500 mb-1 transition-colors duration-300">Location</div>
                      <div className="font-medium text-[#1a1a1a] dark:text-white transition-colors duration-300">Lamongan, Jawa Timur</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">Media Sosial</h4>
                <div className="space-y-3">
                  {socials.map((social, index) => (
                    <motion.a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#141414] border border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-all group shadow-sm dark:shadow-none"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${social.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,107,53,0.2)]`}>
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-medium text-[#1a1a1a] dark:text-white group-hover:text-[#ff6b35] transition-colors">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center pt-16 mt-16 border-t border-[#ff6b35]/10">
            <p className="text-[#888] dark:text-gray-500 transition-colors duration-300">
              © 2026 Zahwa Olivia Marshanti. Didesain dengan penuh semangat & kreativitas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
