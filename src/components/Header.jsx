import { NavLink } from "react-router-dom"

const Header = () => {
    const linkClasses = ({ isActive }) =>
        `px-7 py-4 border-l border-slate-500 border-b-2 transition-colors ${
            isActive
                ? "border-b-orange-500 text-slate-300" // active state
                : "border-b-transparent hover:bg-slate-700 hover:text-slate-300" // inactive state
        }`

    return (
        <header className="md:grid grid-cols-10 items-center hidden text-slate-400 border-b border-slate-500 overflow-hidden">
            <span className="px-7 col-span-2">hasibul-hasan</span>
            <nav className="col-span-8 flex items-center">
                <NavLink to="/" className={linkClasses}>
                    _hello
                </NavLink>
                <NavLink to="/about" className={linkClasses}>
                    _about
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) =>
                    `px-7 py-4 border-x border-slate-500 border-b-2 transition-colors ${
                        isActive
                            ? "border-b-orange-500 text-slate-300"
                            : "border-b-transparent hover:bg-slate-700 hover:text-slate-300"
                    }`
                }>
                    _projects
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) =>
                    `ml-auto px-8 py-4 border-l border-slate-500 border-b-2 transition-colors ${
                        isActive
                            ? "border-b-orange-500 text-slate-300"
                            : "border-b-transparent hover:bg-slate-700 hover:text-slate-300"
                    }`
                }>
                    _contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
