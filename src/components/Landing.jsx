import React from 'react';
import homeImg from "../assets/undraw_gaming.svg"


const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Canada's Most Awarded Online Gaming Platform</h1>
                        <h2>Find your Favorite Games <span className="blue">FreeWay Games</span></h2>
                        <a href="#features">
                            <button className="btn">Browse Featured Games</button>
                        </a>
                        <div>
                            <figure className="header__img--wrapper">
                                <img src={homeImg} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
}

export default Landing;
