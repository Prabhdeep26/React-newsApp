import React from "react";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Home from "./components/Home";
import World from "./components/World";
import Politics from "./components/Politics";
import Business from "./components/Business";
import Tech from "./components/Tech";
import Science from "./components/Science";
import Sports from "./components/Sports";
import SearchPage from "./components/SearchPage";

const appConfig = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/world",
				element: <World />,
			},
			{
				path: "/politics",
				element: <Politics />,
			},
			{
				path: "/business",
				element: <Business />,
			},
			{
				path: "/tech",
				element: <Tech />,
			},
			{
				path: "/science",
				element: <Science />,
			},
			{
				path: "/sports",
				element: <Sports />,
			},
			{
				path: "/search",
				element: <SearchPage />,
			},
		],
	},
]);

const App = () => {
	return (
		<div>
			<RouterProvider router={appConfig} />
		</div>
	);
};

export default App;
