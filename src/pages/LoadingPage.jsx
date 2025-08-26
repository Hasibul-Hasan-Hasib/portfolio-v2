// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const LoadingPage = () => {

  return (
    <section className="w-full h-[calc(100vh-8.5rem)] md:h-[calc(100vh-11.35rem)] flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-400">
        <div class="bg-teal-500 w-48 h-48 absolute animate-ping rounded-full delay-5s shadow-xl"></div>
        <div class="bg-teal-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>
        <img src="/micro-projects-favicon-color.png" alt="" />
    </section >

  );
};

export default LoadingPage;
