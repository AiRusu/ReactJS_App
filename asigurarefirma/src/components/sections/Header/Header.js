import React from "react";

import '../../../App.css';
import Logo from '../../../assets/images/Logo.png'

const header = () => (
    <header className="header">
            <div className="header__logo-box">
                <img src={Logo} alt="Logo" className="header__logo"></img>
            </div>

            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Sănătate+</span>
                    <span className="heading-primary--sub">Asigură-ți starea de bine</span>
                </h1>

                <a href="#section-options" className="btn btn--white btn--animated">Încheie o asigurare acum!</a>
            </div>
    </header>
);
export default header;