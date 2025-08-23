// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const LoadingPage = () => {
  // Container variants for staggering children
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  // Dot animation
  const dotVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-400">
      
      {/* Smooth logo or text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-semibold mb-12 tracking-wide"
      >
        Loading
      </motion.h1>

      {/* Container for dots with stagger */}
      <motion.div
        className="flex space-x-4"
        variants={containerVariants}
        animate="animate"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 rounded-full bg-slate-300 opacity-80 shadow-md"
            variants={dotVariants}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LoadingPage;
