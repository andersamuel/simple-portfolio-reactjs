import React from "react";
import { Link } from "react-router-dom";

import { ToggleDarkMode } from "./toggleDarkMode";

export const Navbar: React.FC = () => {
	return (
		<header className="w-full h-28 flex items-center justify-center absolute">
			<div className="w-full max-w-5xl px-5 items-center justify-between flex">
				<ul className="w-full text-xs font-semibold hidden md:flex">
					<li className="mx-5">
						<Link
							to="/"
							className="text-primary-1-light hover:text-primary-4-light dark:text-primary-1 dark:hover:text-primary-6 duration-300"
						>
							Home
						</Link>
					</li>
					<li className="mx-5">
						<Link
							to="/about"
							className="text-primary-1-light hover:text-primary-4-light dark:text-primary-1 dark:hover:text-primary-6 duration-300"
						>
							About
						</Link>
					</li>
					<li className="mx-5">
						<Link
							to="/portfolio"
							className="text-primary-1-light hover:text-primary-4-light dark:text-primary-1 dark:hover:text-primary-6 duration-300"
						>
							Portfolio
						</Link>
					</li>
					<li className="mx-5">
						<Link
							to="/timeline"
							className="text-primary-1-light hover:text-primary-4-light dark:text-primary-1 dark:hover:text-primary-6 duration-300"
						>
							Timeline
						</Link>
					</li>
				</ul>
				<ToggleDarkMode />
			</div>
		</header>
	);
};
