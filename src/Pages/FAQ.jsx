import React from 'react';

const FAQ = () => {
    return (
        <div id='aboutUs'>
            <div className="about__us--container">
                <div className="contact__info">
                    <h3>How to download the games?</h3>
                    <p className='info__piece'>Simply click on the download button after purchasing</p>

                </div>
                <div className="opening__hours">
                    <h3 >I have problems downloading the game</h3>
                    <p className='info__piece' >Call our phone number (453-535-3414) during opening hours for live assistance </p>
                </div>
                <div className="our__story--container">
                    <h3>Is there a way to get the games even cheaper? </h3>
                    <p className='info__piece'>If you are a loyal member of us, you can certainly get discounts </p>
                </div>
                <div className="our__story--container">
                    <h3>I would like to refund a game</h3>
                    <p className='info__piece our__story--para'>You can only refund within 72 hours of purchasing the game, 
                    simply email us at FreewayGames@games.com with your full name, credit card number you used, and the game
                    name you want to refund. You will get your money back within a week.</p>
                </div>
                <div className="our__story--container">
                    <h3>How can I sort the games by the highest rating? </h3>
                    <p className='info__piece our__story--para lastQ' >Simply head to the "Games page" then in the top right corner it will say "sort". 
                    Click on that, then click on "Rating". From there, the highest rated to lowest rated games will be shown. </p>
                </div>

            </div>

        </div>
    );
}

export default FAQ;
