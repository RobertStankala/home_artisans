import React from "react";

function SoloProduct() {

    function firstBtn(){
        const firstBtn = document.querySelector('.product__info__top');

        firstBtn.classList.toggle('active__btn1');
    }
    function secondBtn(){
        const secondBtn = document.querySelector('.product__info__middle');

        secondBtn.classList.toggle('active__btn2');
       
    }
    function thirdBtn(){
        const thirdBtn = document.querySelector('.product__info__bottom');

        thirdBtn.classList.toggle('active__btn3');
    }



	return (
		<>
			<div className="solo__product__container">
                <img className="solo__product__img" src="./src/assets/doniczka.jpg"/>
                <div className="solo__product__info">
                    <div className="product__info__top">
                        <div>
                            <p className="product__title"><span className="accent__color"> we are </span>substainable</p>
                            <p className="product__desc">we care about the enviroment and maintain our buisness without depleting natural resorces</p>
                        </div>
                            <button onClick={firstBtn} className="product__info__btn1 active__btn1">+</button>
                    </div>
                    <div className="product__info__middle">
                        <div>
                            <p className="product__title"><span className="accent__color"> we are </span>vegan</p>
                            <p className="product__desc">we do not use any type of animal product</p>
                        </div>
                            <button onClick={secondBtn} className="product__info__btn2 active__btn2">+</button>
                    </div>
                    <div className="product__info__bottom">
                        <div>
                            <p className="product__title"><span className="accent__color"> we are </span>plastic free</p>
                            <p className="product__desc">we only use recycled materials to pack our products</p>
                        </div>
                            <button onClick={thirdBtn} className="product__info__btn3 active__btn3">+</button>
                    </div>
                </div>
            </div>
		</>
	);
}

export default SoloProduct;
