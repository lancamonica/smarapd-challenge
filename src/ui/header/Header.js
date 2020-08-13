// external 
import React from 'react';
import { Link } from 'react-router-dom';
// internal 
import { ActionButton } from 'ui';
// style
import './Header.scss';

const Header = ({
    username,
    title,
    link,
    labelButton,
    onClick
}) => (
    <div className="header">
        <h2>{username}</h2>
        <h1>{title}</h1>
        <Link to={link}>
            <ActionButton onClick={onClick} label={labelButton}/>
        </Link>
    </div>
)

export default Header; 