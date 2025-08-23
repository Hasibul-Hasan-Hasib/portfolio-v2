// Sidebar.js
import { useState } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandLinkedin,
    IconChevronDown,
    IconChevronRight,
} from "@tabler/icons-react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const navigate = useNavigate()

    const iconSize = 32
    const linkClasses = ({ isActive }) =>
        `p-4 border-slate-500 border-l-2 transition-colors ${isActive
            ? "border-l-orange-500 text-slate-300"
            : "border-l-transparent hover:bg-slate-700 hover:text-slate-300"
        }`

    return (
        <section className="hidden sm:flex bg-slate-900 text-slate-400 ">
            <nav className="flex flex-col place-items-center bg-slate-800">
                <NavLink className={linkClasses} to="/">
                    <IconBrandLinkedin size={iconSize} />
                </NavLink>
                <NavLink className={linkClasses} to="/projects">
                    <IconBrandFacebook size={iconSize} />
                </NavLink>
                <NavLink className={linkClasses} to="/about">
                    <IconBrandGithub size={iconSize} />
                </NavLink>
            </nav>

            {/* Portfolio Section */}
            <div className="hidden lg:flex flex-col flex-grow-1 w-[15.75vw] min-w-max bg-slate-900">
                <span
                    className="flex items-center cursor-pointer hover:bg-slate-700 hover:text-slate-300 p-4"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <IconChevronDown size={24} /> : <IconChevronRight size={24} />}
                    <span className="ml-2">Portfolio</span>
                </span>

                {/* Animated menu */}
                <motion.ul
                    initial={false}
                    animate={open ? "open" : "closed"}
                    variants={listVariants}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden flex flex-col"
                >
                    {menuItems.map(({ to, icon, label }) => (
                        <motion.li
                            key={label}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => navigate(to)}
                            className="flex items-center w-full px-4 py-2 cursor-pointer hover:bg-slate-700 hover:text-slate-300"
                        >
                            <img src={icon} className="w-5 mr-2" alt="" />
                            {label}
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    )
}

/* ===== Motion Variants ===== */
const listVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

const itemVariants = {
    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200 } },
    closed: { opacity: 0, x: -20, transition: { duration: 0.2 } },
}

/* ===== Menu Items ===== */
const menuItems = [
    { to: "/", icon: "/react-2 (1).svg", label: "hello.jsx" },
    { to: "/about", icon: "/html-1 (1).svg", label: "about.html" },
    { to: "/projects", icon: "/json-6.png", label: "projects.json" },
    { to: "/contact", icon: "/css-3 (1).svg", label: "contact.css" },
]

export default Sidebar
