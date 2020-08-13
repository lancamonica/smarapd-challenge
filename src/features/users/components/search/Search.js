// external
import React from 'react';
// internal
import { InputText, ActionButton } from 'ui';
// style
import './Search.scss';

const Search = ({
    onChange,
    value,
    onClick
}) => {
    return (
        <div className='search'>
            <div className='field'>
                <InputText title="Busca de Usuario: " onChange={onChange} value={value}/>
            </div>
            <div className="search-buttom" to="/users">
                <ActionButton onClick={onClick} label="Buscar"/>
            </div>
        </div>
    )
} 

export default Search;