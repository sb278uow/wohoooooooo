import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Sparkles } from "lucide-react";

// Import photos
import photo1 from "@/assets/photo-1.png";
import photo2 from "@/assets/photo-2.png";
import photo3 from "@/assets/photo-3.png";
import photo4 from "@/assets/photo-4.png";
import photo5 from "@/assets/photo-5.png";
import photo6 from "@/assets/photo-6.png";

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  const photos = [
    { 
      id: 1, 
      src: photo1, 
      gridArea: "1 / 1 / 3 / 3", // row-start / col-start / row-end / col-end
      rotation: -3,
      scale: 1.02,
      caption: "quiet strength"
    },
    { 
      id: 2, 
      src: photo2, 
      gridArea: "1 / 3 / 2 / 5",
      rotation: 2,
      scale: 1.05,
      caption: "golden light"
    },
    { 
      id: 3, 
      src: photo3, 
      gridArea: "2 / 3 / 4 / 5",
      rotation: -2,
      scale: 1.03,
      caption: "radiant"
    },
    { 
      id: 4, 
      src: photo4, 
      gridArea: "3 / 1 / 5 / 3",
      rotation: 3,
      scale: 1.04,
      caption: "vibrant soul"
    },
    { 
      id: 5, 
      src: photo5, 
      gridArea: "4 / 3 / 5 / 4",
      rotation: -4,
      scale: 1.08,
      caption: "dreamer"
    },
    { 
      id: 6, 
      src: photo6, 
      gridArea: "4 / 4 / 5 / 5",
      rotation: 4,
      scale: 1.06,
      caption: "you"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const photoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.6,
      rotateY: -45,
      rotateX: 20,
      y: 100,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Ambient background orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold/10 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-muted-foreground text-sm tracking-[0.3em] mb-4 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span>memories</span>
            <Sparkles className="w-4 h-4 text-gold" />
          </motion.p>

          <motion.h2
            className="font-serif text-3xl md:text-5xl text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Moments of <span className="text-gold italic text-glow-gold">you</span>
          </motion.h2>
        </motion.div>

        {/* Unique Grid Layout */}
        <motion.div
          className="grid grid-cols-4 grid-rows-4 gap-3 md:gap-4"
          style={{ 
            perspective: "1200px",
            minHeight: "600px",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              variants={photoVariants}
              className="relative cursor-pointer group"
              style={{ 
                gridArea: photo.gridArea,
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={() => setHoveredPhoto(photo.id)}
              onMouseLeave={() => setHoveredPhoto(null)}
              onClick={() => setSelectedPhoto(photo.id)}
              whileHover={{ 
                scale: photo.scale,
                rotate: photo.rotation,
                zIndex: 20,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {/* Card container with 3D effect */}
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg"
                style={{ 
                  transformStyle: "preserve-3d",
                  minHeight: "150px",
                }}
                animate={{
                  rotateX: hoveredPhoto === photo.id ? 5 : 0,
                  rotateY: hoveredPhoto === photo.id ? -5 : 0,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                {/* Photo */}
                <motion.img 
                  src={photo.src} 
                  alt={`Memory ${photo.id}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{
                    scale: hoveredPhoto === photo.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                
                {/* Gradient overlay - appears on hover */}
                <motion.div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, 
                      hsla(270, 40%, 75%, 0.3) 0%, 
                      transparent 50%,
                      hsla(38, 40%, 70%, 0.3) 100%)`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredPhoto === photo.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, hsla(40, 20%, 95%, 0.3) 45%, hsla(40, 20%, 95%, 0.5) 50%, hsla(40, 20%, 95%, 0.3) 55%, transparent 60%)",
                    backgroundSize: "200% 100%",
                  }}
                  initial={{ backgroundPosition: "200% 0" }}
                  animate={{ 
                    backgroundPosition: hoveredPhoto === photo.id ? "-200% 0" : "200% 0" 
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Bottom gradient with caption */}
                <motion.div 
                  className="absolute inset-x-0 bottom-0 h-1/2"
                  style={{
                    background: "linear-gradient(to top, hsla(250, 20%, 6%, 0.9), transparent)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredPhoto === photo.id ? 1 : 0,
                    y: hoveredPhoto === photo.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Caption */}
                <motion.p
                  className="absolute bottom-4 left-4 right-4 text-foreground font-serif text-lg md:text-xl italic"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredPhoto === photo.id ? 1 : 0,
                    y: hoveredPhoto === photo.id ? 0 : 10,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <span className="text-gold">✧</span> {photo.caption}
                </motion.p>

                {/* Glow border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 0 2px hsla(38, 40%, 70%, 0.5), 
                                0 0 30px hsla(38, 40%, 70%, 0.3),
                                0 0 60px hsla(270, 40%, 75%, 0.2)`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredPhoto === photo.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Floating sparkle on hover */}
              <AnimatePresence>
                {hoveredPhoto === photo.id && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="absolute text-gold text-sm pointer-events-none"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${10 + i * 20}%`,
                        }}
                        initial={{ opacity: 0, scale: 0, y: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [-10, -30],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          duration: 1,
                          delay: i * 0.2,
                          repeat: Infinity,
                        }}
                      >
                        ✧
                      </motion.span>
                    ))}
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative text */}
        <motion.p
          className="text-center mt-10 text-muted-foreground/60 text-sm tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          every frame tells a story
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            className="fixed inset-0 bg-background/98 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Decorative orbs in lightbox */}
            <motion.div
              className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-violet/20 blur-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-gold/20 blur-3xl"
              animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
              transition={{ duration: 15, repeat: Infinity }}
            />

            <motion.div
              className="relative max-w-4xl max-h-[85vh] w-full"
              initial={{ scale: 0.3, rotateY: -90, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0.3, rotateY: 90, opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 25,
                stiffness: 120,
                duration: 0.6 
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo frame effect */}
              <div className="relative p-2 bg-gradient-to-br from-gold/30 via-violet/20 to-gold/30 rounded-3xl">
                <div className="relative overflow-hidden rounded-2xl bg-background">
                  <img 
                    src={photos.find(p => p.id === selectedPhoto)?.src} 
                    alt={`Memory ${selectedPhoto}`}
                    className="w-full h-full object-contain max-h-[80vh]"
                  />
                  
                  {/* Caption in lightbox */}
                  <motion.div
                    className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="font-serif text-2xl text-gold italic text-center">
                      ✧ {photos.find(p => p.id === selectedPhoto)?.caption} ✧
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/10 via-transparent to-violet/10 blur-2xl -z-10" />
            </motion.div>

            {/* Close button */}
            <motion.button
              className="absolute top-6 right-6 p-4 rounded-full glass-strong border border-gold/30 hover:border-gold/60 transition-colors group"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="text-foreground group-hover:text-gold transition-colors" />
            </motion.button>

            {/* Navigation hint */}
            <motion.p
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/60 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              click anywhere to close
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
