// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import GlitchImage from "../components/GlitchImage"
import HomeHeroSection from "../components/HomeHeroSection"

const Home = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-10 flex-grow place-items-center bg-gradient-to-b from-slate-800 to-slate-900 text-slate-300 h-[calc(100vh-10rem)] md:h-[calc(100vh-11.35rem)] overflow-y-auto no-scrollbar">
            {/* Hero Section animation */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="col-span-5 order-2 md:order-1"
            >
                <HomeHeroSection />
            </motion.div>

            {/* Glitch Image animation */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="col-span-5 order-1 md:order-2"
            >
                <GlitchImage />
            </motion.div>
        </section>
    )
}

export default Home
