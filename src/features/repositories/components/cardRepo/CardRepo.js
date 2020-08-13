// external 
import React from 'react';
// style
import './CardRepo.scss'

const CardRepo = ({
    userName,
    onClick
}) => {
    return (
        <div className="card-repo" onClick={onClick}>
            <div className="content">
                <strong>
                    {userName}
                </strong>
            
            </div>   
        </div>
    )
}

export default CardRepo;