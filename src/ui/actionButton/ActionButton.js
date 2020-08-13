// external
import React from 'react';
// style
import "./ActionButton.scss"

const ActionBottom = ({
    onClick, 
    label
}) => (
    <button className="bottom-login" onClick={onClick}>
        <p className="label">{label}</p>
    </button>

)
    

export default ActionBottom;