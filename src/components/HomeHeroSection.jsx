import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const HomeHeroSection = () => {
    const githubUrl = "https://github.com/Hasibul-Hasan-Hasib"; // or the route you want to navigate to

    return (
        <div className="col-span-5 m-auto p-8">
            <h3 className="text-slate-400 mb-2">Hi I am,</h3>
            <h1 className="lg:text-7xl md:text-6xl text-4xl mb-4">Hasibul Hasan</h1>
            <h6 className="mb-8 text-purple-500 text-xl md:text-2xl">&gt; Front-end Developer</h6>
            <h6 className="mb-4 text-slate-400">// Find my Profile on Github:</h6>

            <div className="flex flex-wrap items-center bg-transparent p-2 rounded">
                {/* Code before the link */}
                <SyntaxHighlighter
                    language="javascript"
                    style={nightOwl}
                    wrapLines
                    showLineNumbers={false}
                    customStyle={{
                        margin: 0,
                        padding: 0,
                        background: "transparent",
                        display: "inline",
                    }}
                >
                    {`const githubLink = "`}
                </SyntaxHighlighter>

                {/* Router Link */}
                <Link
                    to={githubUrl}
                    className="underline text-yellow-500 break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {githubUrl}
                </Link>


                {/* Code after the link */}
                <SyntaxHighlighter
                    language="javascript"
                    style={nightOwl}
                    wrapLines
                    showLineNumbers={false}
                    customStyle={{
                        margin: 0,
                        padding: 0,
                        background: "transparent",
                        display: "inline",
                    }}
                >
                    {'";'}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default HomeHeroSection;
