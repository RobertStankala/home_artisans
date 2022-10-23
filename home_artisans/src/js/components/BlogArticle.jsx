import React from "react";
import { Link } from "react-router-dom";


function BlogArticle({blogs}) {
	return (
        <div className="blog__container">
        {/* {blogs.filter((el) => {
            return el.category === 'hamburger';
        }) // Filter category */}
        {blogs.map((blog) => {
            return(
                <div key={blog.id} className="blog__article">
                    <Link to={`${blog.id}`} ><img src={blog.image_url} className="article__img"></img></Link>
                    <p className="article__section article__accent">
                        {blog.category}<span className="article__addDate">{blog.date}</span>
                    </p>
                    <Link to={`${blog.id}`} className="article__title"> 
                        {blog.title}
                    </Link>
                    
			    </div>
            )
        })}
        </div>
	);
}
 
export default BlogArticle;
