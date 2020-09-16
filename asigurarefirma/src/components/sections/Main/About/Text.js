import React from 'react';

import '../../../../App.css';

        
const text = (props) => {
    return(
     <div>   
        <h3 className="heading-tertiary u-margin-bottom-small">{props.titlu}</h3>
        <p className="paragraph">{props.paragraf}</p>

        <h3 className="heading-tertiary u-margin-bottom-small">{props.titlu2}</h3>
        <p className="paragraph">{props.children}</p>

        <a href={props.link} className="btn-text">Află mai multe &rarr;</a> 
     </div>
    );
};

export default text;

       