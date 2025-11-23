import { motion } from "motion/react";
import { X } from "lucide-react";

interface ListeningScreenProps {
  onBack: () => void;
}

export function ListeningScreen({ onBack }: ListeningScreenProps) {
  return (
    <div 
      className="w-[375px] h-[812px] rounded-[40px] shadow-2xl overflow-hidden relative flex items-center justify-center"
      style={{ background: "var(--gradient-primary)" }}
    >
      {/* Close Button */}
      <button 
        onClick={onBack}
        className="absolute top-8 right-8 text-white/90 hover:text-white z-20"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Pulse Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-64 h-64 rounded-full border-2 border-white/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full border-2 border-white/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full border-2 border-white/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Glowing Orb */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="w-40 h-40 rounded-full shadow-2xl flex items-center justify-center relative"
          style={{
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(20px)"
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner glow */}
          <div 
            className="absolute inset-4 rounded-full blur-xl"
            style={{ background: "rgba(255, 255, 255, 0.4)" }}
          />
          
          {/* Center dot */}
          <motion.div
            className="w-16 h-16 rounded-full relative z-10"
            style={{ background: "var(--finvoice-white)" }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Text */}
        <motion.p
          className="text-white mt-12"
          animate={{
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Listening...
        </motion.p>
      </div>
    </div>
  );
}