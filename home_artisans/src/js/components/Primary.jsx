import React from "react";
import { Link } from "react-router-dom";

const Primary = () => {
	return (
		<div className="primary">
			<div className="primary__first">
				<h2 className="primary__quote">become a ARTISANS of beauty </h2>
				<span className="primary__bold">in your HOME</span>
			</div>
			<div className="primary__second"></div>
			<div className="primary__third" id="about">
				<p className="primary__third__quote">
					We help people like you make positive changes for the
					<span className="quote__color"> benefits </span>of our
					planet. we source and provide the goods so you can be
					assured the choices you're making are
					<span className="quote__color"> sustainable </span>
					ones
				</p>
				<Link to="/about" className="primary__third__about">
					MORE ABOUT US{" "}
					<img className="arrow" src="../src/assets/arrow.png"></img>
				</Link>
			</div>
		</div>
	);
};

export default Primary;
