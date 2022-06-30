import React from 'react';
import Benefits from '../components/Benefits';
import Featured from '../components/Featured';
import Landing from '../components/Landing';
import Discounted from '../components/Discounted';
import Explore from '../components/Explore';

const Home = () => {
    return (
        <div>
            <Landing/>
            <Benefits/>
            <Featured/>
            <Discounted/>
            <Explore/>
        </div>
    );
}

export default Home;
