import React from 'react';

const Confirmation = ({ name, cart }) => {
    return (
        <div id='confirmation__page'>
            <h1 className='confirmation__header'>Confirmation</h1>
            <h2>Thank you for purchasing, {name}</h2>
            <h3>The game(s) you purchased were</h3>
                <ul className='games__bought--list'>
                {cart.map(item => {
                    return (
                       <li className='games__bought'>{item.title}</li>
                    )
                })}
                </ul>
                <button  className="btn__download btn" onClick={() => alert("Not Possible")}>
                    Download Now
                </button>
        </div>
    );
}

export default Confirmation;
