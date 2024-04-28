import React, { useState } from "react";
import "./BurgerMenu.scss";
import PopupForm from '../PopupForm/PopupForm';
import Nav from "../Nav/Nav";

function BurgerMenu() {
    const [isBurgerOpened, setIsBurgerOpened] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);

    const toggleBurgerMenu = () => {
        setIsBurgerOpened(!isBurgerOpened);
    };

    const openPopup = () => {
        setPopupVisible(true);
    };

    return (
        <section className='burger'>
            {popupVisible && <PopupForm onClose={() => setPopupVisible(false)} />}

            <div className="burger__menu">
                {isBurgerOpened ? (
                    <button
                        className="burger__close-button opened"
                        onClick={toggleBurgerMenu}
                    />
                ) : (
                    <button
                        className={`burger__button ${isBurgerOpened ? 'opened' : ''}`}
                        onClick={toggleBurgerMenu}
                    />
                )}
                {isBurgerOpened && (
                    <>
                        <ul className="burger__menu-list">
                            <Nav onClose={toggleBurgerMenu} />
                            <div className="header__authbar">
                                <button
                                    className='burger__contact-btn'
                                    onClick={openPopup}
                                >
                                    Связаться с нами
                                </button>
                            </div>
                        </ul>

                        <div className="burger-overlay" onClick={toggleBurgerMenu} />
                    </>
                )}
            </div>
        </section>
    );
}

export default BurgerMenu;
