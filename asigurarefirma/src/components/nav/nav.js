import React from 'react';
import '../../App.css';

const navigation = () => (

<div classNameName="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input> 

            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#section-about" className="navigation__link"><span>01</span>Despre noi</a></li>
                    <li className="navigation__item"><a href="#section-features" className="navigation__link"><span>02</span>Beneficiile tale</a></li>
                    <li className="navigation__item"><a href="#section-tours" className="navigation__link"><span>03</span>Ofertele noastre</a></li>
                    <li className="navigation__item"><a href="#section-book" className="navigation__link"><span>05</span>Încheie o asigurare</a></li>
                </ul>
            </nav>
        </div>
);

export default navigation;