// external
import React from 'react';
// internal
import './CardItem.scss'

const CardItem = ({
    img,
    userName,
    userDescription,
    onClick
}) => {
    return (
        <div className="card-item" onClick={onClick}>
            <div className="img-content">
                <img className='img-user' src={img} alt={userName}/>                    
            </div>
            <div className="content">
                <strong>
                    {userName}
                </strong>
                <span>
                    {userDescription}
                </span>
            </div>   
        </div>
    )
}

export default CardItem;