import React from "react";

function OrderList({items}) {

	return <div className="order__list__container">
			{items.map((item) => {
				return (
					<div key={item.id} className="order__list">
						<img className="order__img" src={item.image_url}/>
						<div className="order__middle__section">	
							<h2 className="order__name">{item.name}</h2>
							<div className="order__middle__bottom">
								<button className="order__btn__subtract order__btn">-</button>
								<p className="order__product__counter">1</p>
								<button className="order__btn__add order__btn">+</button>
								<p className="order__product__price">${item.price}</p>
							</div>
						</div>
						<button className="order__right__section">x</button>
					</div>
				)
			})}
		
	</div>;
}

export default OrderList;
