import React, { useState } from "react";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<>
			<header className="bg-[#1a2b4c] py-4 px-6 md:px-10 flex flex-wrap items-center justify-between gap-4 relative z-20">
				<div className="flex items-center">
					<Link
						to="/"
						className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-gray-200 transition"
						onClick={handleLinkClick}
					>
						<img
							src={logo}
							alt="React News Hub Logo"
							className="h-8 w-8"
						/>
						<span>React News Hub</span>
					</Link>
				</div>

				<nav className="hidden md:block">
					<ul className="flex space-x-6 text-white font-medium">
						<li>
							<Link
								to={"/"}
								className="hover:text-gray-300 transition"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to={"/world"}
								className="hover:text-gray-300 transition"
							>
								World
							</Link>
						</li>
						<li>
							<Link
								to={"/politics"}
								className="hover:text-gray-300 transition"
							>
								Politics
							</Link>
						</li>
						<li>
							<Link
								to={"/business"}
								className="hover:text-gray-300 transition"
							>
								Business
							</Link>
						</li>
						<li>
							<Link
								to={"/tech"}
								className="hover:text-gray-300 transition"
							>
								Tech
							</Link>
						</li>
						<li>
							<Link
								to={"/science"}
								className="hover:text-gray-300 transition"
							>
								Science
							</Link>
						</li>
						<li>
							<Link
								to={"/sports"}
								className="hover:text-gray-300 transition"
							>
								Sports
							</Link>
						</li>
					</ul>
				</nav>

				<div className="flex items-center">
					<SearchBar />
				</div>

				<div className="block md:hidden">
					<button
						className="text-white focus:outline-none"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<i
							className={`${isMenuOpen ? "ri-close-line" : "ri-menu-line"} text-2xl`}
						></i>
					</button>
				</div>
			</header>

			{/* Mobile Menu - Simple dropdown style */}
			<div
				className={`md:hidden bg-[#1a2b4c] overflow-hidden transition-all duration-300 ease-in-out ${
					isMenuOpen
						? "max-h-125 border-t border-blue-800"
						: "max-h-0"
				}`}
			>
				<div className="py-3 px-6">
					{/* Navigation Links - Simple list */}
					<ul className="space-y-1">
						<li>
							<Link
								to={"/"}
								onClick={handleLinkClick}
								className="block py-2.5 text-white hover:text-gray-300 transition border-b border-blue-800"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to={"/world"}
								onClick={handleLinkClick}
								className="block py-2.5 text-white hover:text-gray-300 transition border-b border-blue-800"
							>
								World
							</Link>
						</li>
						<li>
							<Link
								to={"/politics"}
								onClick={handleLinkClick}
								className="block py-2.5 text-white hover:text-gray-300 transition border-b border-blue-800"
							>
								Politics
							</Link>
						</li>
						<li>
							<Link
								to={"/business"}
								onClick={handleLinkClick}
								className="block py-2.5 text-white hover:text-gray-300 transition border-b border-blue-800"
							>
								Business
							</Link>
						</li>
						<li>
							<Link
								to={"/tech"}
								onClick={handleLinkClick}
								className="block py-2.5 text-white hover:text-gray-300 transition border-b border-blue-800"
							>
								Tech
							</Link>
						</li>
						<li>
							<Link
								to={"/science"}
								onClick={handleLinkClick}
								className="block py-2.5 text-white hover:text-gray-300 transition border-b border-blue-800"
							>
								Science
							</Link>
						</li>
						<li>
							<Link
								to={"/sports"}
								onClick={handleLinkClick}
								className="block py-2.5 text-white hover:text-gray-300 transition border-b border-blue-800"
							>
								Sports
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
