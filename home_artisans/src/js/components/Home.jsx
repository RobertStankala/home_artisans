import React from "react";

import Primary from "./Primary";
import Bestsellers from "./Bestsellers";
import SoloProduct from "./SoloProduct";
import BlogHomePage from "./BlogHomePage";
import MainQuote from "./MainQuote";

function Home() {
	return (
		<>
			<Primary />
			<Bestsellers />
			<SoloProduct />
			<BlogHomePage />
			<MainQuote />
		</>
	);
}

export default Home;
