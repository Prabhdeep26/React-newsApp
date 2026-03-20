import React from "react";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-[#1a2b4c] py-4 px-6 md:px-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-gray-200 transition">
                    <img src={logo} alt="React News Hub Logo" className="h-8 w-8" />
                    <span>React News Hub</span>
                </Link>
            </div>

            <nav className="hidden md:block">
                <ul className="flex space-x-6 text-white font-medium">
                    <li><Link to={"/"} className="hover:text-gray-300 transition">Home</Link></li>
                    <li><Link to={"/world"} className="hover:text-gray-300 transition">World</Link></li>
                    <li><Link to={"/politics"} className="hover:text-gray-300 transition">Politics</Link></li>
                    <li><Link to={"/business"} className="hover:text-gray-300 transition">Business</Link></li>
                    <li><Link to={"/tech"} className="hover:text-gray-300 transition">Tech</Link></li>
                    <li><Link to={"/science"} className="hover:text-gray-300 transition">Science</Link></li>
                    <li><Link to={"/sports"} className="hover:text-gray-300 transition">Sports</Link></li>
                </ul>
            </nav>

            <div className="flex items-center">
                <form className="flex items-center bg-white rounded-full overflow-hidden shadow-sm">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="px-4 py-2 outline-none text-sm w-40 md:w-48 text-gray-700"
                    />
                    <button type="submit" className="bg-white px-3 py-2 hover:bg-gray-100 transition">
                        <i className="ri-search-line text-gray-600"></i>
                    </button>
                </form>
            </div>

            <div className="block md:hidden">
                <button className="text-white focus:outline-none">
                    <i className="ri-menu-line text-2xl"></i>
                </button>
            </div>
        </header>
    );
};

export default Header;