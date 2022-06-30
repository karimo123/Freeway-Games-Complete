import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Game from '../components/ui/Game';
import Price from '../components/ui/Price';
import Rating from '../components/ui/Rating';

const GamesInfo = ({ games, addToCart,cart }) => {
    const { id } = useParams()
    const game = games.find(game => +game.id === +id)

    function addGameToCart(game){
        addToCart(game)
    }

    function gameExistsOnCart(){
        return cart.find(game => game.id === +id)
    }
    return (
        <div id="games__body">
            <main id="games__main">
                <div className="games__container">
                    <div className="row">
                        <div className="game__selected--top">
                            <Link to="/games" className="game__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/games" className="game__link">
                                <h2 className="game__selected--title--top">
                                    Games
                                </h2>
                            </Link>
                        </div>
                        <div className="game__selected">
                            <figure className="game__selected--figure">
                                <img src={game.url} alt="" className="game__selected--img" />
                            </figure>
                            <div className="game__selected--description">
                                <h2 className="game__selected--title">
                                    {game.title}
                                </h2>
                                <Rating rating={game.rating} />
                                <div className="game__selected--price">
                                    <Price originalPrice={game.originalPrice} salePrice={game.salePrice} />
                                </div>
                                <div className="game__summary">
                                    <h3 className="game__summary--title">
                                        Summary
                                    </h3>
                                    <p className="game__summary--para">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Quam nobis laudantium
                                        iure reiciendis vitae quo non! Sequi, culpa
                                        , earum praesentium, fugit hic possimus rem
                                        totam minus aut ullam quae sunt?
                                    </p>
                                    <p className="game__summary--para">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Quam nobis laudantium
                                        iure reiciendis vitae quo non! Sequi, culpa
                                        , earum praesentium, fugit hic possimus rem
                                        totam minus aut ullam quae sunt?
                                    </p>
                                </div>
                                {
                                   gameExistsOnCart() ?
                                    (<Link to="/cart"><button className="btn">Checkout</button></Link> ): 
                                    <button className="btn" onClick={() => addGameToCart(game)}>Add to cart</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="games__container">
                    <div className="row">
                        <div className="game__selected--top">
                            <h2 className="game__selected--title--top">
                                Recommended Games
                            </h2>
                        </div>
                        <div className="games">
                            {
                                games
                                    .filter(game => game.rating === 5 && +game.id !== +id)
                                    .slice(0,4)
                                    .map(game => <Game game={game} key={game.id} />)
                            }
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default GamesInfo;
