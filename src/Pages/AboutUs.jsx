import React from 'react';

const AboutUs = () => {
    return (
        <div id='aboutUs'>
            <div className="about__us--container">
                <div className='contactAndOpening'>
                    <div className="contact__info">
                        <h3>Freeway Games</h3>
                        <p className='info__piece'>1475 Leeves Avenue, Ottawa, Ontario</p>
                        <p className='info__piece'>FreewayGames@games.com</p>
                        <p className='info__piece'>453-535-3414 (Avabilable on Opening Hours)</p>
                    </div>
                    <div className="opening__hours">
                        <h3 >Opening Hours</h3>
                        <p className='info__piece' >Monday - Saturday &nbsp;&nbsp; &nbsp;11:00am - 8pm</p>
                        <p className='info__piece' >Sunday &nbsp;&nbsp; &nbsp; Closed</p>
                        <p className='info__piece note'>Note: Our opening hours are the same on holidays</p>
                    </div>
                </div>
                <div className="our__story--container">
                    <h3>Our Story</h3>
                    <p className='our__story--para info__piece'>Lorem ipsum dolor sit, amet co
                        nsectetur adipisicing elit. Quod a
                        ut voluptates, quos error incidunt par
                        iatur iure eum exercitationem cupiditate
                        vel omnis atque. Accusantium iste quaerat optio
                        dicta vel, quibusdam eius.</p>
                </div>
            </div>

        </div>
    );
}

export default AboutUs;
