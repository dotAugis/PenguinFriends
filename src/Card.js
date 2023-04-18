import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-orange dib br3 pa3 ma2 grow bw2 shadow-2'>
            <img src={`https://robohash.org/${id}?set=set5`} width='200' alt='a cat'/>
            <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;