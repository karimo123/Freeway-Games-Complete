import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={Logo} className='footer__logo--img' alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className='footer__link'>Home</Link>
                        <Link to="/aboutUs" className='footer__link'> About</Link>
                        <Link to="/games" className="footer__link">Games</Link>
                        <Link to="/cart" className="footer__link">Cart</Link>
                    </div>
                   
                </div>
            </div>
        </footer>
    );
}

export default Footer;
