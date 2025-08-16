import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="overflow-hidden mt-auto grid grid-cols-10 items-center text-slate-400 border-t border-slate-500">
            <span className="px-7 col-span-1">Find me in:</span>
            <nav className="col-span-9 flex items-center">
                <NavLink className="px-6 py-4 border-l border-slate-500" to="/">
                    <IconBrandLinkedin size={24} />
                </NavLink>
                <NavLink className="px-6 py-4 border-x border-slate-500" to="/about">
                    <IconBrandGithub size={24} />
                </NavLink>
                <NavLink className="flex ml-auto px-8 py-4 border-l border-slate-500" to="/contact">
                    @Hasibul-Hasan-Hasib <IconBrandGithub className="ml-2" size={24} />
                </NavLink>
            </nav>
        </footer>
    )
}

export default Footer
