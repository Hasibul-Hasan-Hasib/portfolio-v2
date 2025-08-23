// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const aboutMeText = `/** 
 * About Me:
 * I am a passionate Full Stack Web Developer with a strong
 * foundation in Computer Science and hands-on experience
 * in building modern, user-focused applications.
 *
 * Skilled in the MERN stack and RESTful APIs,
 * I create scalable, impactful, and user-friendly web solutions.
 *
 * I’m especially passionate about AI integration in web apps,
 * exploring innovative ways to deliver seamless,
 * forward-thinking digital experiences.
 *
 * My goal is to help clients achieve their vision through
 * reliable, creative, and efficient solutions.
 **/`;

const AboutMe = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const downloadCV = () => {
        setIsDownloading(true);
        const link = document.createElement("a");
        link.href = "/Hasibul_Hasan_CV.pdf";
        link.setAttribute("download", "Hasibul_Hasan_CV.pdf");
        document.body.appendChild(link);
        link.click();
        setTimeout(() => setIsDownloading(false), 2000);
    };

    return (
        <motion.div
            className="col-span-4 xl:col-span-2 flex flex-col border-t md:border-t-0 md:border-l border-slate-700"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <SyntaxHighlighter
                language="javascript"
                style={nightOwl}
                showLineNumbers
                customStyle={{
                    margin: 0,
                    padding: "1rem",
                    background: "transparent",
                }}
            >
                {aboutMeText}
            </SyntaxHighlighter>
            <div className="py-4 px-16 flex justify-start">
                <motion.button
                    className="bg-orange-600 text-white w-fit py-2 px-8 rounded shadow-lg hover:bg-orange-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isDownloading}
                    onClick={downloadCV}
                >
                    {isDownloading ? "Downloading..." : "Download CV"}
                </motion.button>
            </div>
        </motion.div>
    );
};

export default AboutMe;
