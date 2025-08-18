import HomeHeroSection from "../components/HomeHeroSection";

const Home = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-10 place-items-center min-h-[calc(100vh-11.35rem)] bg-gradient-to-b from-slate-800 to-slate-900 text-white">
            <HomeHeroSection />

            <div className="col-span-5 p-8 hidden md:block">
                <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden animate-float
                before:absolute before:inset-0 before:rounded-full before:p-[2px]
                before:bg-gradient-to-r before:from-pink-500 before:to-blue-500 before:animate-pulse before:blur-lg">

                    {/* Red glitch */}
                    <div
                        className="absolute inset-0 bg-cover bg-center mix-blend-multiply grayscale bg-slate-700
               animate-glitch-shake animate-glitch-flash"
                        style={{ backgroundImage: "url('/ChatGPT Image Aug 18, 2025, 01_30_44 AM.png')" }}
                    ></div>

                    {/* Blue glitch */}
                    <div
                        className="absolute inset-0 bg-cover bg-center mix-blend-multiply grayscale bg-pink-700
               animate-glitch-shake-slow animate-glitch-flash"
                        style={{ backgroundImage: "url('/ChatGPT Image Aug 18, 2025, 01_30_44 AM.png')" }}
                    ></div>

                    {/* Green glitch */}
                    <div
                        className="absolute inset-0 bg-cover bg-center mix-blend-multiply grayscale bg-green-700
               animate-glitch-shake-fast animate-glitch-flash"
                        style={{ backgroundImage: "url('/ChatGPT Image Aug 18, 2025, 01_30_44 AM.png')" }}
                    ></div>

                </div>

            </div>

        </section>

    );
};

export default Home;