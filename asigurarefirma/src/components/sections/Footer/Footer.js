import React from 'react';
import '../../../App.css';
import Logo from "../../../assets/images/Logo.png";


const footer = () => (

    <footer className="footer">
    <div className="footer__logo-box">
            <img src={Logo} alt="Logo" className="header__logo"></img>
    </div>
    <div className="row">
        <div className="col-1-of-2">
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__item"><a href="#" className="footer__link">Despre noi</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Contactează-ne</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Cariere</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Politica de confidențialitate</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Termeni și condiții</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
);

export default footer;