import { motion } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import mySong from "@/assets/my-song.mp3";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(mySong);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;

    audioRef.current.addEventListener("canplaythrough", () => setIsLoading(false));
    audioRef.current.addEventListener("waiting", () => setIsLoading(true));

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (showPrompt) {
      setShowPrompt(false);
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Audio playback failed:", error);
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Initial prompt */}
      {showPrompt && (
        <motion.div
          className="fixed bottom-24 right-4 md:right-8 z-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.button
            className="glass-strong rounded-full px-4 py-3 flex items-center gap-3 border border-border/30 group"
            onClick={togglePlay}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="relative"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Music className="w-5 h-5 text-gold" />
              <motion.div
                className="absolute inset-0 rounded-full bg-gold/20"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <span className="text-sm text-foreground/80">
              For you, Tarnija — tap to play ambient music
            </span>
          </motion.button>
        </motion.div>
      )}

      {/* Floating control button */}
      {!showPrompt && (
        <motion.button
          className="fixed bottom-8 right-4 md:right-8 z-40 w-12 h-12 rounded-full glass-strong flex items-center justify-center border border-border/30"
          onClick={togglePlay}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isLoading ? (
            <motion.div
              className="w-5 h-5 border-2 border-gold border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          ) : isPlaying ? (
            <motion.div className="relative">
              <Volume2 className="w-5 h-5 text-gold" />
              <motion.div
                className="absolute inset-0 rounded-full bg-gold/20"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ) : (
            <VolumeX className="w-5 h-5 text-muted-foreground" />
          )}
        </motion.button>
      )}
    </>
  );
};

export default BackgroundMusic;
