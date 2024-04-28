import React, { useState } from "react";
import "./Header.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import PopupForm from '../PopupForm/PopupForm';
import { HashLink as NavLink } from 'react-router-hash-link';
import Nav from "../Nav/Nav";

function Header() {
    const [popupVisible, setPopupVisible] = useState(false);

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    const openPopup = () => {
        setPopupVisible(true);
    };

    return (
        <section className="header">
            <div className="header__navigation">
                <Nav />
            </div>
            {popupVisible && <PopupForm onClose={() => setPopupVisible(false)} />}
            <NavLink to="/" className="header__logo" onClick={scrollTop}></NavLink>
            <BurgerMenu />
            <button
                className='header__btn'
                onClick={openPopup}
            >
                Связаться с нами
            </button>
        </section>
    );
}

export default Header;
