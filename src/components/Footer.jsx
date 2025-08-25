import { IconBrandFacebook, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const Footer = () => {

    const linkClasses = `px-5 sm:px-8 py-4 border-l border-slate-500 hover:bg-slate-700 hover:text-slate-300`

    return (
        <footer className="overflow-hidden mt-auto items-center text-slate-400 border-t border-slate-500 overflow-x-auto">
            <nav className="flex place-items-center">
                <span className="px-6 sm:px-8 whitespace-nowrap">Find me in:</span>
                <NavLink className={linkClasses} to="https://www.linkedin.com/in/md-hasibul-hasan-hasib" target="_blank" rel="noopener noreferrer">
                    <IconBrandLinkedin size={24} />
                </NavLink>
                <NavLink className={`${linkClasses} border-r`} to="https://www.facebook.com/hasibulhasan.hasib.1654" target="_blank" rel="noopener noreferrer">
                    <IconBrandFacebook size={24} />
                </NavLink>
                <NavLink className={`${linkClasses} md:hidden border-r`} to="https://github.com/Hasibul-Hasan-Hasib" target="_blank" rel="noopener noreferrer">
                    <IconBrandGithub size={24} />
                </NavLink>
                <NavLink className="hidden md:flex ml-auto px-8 py-4 border-l border-slate-500 hover:bg-slate-700 hover:text-slate-300" to="https://github.com/Hasibul-Hasan-Hasib" target="_blank" rel="noopener noreferrer">
                    @Hasibul-Hasan-Hasib <IconBrandGithub className="ml-3" size={24} />
                </NavLink>
            </nav>
        </footer>
    )
}

export default Footer
