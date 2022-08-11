import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Portfolio } from "./pages/portfolio";
import { Timeline } from "./pages/timeline";

export const MainRouter: React.FC = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="portfolio" element={<Portfolio />} />
			<Route path="timeline" element={<Timeline />} />
		</Routes>
	);
};
