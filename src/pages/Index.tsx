import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

// Components
import PasscodeScreen from "@/components/birthday/PasscodeScreen";
import HeroSection from "@/components/birthday/HeroSection";
import CountdownSection from "@/components/birthday/CountdownSection";
import PhotoGallery from "@/components/birthday/PhotoGallery";
import MusicSection from "@/components/birthday/MusicSection";
import QuoteSection from "@/components/birthday/QuoteSection";
import DreamsSection from "@/components/birthday/DreamsSection";
import FriendsSection from "@/components/birthday/FriendsSection";
import MessageSection from "@/components/birthday/MessageSection";
import FinalSection from "@/components/birthday/FinalSection";
import SparkleSystem from "@/components/birthday/SparkleSystem";
import BackgroundMusic from "@/components/birthday/BackgroundMusic";

const sections = [
  { id: "hero", component: HeroSection },
  { id: "countdown", component: CountdownSection },
  { id: "photos", component: PhotoGallery },
  { id: "music", component: MusicSection },
  { id: "quotes", component: QuoteSection },
  { id: "dreams", component: DreamsSection },
  { id: "friends", component: FriendsSection },
  { id: "message", component: MessageSection },
  { id: "final", component: FinalSection },
];

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  const navigateToSection = (index: number) => {
    if (isAnimating || index === currentSection) return;
    if (index < 0 || index >= sections.length) return;

    setIsAnimating(true);
    setCurrentSection(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goNext = () => navigateToSection(currentSection + 1);
  const goPrev = () => navigateToSection(currentSection - 1);

  const CurrentSectionComponent = sections[currentSection].component;

  return (
    <div className="bg-background min-h-screen overflow-hidden relative">
      {/* Passcode Screen */}
      <AnimatePresence>
        {!isUnlocked && <PasscodeScreen onUnlock={handleUnlock} />}
      </AnimatePresence>

      {/* Main content */}
      {isUnlocked && (
        <>
          {/* Sparkle system */}
          <SparkleSystem intensity="medium" />

          {/* Background music */}
          <BackgroundMusic />

          {/* Section content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative z-10"
            >
              <CurrentSectionComponent />
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Up arrow */}
          {currentSection > 0 && (
            <motion.button
              className="fixed top-8 left-1/2 -translate-x-1/2 z-30 p-3 rounded-full glass border border-border/30 hover:bg-muted/30 transition-colors"
              onClick={goPrev}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous section"
            >
              <ChevronUp className="w-5 h-5 text-foreground" />
            </motion.button>
          )}

          {/* Navigation - Down arrow */}
          {currentSection < sections.length - 1 && (
            <motion.button
              className="fixed bottom-24 left-1/2 -translate-x-1/2 z-30 p-3 rounded-full glass border border-border/30 hover:bg-muted/30 transition-colors"
              onClick={goNext}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next section"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-5 h-5 text-foreground" />
              </motion.div>
            </motion.button>
          )}

          {/* Dot navigation */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => navigateToSection(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSection
                    ? "w-6 bg-gold"
                    : "w-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>

          {/* Footer - only on final section */}
          {currentSection === sections.length - 1 && (
            <motion.footer
              className="fixed bottom-2 left-1/2 -translate-x-1/2 z-20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2 text-muted-foreground/40 text-xs">
                <span>✧</span>
                <span>crafted with quiet love</span>
                <span>✧</span>
              </div>
            </motion.footer>
          )}
        </>
      )}
    </div>
  );
};

export default Index;
