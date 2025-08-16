import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="grid grid-cols-10 items-center text-slate-300 border-b-1 border-slate-500 overflow-hidden">
            <span className="px-7 col-span-2 ">hasibul-hasan</span>
            <nav className="col-span-8 flex items-center">
                <NavLink
                    className="px-7 py-4 border-l-1 border-slate-500"
                    to="/"
                >
                    _hello
                </NavLink>
                <NavLink
                    className="px-7 py-4 border-l-1 border-slate-500"
                    to="/"
                >
                    _about
                </NavLink>
                <NavLink
                    className="px-7 py-4 border-x-1 border-slate-500"
                    to="/"
                >
                    _projects
                </NavLink>
                <NavLink
                    className="ml-auto px-8 py-4 border-l-1 border-slate-500"
                    to="/"
                >
                    _contact
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;