import React from "react";
import { Link } from "react-router-dom";

function Bestsellers() {
	return (
    <div id="shop">
        <div className="bestsellers__container">
            <div className="bestsellers__section__left">
                <p className="bestsellers__title">explore our bestsellers</p>
                <div className="bestsellers__btn">
                    <button className="btn btnFirst">01</button>
                    <button className="btn btnSecond">02</button>
                    <button className="btn btnThird">03</button>
                </div>
            </div>
            <div className="bestsellers__section__middle">
                <img className="img__section__middle" src="./src/assets/wazon.webp" />
                <p className="name__section__middle">boho flowerpot</p>
                <div className="section__middle__buy">
                    <p className="section__middle__desc">made by eco concrete</p>
                    <p className="section__middle__br">|</p>
                    <p className="section__middle__price">$10.90</p>
                    <button className="section__middle__btn">buy</button>
                </div>
            </div>
            <div className="bestsellers__section__right">    
                <img className="section__right__main__foto" src="./src/assets/wazonXXL.webp" alt="" />
            </div>
        </div>
        <Link className="section__right__shop" to="/shop">go to shop<img className="arrow" src="../src/assets/arrow.png"></img></Link>

    </div>);
}

export default Bestsellers;
