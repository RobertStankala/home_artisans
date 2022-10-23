import React from "react";
import { useState, useEffect } from "react";

import SingleProduct from "./SingleProduct";

function Shop() {
	const [products, setProducts] = useState(null);
	
	useEffect(() => {
		fetch('http://localhost:8000/products')
		.then( res => {
		  return res.json()
		})
		.then((data) => {
		  setProducts(data);
		})
	  }, []);

	const addToCard = (card) => {

		
		fetch(`http://localhost:8000/card/${card.id}`)
		.then((res) => {
			if (res.ok){
				console.log("obiekt jest już w koszyku") // zrobić dodanie do quantity
			} else if (res.status === 404) {
				fetch('http://localhost.charlesproxy.com:8000/card', {
					method: "POST",
					body: JSON.stringify(card),
					headers: {'Content-Type': 'application/json'}
				}) 
				.then((response) => response.json())
				.then((card) => {
				console.log('Success:', card)
				console.log(card.price.toFixed(2))
			})   // zrobić derstrukturyzację z dodaniem ceny do dwóch miejsc po przecinku	
			} else {
				console.log ("coś poszło nie tak..")
			}
		})
		
	}



	return (
		<div className="shop__container">
		<div className="shop__quote">
			<p className="quote">browse all of our<span className="quote__accent"> reusable </span>and<span className="quote__accent"> plastic free </span>products that we have designed to help you live a more sustainable lifestyle</p>
		</div>
		<div className="shop__filters">
			<div className="shop__filters__left">
				<a className="shop__filters__link" href="" style={{color: "$sixth-color"}}>shop all</a>
				<a className="shop__filters__link" href="">filter</a>
			</div>
			<div className="shop__filters__right">
				<a className="shop__filters__link" href="">lastest</a>
				<a className="shop__filters__link" href="">featured</a>
				<a className="shop__filters__link" href="">best seller</a>
			</div>
		</div>
		<div className="shop__all__products">
			{ products && <SingleProduct products={products} addToCard={addToCard} /> }
		</div>
		</div>
	);
}

export default Shop;
