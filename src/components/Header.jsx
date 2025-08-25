import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkClasses = ({ isActive }) =>
        `px-7 py-4 border-l border-slate-500 border-b-2 transition-colors ${isActive
            ? "border-b-teal-500 text-slate-300"
            : "border-b-transparent hover:bg-slate-700 hover:text-slate-300"
        }`;

    return (
        <header className="relative border-b border-slate-500 text-slate-400 z-50">
            {/* Header row */}
            <div
                className="grid grid-cols-10 items-center md:pointer-events-auto md:cursor-default md:select-auto
                           md:grid md:grid-cols-10 py-4 md:py-0"
                onClick={() => {
                    if (window.innerWidth < 768) {
                        setIsOpen(!isOpen);
                    }
                }}
            >
                {/* Left name */}
                <span className="px-7 col-span-8 md:col-span-2 flex font-semibold text-slate-200">
                    hasibul-hasan
                </span>

                {/* Right burger (shows only on mobile for indication) */}
                <div className="col-span-2 flex justify-end md:hidden px-4">
                    <span className="text-slate-300">
                        {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
                    </span>
                </div>

                {/* Desktop nav */}
                <nav className="col-span-8 hidden md:flex items-center">
                    <NavLink to="/" className={linkClasses}>
                        _hello
                    </NavLink>
                    <NavLink to="/about" className={linkClasses}>
                        _about
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `px-7 py-4 border-x border-slate-500 border-b-2 transition-colors ${isActive
                                ? "border-b-teal-500 text-slate-300"
                                : "border-b-transparent hover:bg-slate-700 hover:text-slate-300"
                            }`
                        }
                    >
                        _projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `md:ml-auto px-8 py-4 border-x md:border-r-0 border-slate-500 border-b-2 transition-colors ${isActive
                                ? "border-b-teal-500 text-slate-300"
                                : "border-b-transparent hover:bg-slate-700 hover:text-slate-300"
                            }`
                        }
                    >
                        _contact
                    </NavLink>
                </nav>
            </div>

            {/* Mobile dropdown popup */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        key="mobile-nav"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full md:hidden border-t border-slate-500 bg-slate-900 shadow-lg"
                    >
                        <div className="flex flex-col">
                            <NavLink
                                to="/"
                                className={linkClasses}
                                onClick={() => setIsOpen(false)}
                            >
                                _hello
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={linkClasses}
                                onClick={() => setIsOpen(false)}
                            >
                                _about
                            </NavLink>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    `px-7 py-4 border-x border-slate-500 border-b-2 transition-colors ${isActive
                                        ? "border-b-teal-500 text-slate-300"
                                        : "border-b-transparent hover:bg-slate-700 hover:text-slate-300"
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                _projects
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `px-8 py-4 border-x border-slate-500 border-b-2 transition-colors ${isActive
                                        ? "border-b-teal-500 text-slate-300"
                                        : "border-b-transparent hover:bg-slate-700 hover:text-slate-300"
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                _contact
                            </NavLink>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

