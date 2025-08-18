import GlitchImage from "../components/GlitchImage";
import HomeHeroSection from "../components/HomeHeroSection";

const Home = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-10 flex-grow place-items-center bg-gradient-to-b from-slate-800 to-slate-900 text-slate-300">
            <HomeHeroSection />
            <GlitchImage/>
        </section>
    );
};

export default Home;