import { motion, AnimatePresence } from "motion/react";
import { X } from "@/components/icons/Icon";
import { useRef, useEffect } from "react";
import videoDoc from "@/assets/videos/dokumenter.mp4";

interface VideographyGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideographyGallery({ isOpen, onClose }: VideographyGalleryProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-[#ff6b35]/30 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#e85d2a] hover:from-[#e85d2a] hover:to-[#ff6b35] shadow-[0_0_20px_rgba(255,107,53,0.5)] flex items-center justify-center transition-all z-20 border-2 border-white/20"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="mb-6">
              <h2 className="text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] bg-clip-text text-transparent">
                  Videography
                </span>
              </h2>
              <p className="text-gray-400">Production & Visual Storytelling</p>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
              <video
                ref={videoRef}
                src={videoDoc}
                className="w-full h-full object-contain"
                controls
                preload="metadata"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-white mb-2">Documentary Video</h3>
              <p className="text-gray-400">Video Production & Cinematography</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
