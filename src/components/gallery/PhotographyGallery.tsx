import { motion, AnimatePresence } from "motion/react";
import { X } from "@/components/icons/Icon";
import { useState, useEffect } from "react";
import imgWartawan from "@/assets/images/Foto_Konsep_Wartawan.png";
import imgJawa from "@/assets/images/foto_konsep_jawa.png";
import imgMafia from "@/assets/images/foto_konsep_mafia.png";
import imgPramukaPA from "@/assets/images/Pramuka_PA.png";
import imgPramukaPI from "@/assets/images/Pramuka_PI.png";

interface PhotographyGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PhotographyGallery({ isOpen, onClose }: PhotographyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const photos = [
    { id: 1, src: imgWartawan, alt: "Journalist Concept Photography" },
    { id: 2, src: imgJawa, alt: "Javanese Concept Photography" },
    { id: 3, src: imgMafia, alt: "Mafia Concept Photography" },
    { id: 4, src: imgPramukaPA, alt: "Scout Male Photography" },
    { id: 5, src: imgPramukaPI, alt: "Scout Female Photography" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-[#ff6b35]/30 p-8 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="sticky top-4 left-full -mr-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#e85d2a] hover:from-[#e85d2a] hover:to-[#ff6b35] shadow-[0_0_20px_rgba(255,107,53,0.5)] flex items-center justify-center transition-all z-20 border-2 border-white/20"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-[#e85d2a] to-[#ff6b35] bg-clip-text text-transparent">
                  Photography
                </span>
              </h2>
              <p className="text-gray-400">Visual Portfolio & Concept Photography</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-black"
                  onClick={() => setSelectedImage(photo.src)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white font-semibold text-lg">Click to View Full Size</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-30 flex items-center justify-center p-8 bg-black/98"
                onClick={() => setSelectedImage(null)}
              >
                <motion.img
                  initial={{ scale: 0.85 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.85 }}
                  src={selectedImage}
                  alt="Preview"
                  className="max-w-[95%] max-h-[95%] object-contain rounded-2xl shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#e85d2a] hover:from-[#e85d2a] hover:to-[#ff6b35] shadow-[0_0_20px_rgba(255,107,53,0.5)] flex items-center justify-center transition-all border-2 border-white/20"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
