import React, { useContext } from "react";

import { HiOutlineArrowNarrowRight, HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../contexts/ThemeContext";

export const ToggleDarkMode: React.FC = () => {
	const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

	return (
		<div className="w-full flex items-center justify-end">
			<h5 className="text-xs font-medium flex items-center text-primary-1-light dark:text-primary-1">
				{currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
			</h5>
			<HiOutlineArrowNarrowRight className="ml-2 text-primary-1-light dark:text-primary-1" />
			<button
				onClick={() =>
					changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
				}
				className="w-10 h-10 rounded-lg ml-8 flex items-center justify-center bg-primary-2-light dark:bg-primary-4 hover:brightness-90 dark:hover:brightness-125 duration-300"
			>
				{currentTheme == "dark" ? (
					<HiSun className="w-5 h-5 text-primary-1" />
				) : (
					<HiMoon className="w-5 h-5 text-primary-1-light" />
				)}
			</button>
		</div>
	);
};
