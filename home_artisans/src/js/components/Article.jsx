import React from "react";
import { useParams} from "react-router-dom";
import { useEffect, useState} from "react";

function Article() {
	const { id } = useParams();

    const [article, setArticle] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:8000/blogs/${id}`)
        .then((res) => { 
			return res.json();
		})
        .then((data) => {
            setArticle(data);
          })
	}, []);


	return (
        <>
        {article && <div className="singielArticle__container">
                        <img className="singielArticle__img" src={article.image_url}></img>
                        <div className="singielArticle__content">
                            <h2 className="singielArticle__title">{article.title}</h2>
                            <p className="singielArticle__category">{article.category}<span className="singielArticle__date">{article.  date}</span></p>
                            <p className="singielArticle__article">{article.arcitle}</p>
                            <a className="singielArticle__back" href="/blog">back to all blogs</a>
                        </div>
                        
                    </div>}
        </>
        );
}

export default Article;
