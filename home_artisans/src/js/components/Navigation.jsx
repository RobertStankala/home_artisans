import React from "react";
import { useState, useEffect } from 'react'
import {Link} from "react-router-dom";


function Navi() {

	const [item, setItem] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/card")
        .then((res) => { 
			return res.json();
		})
        .then((data) => {
            setItem(data);
            console.log(data);
          })
	},[]);

	const hamburger__active = () => {

		const burger = document.querySelector('.hamburger');
		const navList = document.querySelector('.navigation__list');
		const innerLine = document.querySelector('.hamburger__inner')

		burger.classList.toggle('hamburger__active');
		navList.classList.toggle('navigation__list__active');
		innerLine.classList.toggle('hamburger__inner__active');

		
	}

	return (
		<header id="header" className="header_container container">
				<Link to="/" className="logo">HOME ARTISANS</Link>
				<nav className="navigation">
					<ul className="navigation__list">
						<li className="navigation_item"><Link to="/about" className="nav__link">ABOUT</Link></li>
						<li className="navigation_item"><Link to="/shop" className="nav__link">SHOP</Link></li>
						<li className="navigation_item"><Link to="/blog" className="nav__link">BLOG</Link></li>
						<li className="navigation_item"><Link to="/contact" className="nav__link">CONTACT US</Link></li>
						<li className="navigation_item account"><Link to="/account" className="nav__link">ACCOUNT</Link></li>
						<li className="navigation__item">
							<div className="hamburger__contact">
								<a className="hamburger__email" href="#">shop@homeartisans.com</a>
								<p className="hamburger__telephone">+48 669 556 216</p>
								<div className="hamburger__social">
									<a className="social__links" href="#"><img className="social__img" src="../src/assets/facebook.png"></img></a>
									<a className="social__links" href="#"><img className="social__img" src="../src/assets/instagram.png"></img></a>
									<a className="social__links" href="#"><img className="social__img" src="../src/assets/twitter.png"></img></a>
								</div>
							</div>
						</li>
					</ul>
					<div className="header__order">
						<Link to="/card"><img className='card' src="../src/assets/bag.png"></img></Link>
						<span className="card order__counter">{item.length}</span>
					</div>
					<button onClick={hamburger__active} className="hamburger">
						<div className="hamburger__box">
							<div className="hamburger__inner"></div>
						</div>
					</button>
				</nav>
		</header>
	);
};

export default Navi;
