import React from 'react';
import Logo from "../assets/Logo.png"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = ({numberOfItems}) => {
    function openMenu(){
        document.body.classList += " menu--open"

    }
    function closeMenu(){
        document.body.classList.remove("menu--open") 
        
    }
    return (
            <nav>
                <div className="nav__container">
                    <Link to="/">
                        <img src={Logo} alt="" className="logo" />
                    </Link>
                    <ul className='nav__links'>
                        <li className="nav__list">
                            <Link to="/" className="nav__link">
                                Home
                            </Link> 
                        </li>
                        <li className="nav__list">
                            <Link to="/games" className="nav__link">
                                All Games
                            </Link>
                        </li>
                        <li className="nav__list">
                            <Link to="/aboutUs" className="nav__link">
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav__list">
                            <Link to="/FAQ" className="nav__link">
                                FAQs
                            </Link>
                        </li>
                        <button className='btn__menu' onClick={openMenu}>
                            <FontAwesomeIcon icon="bars" />
                        </button>
                        <li className="nav__icon">
                            <Link to="/cart" className='nav__link'>
                                <FontAwesomeIcon icon="shopping-cart" />
                            </Link>
                            {
                                numberOfItems > 0 && <span className="cart__length"> {numberOfItems} </span>
                            }
                        </li>
                    </ul>
                    <div className="menu__backdrop">
                        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                            <FontAwesomeIcon icon="times" />
                        </button>
                        <ul className="menu__links">
                            <li className="menu__list" onClick={closeMenu}>
                                <Link to="/" className='menu__link' >
                                    Home
                                </Link>
                            </li>
                            <li className="menu__list" onClick={closeMenu}>
                                <Link to="/games" className='menu__link' >
                                    Games
                                </Link>
                            </li>
                            <li className="menu__list" onClick={closeMenu}>
                                <Link to="/cart" className='menu__link' >
                                    Cart
                                </Link>
                            </li>
                            <li className="menu__list" onClick={closeMenu}>
                                <Link to="/aboutUs" className='menu__link' >
                                    Contact Us
                                </Link>
                            </li>
                            <li className="menu__list" onClick={closeMenu}>
                                <Link to="/aboutUs" className='menu__link' >
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Nav;
