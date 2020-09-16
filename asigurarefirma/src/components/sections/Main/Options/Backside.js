import React from 'react';

import '../../../../App.css';

const backSide = (props) => (

<div className={`card__side card__side--back ${props.cardColor}`}>
    <div className="card__cta">
        <div className="card__price-box">
           {props.children}
        </div>
        <a href= "#popup"
           className="btn btn--white" >Detalii</a>
    </div>
</div>
);
export default backSide;