import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "@/components/icons/Icon";
import gokuImage from "@/assets/images/Goku.png";

export function HeroDark() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* LAYER 1: BASE BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff4ee] via-[#fff8f5] to-[#fef0e6] dark:bg-[#080400] dark:bg-none" />

      {/* LAYER 2: TOP WARM ATMOSPHERE */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(255,107,53,0.38)_0%,rgba(200,60,10,0.18)_45%,transparent_75%)] opacity-[0.12] dark:opacity-[0.38] pointer-events-none transition-opacity duration-300" />

      {/* LAYER 3: SECONDARY GLOWS */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_75%_60%,rgba(255,120,40,0.22)_0%,transparent_65%)] opacity-[0.08] dark:opacity-100 pointer-events-none transition-opacity duration-300" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_10%_80%,rgba(10,4,0,0.85)_0%,transparent_70%)] opacity-0 dark:opacity-100 pointer-events-none transition-opacity duration-300" />

      {/* LAYER 4: AMBIENT ORBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-[#ff6b35] rounded-full blur-[160px] opacity-[0.06] dark:opacity-[0.18] transition-opacity duration-300" />
        <div className="absolute top-1/3 right-0 w-[380px] h-[380px] bg-[#ff8c42] rounded-full blur-[120px] opacity-[0.04] dark:opacity-[0.12] transition-opacity duration-300" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#e85d2a] rounded-full blur-[100px] opacity-[0.04] dark:opacity-[0.10] transition-opacity duration-300" />
      </div>

      {/* LAYER 5: DECORATIVE ELEMENTS */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/50 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] mix-blend-overlay pointer-events-none transition-opacity duration-300"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
        }}
      />

      {/* LAYER 6: VIGNETTE OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(4,2,0,0.55)_100%)] opacity-0 dark:opacity-100 pointer-events-none transition-opacity duration-300" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(255,107,53,0.04)_100%)] opacity-100 dark:opacity-0 pointer-events-none transition-opacity duration-300" />

      <div className="relative z-10 w-full px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20"
              >
                <Sparkles className="w-4 h-4 text-[#ff6b35]" />
                <span className="text-[#ff8c42] font-medium text-sm tracking-wide">Home</span>
              </motion.div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="text-[#1a1a1a] dark:text-white transition-colors duration-300">Desainer</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#ff6b35] via-[#ff8c42] to-[#ff6b35] bg-clip-text text-transparent">
                    Multimedia
                  </span>
                  <br />
                  <span className="text-[#1a1a1a] dark:text-white transition-colors duration-300">Kreatif</span>
                </h1>

                <p className="text-lg md:text-xl text-[#555] dark:text-gray-300 max-w-xl leading-relaxed font-normal transition-colors duration-300">
                  Crafting visual stories through design, photography, and video.
                </p>
              </div>

              <div className="flex gap-5 flex-wrap pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-9 py-4 bg-gradient-to-r from-[#ff6b35] to-[#e85d2a] rounded-2xl font-semibold text-base shadow-[0_0_40px_rgba(255,107,53,0.3)] hover:shadow-[0_0_60px_rgba(255,107,53,0.5)] transition-all flex items-center gap-2 text-white"
                >
                  View Portfolio
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-9 py-4 border-2 border-[#ff6b35] rounded-2xl font-semibold text-base hover:bg-[#ff6b35]/10 transition-all text-[#ff6b35] dark:text-white"
                >
                  Get in Touch
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative lg:block hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35] to-[#e85d2a] rounded-[3rem] blur-3xl opacity-20 dark:opacity-30 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-500" />

              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-[3rem] overflow-hidden border border-[#ff6b35]/20 group-hover:border-[#ff6b35]/40 bg-gradient-to-br from-[#f5e8de] to-[#fff4ee] dark:from-[#1a1a1a] dark:to-[#0a0a0a] transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(255,107,53,0.3)]">
                <img
                  src={gokuImage}
                  alt="Karya Unggulan"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/95 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2">Zahwa Olivia</h3>
                  <p className="text-[#ff8c42] mb-4 text-base font-medium">Multimedia Broadcasting</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-4 py-2 bg-[#ff6b35]/20 rounded-full text-sm border border-[#ff6b35]/30 text-white font-semibold">Designer</span>
                    <span className="px-4 py-2 bg-[#ff6b35]/20 rounded-full text-sm border border-[#ff6b35]/30 text-white font-semibold">Photographer</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* LAYER 7: BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fff8f5] dark:from-black to-transparent pointer-events-none transition-colors duration-300" />
    </section>
  );
}
