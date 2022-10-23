import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";

import "../../scss/main.scss";

import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Blog from "./Blog";
import Contact from "./Contact";
import Account from "./Account";
import Card from "./Card";
import Footer from "./Footer";
import Article from "./Article";
import Product from "./Product";

function App() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/shop">
					<Route index element={<Shop />}></Route>
					<Route path="/shop/:id" element={<Product />}></Route>
				</Route>
				<Route path="/blog">
					<Route index element={<Blog />}></Route>
					<Route path="/blog/:id" element={<Article />}></Route>
				</Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/account" element={<Account />}></Route>
				<Route path="/card" element={<Card />}></Route>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
