import { motion } from "framer-motion";
import { useState } from "react";
import { IconCode, IconStar, IconInfoCircle } from "@tabler/icons-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const technologies = [
    {
        name: "React",
        snippet: `function App() {
  return <h1>Hello React ⚛️</h1>;
}`,
        stars: 5,
        lang: "jsx",
    },
    {
        name: "Node.js",
        snippet: `const http = require("http");
http.createServer((req, res) => {
  res.end("Hello Node.js 🚀");
}).listen(3000);`,
        stars: 3,
        lang: "javascript",
    },
    {
        name: "Express",
        snippet: `const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello Express 🌐"));
app.listen(4000);`,
        stars: 4,
        lang: "javascript",
    },
    {
        name: "MongoDB",
        snippet: `const { MongoClient } = require("mongodb");
const client = new MongoClient(uri);
await client.connect();
console.log("MongoDB Connected 🍃");`,
        stars: 2,
        lang: "javascript",
    },
    {
        name: "Tailwind",
        snippet: `<button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
  Click Me 🎨
</button>`,
        stars: 6,
        lang: "html",
    },
    {
        name: "TypeScript",
        snippet: `function greet(name: string): string {
  return \`Hello, \${name}! 👋\`;
}`,
        stars: 7,
        lang: "typescript",
    },
];

const About = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const downloadCV = () => {
        setIsDownloading(true);
        const link = document.createElement("a");
        link.href = "/Hasibul_Hasan_CV.pdf";
        link.setAttribute("download", "Hasibul_Hasan_CV.pdf");
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
            setIsDownloading(false);
        }, 2000);
    };

    return (
        <section className="h-[calc(100vh-10rem)] md:h-[calc(100vh-11.35rem)] flex flex-col md:flex-row flex-grow-1">

            {/* About Me Section */}
            <motion.div
                className="md:col-span-1 flex flex-col border-t md:border-t-0 md:border-l border-slate-700"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="w-full text-sm text-slate-300 overflow-auto p-4 leading-relaxed flex flex-col">
                    {[
                        <span className="text-slate-400">/**</span>,
                        <span className="text-slate-400"> * About Me:</span>,
                        <span className="text-slate-400"> * I am a passionate Full Stack Web Developer with a strong</span>,
                        <span className="text-slate-400"> * foundation in Computer Science and hands-on experience</span>,
                        <span className="text-slate-400"> * in building modern, user-focused applications.</span>,
                        <span className="text-slate-400"> *</span>,
                        <span className="text-slate-400"> * Skilled in the MERN stack and RESTful APIs,</span>,
                        <span className="text-slate-400"> * I create scalable, impactful, and user-friendly web solutions.</span>,
                        <span className="text-slate-400"> *</span>,
                        <span className="text-slate-400"> * I’m especially passionate about AI integration in web apps,</span>,
                        <span className="text-slate-400"> * exploring innovative ways to deliver seamless,</span>,
                        <span className="text-slate-400"> * forward-thinking digital experiences.</span>,
                        <span className="text-slate-400"> *</span>,
                        <span className="text-slate-400"> * My goal is to help clients achieve their vision through</span>,
                        <span className="text-slate-400"> * reliable, creative, and efficient solutions.</span>,
                        <span className="text-slate-400"> **/</span>,
                        <span></span>,
                        <span></span>,
                    ].map((line, i) => (
                        <div key={i} className="flex">
                            {/* Line number */}
                            <div className="w-10 text-right pr-4 text-slate-500 select-none">
                                {i + 1}
                            </div>
                            {/* Code line */}
                            <div className="flex-1">{line}</div>
                        </div>
                    ))}
                </div>
                <div className="py-4 px-14 flex justify-start">
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



            {/* Code Snippets for Each Technology */}
            <motion.div
                className="flex-1 border-t md:border-t-0 md:border-l border-slate-700 p-4 overflow-auto space-y-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h2 className="text-lg font-semibold text-slate-200 mb-3">// Technologies & Snippets</h2>

                {technologies.map((tech, i) => (
                    <div
                        key={i}
                        className="bg-slate-900 border border-slate-700 rounded-lg shadow-lg text-sm overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700 text-slate-400">
                            <span className="flex items-center gap-2"><IconCode size={16} /> {tech.name}</span>
                            <div className="flex items-center gap-4 text-xs">
                                <span className="flex items-center gap-1 cursor-pointer"><IconInfoCircle size={14} /> details</span>
                                <span className="flex items-center gap-1 cursor-pointer"><IconStar size={14} /> {tech.stars} stars</span>
                            </div>
                        </div>

                        {/* Syntax highlighted code */}
                        <SyntaxHighlighter
                            language={tech.lang}
                            style={nightOwl}
                            customStyle={{
                                margin: 0,
                                padding: "1rem",
                                fontSize: "0.875rem",
                                background: "transparent",
                            }}
                        >
                            {tech.snippet}
                        </SyntaxHighlighter>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default About;
