import React from "react";
import PopUpOne from "../../../src/assets/images/san8-ok.png";
import PopUpTwo from "../../../src/assets/images/san9-ok.png";

import '../../App.css';

const popupTwo = (props) => (
    <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src={PopUpOne} alt="Tour photo" className="popup__img"></img>
                    <img src={PopUpTwo} alt="Tour photo" className="popup__img"></img>
                </div>
                <div className="popup__right">
                    <a href="#section-options" className="popup__close">&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-small">Primește oferta noastră acum!</h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; </h3>
                    <p className="popup__text">
                       servicii 2
                    </p>
                    <a href="#section-book" className="btn btn--green">Trimite-mi oferta acum!</a>
                </div>
            </div>
        </div>
);
export default popupTwo;