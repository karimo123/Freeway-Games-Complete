import React from 'react';

const Confirmation = ({ name, copyCart }) => {
    return (
        <div id='confirmation__page'>
            <h1 className='confirmation__header'>Confirmation</h1>
            <h2>Thank you for purchasing, {name}</h2>
            <h3>The game(s) you purchased were</h3>
                <ul className='games__bought--list'>
                {
                copyCart.filter(item1 => item1.quantity > 0)
                .map(item => {
                    return (
                       <li className='games__bought'>{item.title} (Amount: {item.quantity})</li>
                    )
                })}
                </ul>
                <button className="btn__download btn" onClick={() => alert("Not Possible Yet")}>
                    Download Now
                </button>
        </div>
    );
}

export default Confirmation;
