import AboutMe from "../components/AboutMe";
import Technologies from "../components/Technologies";

const About = () => {
    return (
        <section className="h-[calc(100vh-10rem)] md:h-[calc(100vh-11.35rem)] grid grid-cols-1 xl:grid-cols-4 gap-4 flex-grow-1 overflow-auto">
            <AboutMe />
            <Technologies />
        </section>
    );
};

export default About;
