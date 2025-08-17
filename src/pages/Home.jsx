import HomeHeroSection from "../components/HomeHeroSection";

const Home = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-10 place-items-center min-h-[calc(100vh-11.35rem)] bg-gradient-to-b from-slate-800 to-slate-900 text-white">
            <HomeHeroSection />
            <div className="col-span-5 p-8 hidden md:block">
                <img className="w-lg rounded-[50%]" src="ChatGPT Image Aug 18, 2025, 01_30_44 AM.png" alt="" />
            </div>
        </section>

    );
};

export default Home;