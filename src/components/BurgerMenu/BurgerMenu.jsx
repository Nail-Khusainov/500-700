import React, { useState } from "react";
import "./BurgerMenu.css";
import PopupForm from '../PopupForm/PopupForm';

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
                            <li>
                                <a
                                    href="https://500na700.ru/my/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='header__nav-link'
                                >
                                    О 500на700
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://500na700.ru/offer/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='header__nav-link'
                                >
                                    Документы
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://500na700.ru/project/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='header__nav-link'
                                >
                                    Устойчивое развитие
                                </a>
                            </li>
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
