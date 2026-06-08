import { motion } from "motion/react";
import { Camera, Video, Pen, Instagram, ExternalLink, Play, Sparkles } from "@/components/icons/Icon";
import { useState } from "react";
import { SocialMediaGallery } from "@/components/gallery/SocialMediaGallery";
import { VectorArtGallery } from "@/components/gallery/VectorArtGallery";
import { PhotographyGallery } from "@/components/gallery/PhotographyGallery";
import { VideographyGallery } from "@/components/gallery/VideographyGallery";
import socialMediaImage from "@/assets/images/DEWAN_AMBLAN_JAKA_TINGKIR_-_PUTRI_CEMPA_FIKS__1.png";
import gokuImage from "@/assets/images/Goku.png";
import photographyImage from "@/assets/images/Foto_Konsep_Wartawan.png";
import dokumenterVideo from "@/assets/videos/dokumenter.mp4";

export function PortfolioDark() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isVectorGalleryOpen, setIsVectorGalleryOpen] = useState(false);
  const [isPhotographyGalleryOpen, setIsPhotographyGalleryOpen] = useState(false);
  const [isVideographyGalleryOpen, setIsVideographyGalleryOpen] = useState(false);

  const categories = [
    {
      id: 1,
      title: "Desain Media Sosial",
      subtitle: "Instagram Feed",
      icon: Instagram,
      gradient: "from-[#ff6b35] to-[#e85d2a]"
    },
    {
      id: 2,
      title: "Tracing / Seni Vektor",
      subtitle: "Desain Ilustrasi",
      icon: Pen,
      gradient: "from-[#ff8c42] to-[#ff6b35]"
    },
    {
      id: 3,
      title: "Fotografi",
      subtitle: "Portfolio Visual",
      icon: Camera,
      gradient: "from-[#e85d2a] to-[#ff6b35]"
    },
    {
      id: 4,
      title: "Videografi",
      subtitle: "Produksi",
      icon: Video,
      gradient: "from-[#ff6b35] to-[#ff8c42]"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#fef4ee] dark:bg-black relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff6b35] rounded-full blur-[150px] opacity-5 dark:opacity-10 transition-opacity duration-300" />

      <div className="max-w-7xl mx-auto relative z-10">
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
              <span className="text-[#ff8c42] font-medium text-sm">Portfolio</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-[#1a1a1a] dark:text-white transition-colors duration-300">Karya </span>
              <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] bg-clip-text text-transparent">
                Kreatif
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] mx-auto rounded-full mb-6" />
            <p className="text-lg text-[#666] dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
              Jelajahi karya kreatif saya dalam berbagai media
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
                onClick={() => {
                  if (category.id === 1) setIsGalleryOpen(true);
                  else if (category.id === 2) setIsVectorGalleryOpen(true);
                  else if (category.id === 3) setIsPhotographyGalleryOpen(true);
                  else if (category.id === 4) setIsVideographyGalleryOpen(true);
                }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

                <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#141414] border border-[#ff6b35]/20 hover:border-[#ff6b35]/50 transition-all cursor-pointer shadow-sm dark:shadow-none">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    {category.id === 1 ? (
                      <div className="absolute inset-0">
                        <img
                          src={socialMediaImage}
                          alt="Desain Media Sosial"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          style={{ objectPosition: "left center" }}
                        />
                      </div>
                    ) : category.id === 2 ? (
                      <div className="absolute inset-0 p-8 flex items-center justify-center bg-gradient-to-br from-[#f5ece4] to-[#ffe8d6] dark:from-[#2a2a2a] dark:to-[#1a1a1a]">
                        <img src={gokuImage} alt="Goku Vector Art" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    ) : category.id === 3 ? (
                      <div className="absolute inset-0">
                        <img src={photographyImage} alt="Photography Portfolio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    ) : category.id === 4 ? (
                      <div className="absolute inset-0 bg-black">
                        <video
                          src={dokumenterVideo}
                          className="w-full h-full object-cover"
                          muted
                          autoPlay
                          loop
                          playsInline
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] flex items-center justify-center shadow-[0_0_30px_rgba(255,107,53,0.5)] group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <category.icon className="w-20 h-20 text-[#ff6b35]/20 group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-full bg-gradient-to-r ${category.gradient} flex items-center gap-2 shadow-[0_0_25px_rgba(255,107,53,0.5)] cursor-pointer`}
                      >
                        <span className="text-white font-semibold text-sm">
                          {category.id === 1 ? "Lihat Desain" : category.id === 2 ? "Lihat Karya" : category.id === 3 ? "Lihat Foto" : "Tonton Video"}
                        </span>
                        <ExternalLink className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-3 shadow-lg`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#ff6b35] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-gray-400">{category.subtitle}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <SocialMediaGallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
          <VectorArtGallery isOpen={isVectorGalleryOpen} onClose={() => setIsVectorGalleryOpen(false)} />
          <PhotographyGallery isOpen={isPhotographyGalleryOpen} onClose={() => setIsPhotographyGalleryOpen(false)} />
          <VideographyGallery isOpen={isVideographyGalleryOpen} onClose={() => setIsVideographyGalleryOpen(false)} />
        </motion.div>
      </div>
    </section>
  );
}
