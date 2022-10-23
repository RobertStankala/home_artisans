import React from "react";
import { Link } from "react-router-dom";

function SingleProduct({products, addToCard}) {
	

	return (
	
	<div className="single__product">
		{products.map((product) =>{
			return(
				<div className="product__container" key={product.id} >
							<Link to={`${product.id}`} className="product__link__img"><img className="product__img" src={product.image_url}></img></Link>
							<Link to={`${product.id}`} className="product__title">{product.name}</Link>
							<div className="product__info" key={products.id}>
                                <p className="product__decs">{product.made__by}</p>
                                <p className="product__br">|</p>
								<p className="product__price"> ${product.price.toFixed(2)}</p>
								<button onClick={ () => addToCard(product)} className="product__btn__buy">buy</button>
							</div>
						</div>
			)
		})}
    </div>
)}

export default SingleProduct;