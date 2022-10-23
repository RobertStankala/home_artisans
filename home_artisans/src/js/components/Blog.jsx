import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import BlogArticle from "./BlogArticle";


function Blog() {
	const [blogs, setBlogs] = useState(null);

	useEffect(() => {
		fetch("http://localhost:8000/blogs")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setBlogs(data);
			});
	}, []);

	return (
		<div>
			<div className="blog__header">
				<div className="blog__quote">
					turn your waste living into a simple step by step process
					with lots of
					<span className="quote__color"> positivity </span>and
					<span className="quote__color"> love </span>with our
					articles
				</div>
				<div className="blog__filters">
					<Link className="blog__filters__link blog__all" to="/blog">
						all
					</Link>
					<Link className="blog__filters__link" to="/blog/news">
						news
					</Link>
					<Link className="blog__filters__link" to="/blog/lifestyle">
						lifestyle
					</Link>
					<Link className="blog__filters__link" to="/blog/food">
						food
					</Link>
					<Link className="blog__filters__link" to="/blog/people">
						people
					</Link>
				</div>
			</div>
			<div className="blog__blogs">
				{blogs && <BlogArticle blogs={blogs} />}
			</div>
		</div>
	);
}

export default Blog;
