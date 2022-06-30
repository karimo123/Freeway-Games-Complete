import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from "../assets/empty_cart.svg"

const Cart = ({ name, cart, changeQuantity, removeItem, changeName }) => {

    const total = () => {
        let price = 0
        cart.forEach(item => {
            price += +((item.salePrice || item.originalPrice) * item.quantity)
        })
        return price
    }

    return (
        <div id="games__body">
            <main id="games__main">
                <div className="games__container">
                    <div className="row">
                        <div className="game__selected--top">
                            <h2 className="cart__title">
                                Cart
                            </h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__game">Game</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {
                                    cart.map(game => {
                                        return (
                                            <div key={game.id} className="cart__item">
                                                <div className="cart__game">
                                                    <img src={game.url} alt="" className="cart__game--img" />
                                                    <div className="cart__game--info">
                                                        <span className="game__title">{game.title}</span>
                                                        <span className="cart__game--price">
                                                            ${(game.salePrice || game.originalPrice).toFixed(2)}
                                                        </span>
                                                        <button className="cart__game--remove" onClick={() => removeItem(game)}>
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="cart__quantity">
                                                    <input type="number"
                                                        min={0} max={99}
                                                        value={game.quantity}
                                                        className="cart__input"
                                                        onChange={(event) => changeQuantity(game, event.target.value)}
                                                    />
                                                </div>
                                                <div className="cart__total">
                                                    ${
                                                        ((game.salePrice || game.originalPrice) * game.quantity).toFixed(2)
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            {cart.length === 0 && <div className="cart__empty">
                                <img src={EmptyCart} alt="" className="cart__empty--img" />
                                <h2>You don't have any games in your cart!</h2>
                                <Link to="/games">
                                    <button className="btn">Browse Games</button>
                                </Link>
                            </div>}
                        </div>
                        {cart.length > 0 &&

                            <div className="checkout__box">
                                <div className="customer__info">
                                    <div className="information__input--wrapper">
                                        <h6>Enter Credit Card Number:</h6>
                                        <input type="text" className='information__input' />
                                    </div>
                                    <div className="information__input--wrapper">
                                        <h6>Enter Full Name:</h6>
                                        <input
                                            type="text"
                                            className='information__input'
                                            onChange={(event) => changeName(event.target.value)}
                                            value={name} />
                                    </div>
                                </div>
                                <div className="total">
                                    <div className="total__item total__sub-total">
                                        <span>Subtotal</span>
                                        <span>${(total() * 0.9).toFixed(2)}</span>
                                    </div>
                                    <div className="total__item total__tax">
                                        <span>Tax</span>
                                        <span>${(total() * 0.1).toFixed(2)}</span>
                                    </div>
                                    <div className="total__item total__price">
                                        <span>Total</span>
                                        <span>${(total()).toFixed(2)}</span>
                                    </div>
                                    <Link to="/confirmation">
                                        <button className="btn btn__checkout" >
                                            Purchase Game
                                        </button>
                                    </Link>

                                </div>
                            </div>}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;
