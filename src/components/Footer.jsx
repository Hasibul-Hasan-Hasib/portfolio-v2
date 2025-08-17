import { IconBrandFacebook, IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const Footer = () => {

    const linkClasses = `px-6 py-4 border-l border-slate-500 hover:bg-slate-700 hover:text-slate-300`

    return (
        <footer className="overflow-hidden mt-auto items-center text-slate-400 border-t border-slate-500">
            <nav className="flex items-center">
                <span className="px-7 whitespace-nowrap">Find me in:</span>
                <NavLink className={linkClasses} to="/">
                    <IconBrandLinkedin size={24} />
                </NavLink>
                <NavLink className={linkClasses} to="/about">
                    <IconBrandX size={24} />
                </NavLink>
                <NavLink className={`${linkClasses} border-r`} to="/about">
                    <IconBrandFacebook size={24} />
                </NavLink>
                <NavLink className="flex ml-auto px-8 py-4 border-l border-slate-500 hover:bg-slate-700 hover:text-slate-300" to="/contact">
                    @Hasibul-Hasan-Hasib <IconBrandGithub className="ml-3" size={24} />
                </NavLink>
            </nav>
        </footer>
    )
}

export default Footer
