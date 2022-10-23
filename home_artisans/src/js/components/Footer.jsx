import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="footer__container">
			<div className="footer__section__one">
				<h3 className="footer__list__title">HELP</h3>
				<a href="#">suppport</a>
				<a href="#">contact us</a>
				<a href="#">shipping & returns</a>
				<a href="#">faq</a>
			</div>
			<div className="footer__section__two">
				<h3 className="footer__list__title">COMPANY</h3>
				<Link to="/about">about us</Link>
				<Link to="/blog">blog</Link>
				<Link to="/shop">shop</Link>
			</div>
			<div className="footer__section__three">
				<h3 className="footer__list__title">STAY IN TOUCH</h3>
                <div className="footer__social__links">
                    <a href="#"><img className="social__img" src="../src/assets/facebook.png"></img></a>
                    <a href="#"><img className="social__img" src="../src/assets/instagram.png"></img></a>
                    <a href="#"><img className="social__img" src="../src/assets/twitter.png"></img></a>
                </div>
            </div>
			<div className="footer__section__four">
				<h3 className="footer__list__title">NEWSLETTER</h3>
				<p className="footer__news__desc">Stay up to date on our new products, promotions and helpful info on how to be eco</p>
				<div>
					<input type="email" placeholder="enter your e-mail" className="footer__news__input"></input>
					<button type="submit" className="btn__news"><img className="btn__arrow" src="./src/assets/arrow.png" /></button>
                    
                </div>
			</div>
		</div>
	);
}

export default Footer;
