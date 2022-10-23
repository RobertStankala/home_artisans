import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import OrderList from "./OrderList";


function Card() {

	
	const [items, setItems] = useState(0);

	useEffect(() => {
		fetch('http://localhost:8000/card')
		.then( res => {
			return res.json()
		})
		.then( (data) => {
			setItems(data);
		})
	}, []);



	return (
	<div className="card__container">
		<div className="card__details">
			<div className="card__title__log">
				<h2 className="card__title">DETAILS</h2>
				<p className="card__log__account">already have an account? <Link to="/account" className="card__log__link">log in</Link></p>
			</div>
			<form className="card__form">
				<input className="card__input__link" type="text" placeholder="first name *"/>
				<input className="card__input__link" type="text" placeholder="last name *" />
				<input className="card__input__link" type="text" placeholder="phone *" />
				<input className="card__input__link" type="email" placeholder="e-mail *" />
				<input className="card__input__link" type="text" placeholder="adress *" />
				<input className="card__input__link" type="text" placeholder="city *" />
				<select className="card__select" name="select" id="">
					<option value="">--select country--</option>
					<option value="">united states</option>
					<option value="">poland</option>
					<option value="">italy</option>
					<option value="">spain</option>
				</select>
				<input className="card__input__link" type="text" placeholder="zip-code" />
				<br/>
				<div className="card__checkbox">
					<input type="checkbox" />
					<label>save this information for the next time</label>
				</div>
			</form>
		</div>
		<div className="card__order__container">
			<h2 className="card__title__order">YOUR ORDER</h2>
			<div className="card__order__list">
				{items && <OrderList items={items} />}	
			</div>
			<div className="card__price__container">
				<p className="card__price__total">TOTAL:</p>
				<span className="card__price">
					$ {items && items.map( price => (price.price)).reduce((a, b) => a + b)}
				</span>
			</div>
			<div className="card__checkbox__conditions">
				<input type="checkbox" />
				<p className="card__conditions">I have read and agree to <a href="#">the terms and conditions</a></p>
			</div>
			<button className="place__order__btn">place order</button>
		</div>
	</div>
	);
}
export default Card;