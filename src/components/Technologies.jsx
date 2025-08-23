// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
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
        name: "Tailwind",
        snippet: `<button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
  Click Me 🎨
</button>`,
        stars: 6,
        lang: "html",
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
        name: "TypeScript",
        snippet: `function greet(name: string): string {
  return \`Hello, \${name}! 👋\`;
}`,
        stars: 7,
        lang: "typescript",
    },
];

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
};

const snippetVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Technologies = () => {
    return (
        <motion.div
            className="col-span-4 xl:col-span-2 flex-1 border-t md:border-t-0 md:border-l border-slate-700 p-4 space-y-6 no-scrollbar xl:overflow-y-auto"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <h2 className="text-lg font-semibold text-slate-300 mb-3">// Technologies & Snippets</h2>

            {technologies.map((tech, i) => (
                <motion.div
                    key={i}
                    className="bg-slate-900 border border-slate-700 rounded-lg shadow-lg text-sm"
                    variants={snippetVariants}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700 text-slate-400">
                        <span className="flex items-center gap-2">
                            <IconCode size={16} /> {tech.name}
                        </span>
                        <div className="flex items-center gap-4 text-xs">
                            <span className="flex items-center gap-1 cursor-pointer">
                                <IconInfoCircle size={14} /> details
                            </span>
                            <span className="flex items-center gap-1 cursor-pointer">
                                <IconStar size={14} /> {tech.stars} stars
                            </span>
                        </div>
                    </div>

                    {/* Syntax highlighted code */}
                    <SyntaxHighlighter
                        language={tech.lang}
                        style={nightOwl}
                        customStyle={{
                            margin: 0,
                            padding: "1rem",
                            background: "transparent",
                        }}
                    >
                        {tech.snippet}
                    </SyntaxHighlighter>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Technologies;
