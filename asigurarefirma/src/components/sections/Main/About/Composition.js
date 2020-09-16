import React from 'react';

import '../../../../App.css';

const composition = (props) => {
    return (
        <img srcset={props.srcset}
        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
        alt="phone"
        className="composition__photo composition__photo--p1"
        src={props.poza}></img> 
    );
};
export default composition;