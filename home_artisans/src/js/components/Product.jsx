import React from "react";
import { useParams} from "react-router-dom";
import { useEffect, useState} from "react";

function Product() {

    const { id } = useParams();

    const [products, setProducts] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:8000/products/${id}`)
        .then((res) => { 
			return res.json();
		})
        .then((data) => {
            setProducts(data);
            console.log(data);
          })
	}, []);

	return (
        <>
            {products && <div className="oneProduct__container">
                    <img className="oneProduct__img" src={products.image_url}></img>
                    <div>
                        <p className="oneProduct__title">{products.name}</p>
                        <p className="oneProduct__made">{products.made__by}</p>
                        <div>
                        <p className="oneProduct__price"> ${products.price.toFixed(2)}</p>
                        <button className="product__btn__buy oneProduct__btn">buy</button>
                        {/* <button onClick={ () => addToCard(product)} className="product__btn__buy">buy</button> */}
                        </div>
                        <p className="oneProduct__desc">{products.desc}</p>
                        <a className="oneProduct__back" href="/shop">back to shop</a>
                    </div>
                </div>}
        </>
    );
}

export default Product;
