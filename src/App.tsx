import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

import { MainRouter } from "./routes";

import { Navbar } from "./components/navbar";

export const App: React.FC = () => {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Navbar />
				<MainRouter />
			</BrowserRouter>
		</ThemeProvider>
	);
};
