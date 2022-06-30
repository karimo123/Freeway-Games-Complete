import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Price from './Price';
import Rating from './Rating';

const Game = ({ game }) => {
    const [img, setImg] = useState()
    
    useEffect(() => {
        const image = new Image()
        image.src = game.url
        setTimeout(() => {
            setImg(image)
        }, 300)

    }, [])

    return (
        <div className="game">
            {
                img ?
                    <>
                        <Link to={`/games/${game.id}`}>
                            <figure className="game__img--wrapper">
                                <img src={img.src} alt="" className="game__img" />
                            </figure>
                        </Link>
                        <div className="game__title">
                            <Link to={`/games/${game.id}`} className="game__title--link">
                                {game.title}
                            </Link>
                        </div>
                        <Rating rating={game.rating} />
                        <Price originalPrice={game.originalPrice} salePrice={game.salePrice} />
                    </> :
                    <>
                        <div className="game__img--skeleton"></div>
                        <div className="skeleton game__title--skeleton"></div>
                        <div className="skeleton game__rating--skeleton"></div>
                        <div className="skeleton game__price--skeleton"></div>
                    </>
            }




        </div>
    );
}

export default Game;
