// external
import React from 'react';
// style
import './InputText.scss'

const InputText = ({
    title,
    onChange,
    type,
    value
}) => (

    <div className="field">
        <label htmlFor="input">{title}</label>
        <input onChange={onChange} type={type} name="input" value={value}/>
    </div>

)


export default InputText;

