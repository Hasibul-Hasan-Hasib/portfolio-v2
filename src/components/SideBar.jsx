// Sidebar.js
import { IconBrandFacebook, IconBrandGithub, IconBrandLinkedin, IconChevronDown, IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const [open, setOpen] = useState(true);

    const iconSize = 32;
    const linkClasses = ({ isActive }) =>
        `p-4 border-slate-500 border-l-2 transition-colors ${isActive
            ? "border-l-orange-500 text-slate-300" // active state
            : "border-l-transparent hover:bg-slate-700 hover:text-slate-300" // inactive state
        }`

    return (
        <section className="flex bg-slate-900 text-slate-400 ">
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
            <div className='hidden md:flex flex-col flex-grow-1'>
                <span className='flex place-items-center hover:bg-slate-800 p-4' onClick={() => setOpen(!open)}>{
                    open ? <IconChevronDown size={24} /> : <IconChevronRight size={24} />} Portfolio</span>
                <ul className={`flex flex-col flex-grow-1 items-start p-4 transition-all duration-300 ${open ? 'block' : 'hidden'}`}>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;