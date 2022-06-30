import React from 'react';
import Benefit from './ui/Benefit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Benefits = () => {
    return (
        <section id="benefits">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="blue">Freeway Games</span>
                    </h2>
                    <div className="benefit__wrapper">
                        <Benefit
                            icon={<FontAwesomeIcon icon="bolt" />}
                            title="Easy and Quick"
                            para="Get access to the video game you purchased online instantly."
                        />
                        <Benefit
                            icon={<FontAwesomeIcon icon="gamepad" />}
                            title=" 10,000+ Games"
                            para="Freeway Games has games in all your favourite categories."
                        />
                        <Benefit
                            icon={<FontAwesomeIcon icon="tags" />}
                            title="Affordable"
                            para=" Get your hands on popular video games for as little as $10"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;
