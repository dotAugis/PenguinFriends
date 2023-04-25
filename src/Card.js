import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
    return (
        <div id='cardStyle' className='tc dib br3 pa3 ma2 grow bw2 shadow-2'>
            <img src={`https://robohash.org/${id}?set=set5`} width='200' alt='a friend'/>
            <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;