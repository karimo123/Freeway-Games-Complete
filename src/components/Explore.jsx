import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2 className="section__title">
                        Explore more <span className="blue">Games</span>
                    </h2>
                    <a href="/games">
                        <button className="btn">Explore Games</button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Explore;
