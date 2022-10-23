import React from "react";

function Contact() {
	return (
        <>
		<div className="contact__container">
			<div className="contact__info">
				<p className="contact__title">CONTACT US</p>
				<a className="contact__email" href="#">shop@homeartisans.com</a>
				<p className="contact__telephone">+48 669 556 216</p>
                <p className="contact__adres1">6250 S ARCHER AVE, IL 60638-2667</p>
                <p className="contact__adres2">CHICAGO, USA</p>
			</div>
            <form className="contact__form">
                <div className="contact__input__top">
                <input className="contact__input" type="text" placeholder="name" />
                <input className="contact__input" type="email" placeholder="e-mail" />
                </div>
                <div className="contact__input__bottom">
                <textarea className="contact__input" type="textarea"  rows="4" cols="25" placeholder="your message"/>
                <button className="contact__btn">send<div className="contact__arrow"></div></button>
                </div>
            </form>
		</div>
        <div className="contact__map"></div>
        </>
	);
}

export default Contact;
