import HomeHeroSection from "../components/HomeHeroSection";
import LoadingSkeleton from "../components/Skeleton";

const Home = () => {
    return (
        <section className="grid grid-cols-10 min-h-[calc(100vh-11.35rem)] items-center bg-gradient-to-b from-slate-800 to-slate-900 text-white">
            <HomeHeroSection />
            <HomeHeroSection />
        </section>

    );
};

export default Home;