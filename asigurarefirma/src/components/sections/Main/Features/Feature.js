import React from 'react';

import "../../../../App.css";

const feature = (props) => (
<div className="col-1-of-4">
    <div className="feature-box">
        <i className={props.className}></i>
<h3 className="heading-tertiary u-margin-bottom-small">{props.feature}</h3>
        <p className="feature-box__text">{props.children}</p>
    </div>
</div>
)
export default feature;