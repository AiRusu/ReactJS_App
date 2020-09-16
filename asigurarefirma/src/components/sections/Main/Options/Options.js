import React from 'react';
import Option from "../Options/Option";
/* import Details from "../Options/Details"; */
import OptionHeader from '../Options/OptionHeader';
import Backside from '../Options/Backside';
import PopupOne from "../../../popup/popupOne"

import '../../../../App.css';
import PopupTwo from '../../../popup/popupTwo';
import PopupThree from '../../../popup/popupThree';


const optionsToDisplay = {'one': ["Acces extins în clinici de oncologie", 
                                "Suport specializat pe durata spitalizării", 
                                "Servicii medicale și non-medicale: tratamente psihologice și nutriție"],
                         'two': ["Acces extins în spitale private",
                                "Suport specializat pe durata spitalizării",
                                "Servicii hoteliere",
                                "Medicamente și dispozitive medicale"],
                        'three': ["Acces extins în peste 800 clinici private",
                                 "Suport specializat pe durata spitalizării",
                                 "Monitorizare sarcină și naștere"]}

const options = (props) => (
<section className="section-options" id="section-options">
    <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
            Pachetele noastre
        </h2>
    </div>
    <div className="row">
        <div className="col-1-of-3">
            <div className="card">
                <Option>
                    <div className="card__side card__side--front">
                        <OptionHeader classNamePicture = "card__picture--1"
                                      classNameHeading = "card__heading-span--1">
                                      Vital Care
                        </OptionHeader>
                        <div className = "card__details">
                            <ul>
                                {optionsToDisplay.one.map(detail => <li key= {detail}> {detail} </li>)}
                            </ul>
                        </div>
                    </div>
                    <Backside  cardColor = "card__side--back-1"
                               popupNumber = {PopupOne} >
                              <p className="card__price-only">Doar</p>
                              <p className="card__price-value">250 lei</p>
                    </Backside>    
                </Option>
            </div>
        </div>

        <div className="col-1-of-3">
            <div className="card">
                <Option>
                    <div className="card__side card__side--front">
                        <OptionHeader classNamePicture = "card__picture--2"
                                      classNameHeading = "card__heading-span--2">
                                      Take Care
                        </OptionHeader>
                        <div className = "card__details">
                            <ul>
                                {optionsToDisplay.two.map(detail => <li key= {detail}> {detail} </li>)}
                            </ul>
                        </div>
                    </div>
                    <Backside cardColor = "card__side--back-2"
                              popupNumber = {PopupTwo}>
                              <p className="card__price-only">Doar</p>
                              <p className="card__price-value">350 lei</p>
                    </Backside>    
                </Option>
            </div>
        </div>

        <div className="col-1-of-3">
            <div className="card">
                <Option>
                    <div className="card__side card__side--front">
                        <OptionHeader classNamePicture = "card__picture--3"
                                      classNameHeading = "card__heading-span--3">
                                      360 Care
                        </OptionHeader>
                        <div className = "card__details">
                            <ul>
                                {optionsToDisplay.three.map(detail => <li key= {detail}> {detail} </li>)}
                            </ul>
                        </div>
                    </div>
                    <Backside cardColor = "card__side--back-3"
                              popupNumber = {PopupThree}>>
                              <p className="card__price-only">Doar</p>
                              <p className="card__price-value">400 lei</p>
                    </Backside>    
                </Option>
            </div>
        </div>

    </div>
    <div className="u-center-text u-margin-top-huge">
        <a href="#section-book" className="btn btn--green">Încheie o asigurare acum!</a>
    </div>
</section>
);
export default options;