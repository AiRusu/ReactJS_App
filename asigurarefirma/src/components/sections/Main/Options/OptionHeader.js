import React from 'react';

import '../../../../App.css'

const optionHeader = (props) =>(
<div>
    <div className={ `card__picture ${ props.classNamePicture }`}>
        &nbsp;
    </div>
    <h4 className="card__heading">
        <span className={`card__heading-span, ${props.classNameHeading}`}>
            {props. children} 
        </span>
    </h4>
</div>
);
export default optionHeader;
