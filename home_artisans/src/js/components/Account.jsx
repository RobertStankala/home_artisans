import React from "react";

function Account() {
	return <div className="account__container">
		<div className="account__main__box">
			<div className="account__left__section">
				<h2 className="left__account__section__title">welcome back</h2>
				<p className="left__account__section__desc">to keep connected with us please login with your personal info</p>
				<button type="submit" className="singIn__btn">sing in</button>
			</div>
			<div className="account__right__section">
				<div className="account__right__section__container">
			<h2 className="right__account__section__title">create account</h2>
			<div className="right__section__socials">
				<a to="www.facebook.pl" className="socials__links"><img src="./src/assets/facebook.png" alt="" /></a>
				<a to="www.instagram.pl" className="socials__links"><img src="./src/assets/instagram.png" alt="" /></a>
				<a to="www.twitter.pl" className="socials__links"><img src="./src/assets/twitter.png" alt="" /></a>
			</div>
			<p className="right__section__info">or use email for registration</p>
			<div className="right__section__inputs">
				<input className="right__section__input" placeholder="name" type="text" />
				<input className="right__section__input" placeholder="email" type="email" />
				<input className="right__section__input" placeholder="password" type="password" />
			</div>
			<button type="submit" className="singUp__btn">sing up</button>
			</div>
			</div>
		</div>
	</div>;
}

export default Account;
