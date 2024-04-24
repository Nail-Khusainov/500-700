import React, { useState } from "react";
import "./Header.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import arrow from '../../images/icons/Vector.svg'
import PopupForm from '../PopupForm/PopupForm';
import { HashLink as NavLink } from 'react-router-hash-link';

function Header() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };
    
    const openPopup = () => {
        setPopupVisible(true);
    };

    const toggleExpanded1 = () => {
        setExpanded1(!expanded1);
        setOverlayVisible(!overlayVisible);
    };

    const toggleExpanded2 = () => {
        setExpanded2(!expanded2);
        setOverlayVisible(!overlayVisible);
    };

    const closeMenu = () => {
        setExpanded1(false);
        setExpanded2(false);
        setOverlayVisible(false);
    };

    return (
        <section className={`header ${expanded1 || expanded2 ? 'overlay-line' : ''}`}>
            {popupVisible && <PopupForm onClose={() => setPopupVisible(false)} />}
            <nav className='header__nav'>
                <NavLink to="/" className="header__logo" onClick={scrollTop}></NavLink>
                <BurgerMenu />
            </nav>

            <div className="header__nav-links">
                <div className={`header__expand-element ${expanded1 ? 'z-index' : ''}`}>
                    <div className="header__element-before">
                        <div
                            className={`toggle ${expanded1 ? 'expanded' : ''}`}
                            onClick={toggleExpanded1}
                            role="button"
                            tabIndex="0"
                        >
                            <p className="header__nav-link">О нас</p>
                            <img className="arrow" src={arrow} alt="arrow" />
                        </div>
                    </div>
                </div>

                <div className={`header__expand-element ${expanded2 ? 'z-index' : ''}`}>
                    <div className="header__element-before">
                        <div
                            className={`toggle ${expanded2 ? 'expanded' : ''}`}
                            onClick={toggleExpanded2}
                            role="button"
                            tabIndex="0"
                        >
                            <p className="header__nav-link">Проекты</p>
                            <img className="arrow" src={arrow} alt="arrow" />
                        </div>
                    </div>
                </div>
                <NavLink className='header__nav-link' to="/#news-section">Новости</NavLink>
                <NavLink className='header__nav-link' to="/#faq-section">FAQ</NavLink>
                <NavLink className='header__nav-link' to="/#footer">Контакты</NavLink>
            </div>


            <div className={`expanded-menu ${expanded1 ? 'expandedAnswer' : ''}`}>
                {expanded1 &&
                    <div className="header__aboutus">
                        <div className="header__aboutus-column">
                            <a
                                href="https://500na700.ru/my/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='header__nav-link'
                            >
                                О 500на700
                            </a>
                            <a
                                href="https://500na700.ru/offer/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='header__nav-link'
                            >
                                Документы
                            </a>
                            <a
                                href="https://500na700.ru/project/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='header__nav-link'
                            >
                                Устойчивое развитие
                            </a>

                        </div>
                        <div className="header__aboutus-column">
                            <a
                                href="https://500na700.ru/my/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='header__nav-link'
                            >
                                Команда
                            </a>
                            <a
                                href="https://500na700.ru/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='header__nav-link'
                            >
                                Стратегия
                            </a>
                        </div>
                    </div>
                }
            </div>

            {overlayVisible && <div className="header-overlay" onClick={closeMenu}></div>}

            <div className="header__authbar">
                <button
                    className='header__btn'
                    onClick={openPopup}
                >
                    Связаться с нами
                </button>
            </div>
        </section>
    );
}

export default Header;
