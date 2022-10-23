import React from "react";
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion";



function BlogHomePage() {

	const [mainBlogs, setMainBlogs] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/blogs")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setMainBlogs(data);
			});
	}, []);
	
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	})
	
	return (
		<motion.div ref={carousel} className="blogHome__carousel">
			<p className="blogHome__carousel__title">our blogs</p>
			<motion.div className="blogHome__carousel__inner" drag="x" dragConstraints={{right:0, left: -width}}>
				
				{mainBlogs.filter( blog => blog.id <= 10)
				.map((blog) => {
					return(
							<motion.div className="blog__carousel" animate={{x: 50}} key={blog.id}>
								<img src={blog.image_url} className="blog__carousel__img"></img>
								<p className="blog__carousel__section">{blog.category}<span className="blog__carousel__addDate">{blog.date}</span></p>
								<p className="blog__carousel__title">{blog.title}</p>
							</motion.div>
					)
				})
				}
			</motion.div>
		</motion.div>
	);
}

export default BlogHomePage;

			

		
