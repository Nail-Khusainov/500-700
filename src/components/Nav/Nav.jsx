import React, { useState } from "react";
import arrow from '../../images/icons/Vector.svg'
import { HashLink as NavLink } from 'react-router-hash-link';
import "./Nav.scss"
import links from "./Data/FirstLink";
import links2 from "./Data/SecondLink"

function Nav({onClose}) {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const closeMenu = () => {
        setExpanded1(false);
        setExpanded2(false);
        setOverlayVisible(false);
    };

    const extandLink1 = () => {
        setExpanded1(true);
        setOverlayVisible(true);
    };

    const extandLink2 = () => {
        setExpanded2(true);
        setOverlayVisible(true);
    };

    const toggleMenu = () => {
        if (expanded1) {
            setExpanded1(false);
            setOverlayVisible(false);
        } else {
            setExpanded1(true);
            setOverlayVisible(true);
        }
    }

    const toggleMenu2 = () => {
        if (expanded2) {
            setExpanded2(false);
            setOverlayVisible(false);
        } else {
            setExpanded2(true);
            setOverlayVisible(true);
        }
    }

    const handleMouseLeave = () => {
        setExpanded1(false);
        setExpanded2(false);
        setOverlayVisible(false);
    };

    return (
        <section className="nav">
            <div className={`nav ${expanded1 || expanded2 ? 'nav__extend-bg' : ''}`}></div>
            <div className="nav__links">

                <div
                    className={`nav__expand-element ${expanded1 ? 'z-index' : ''}`}>
                    <div
                        className={`nav__link-and-arrow ${expanded1 ? 'expanded' : ''}`}
                        onMouseEnter={extandLink1}
                        onMouseLeave={handleMouseLeave}
                        onClick={toggleMenu}
                        role="button"
                        tabIndex="0"
                    >
                        <div className="nav__link-box">
                            <p className="nav__link">
                                О нас
                                <span className="span">
                                    <img className="arrow" src={arrow} alt="arrow" />
                                </span>
                            </p>
                            {expanded1 && (
                                <div className="nav__aboutus">
                                    {links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__link"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={`nav__expand-element ${expanded2 ? 'z-index' : ''}`}>
                    <div
                        className={`nav__link-and-arrow ${expanded2 ? 'expanded' : ''}`}
                        onMouseEnter={extandLink2}
                        onMouseLeave={handleMouseLeave}
                        onClick={toggleMenu2}
                        role="button"
                        tabIndex="0"
                    >
                        <div className="nav__link-box">
                            <p className="nav__link">
                                Проекты
                                <span className="span">
                                    <img className="arrow" src={arrow} alt="arrow" />
                                </span>
                            </p>
                            {expanded2 && (
                                <div className="nav__aboutus">
                                    {links2.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav__link"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <NavLink onClick={onClose} className='nav__link' to="/#news-section">Новости</NavLink>
                <NavLink onClick={onClose} className='nav__link' to="/#faq-section">FAQ</NavLink>
                <NavLink onClick={onClose} className='nav__link' to="/#footer">Контакты</NavLink>
            </div>
            {overlayVisible && <div className="nav__overlay" onClick={closeMenu}></div>}
        </section>
    )
}

export default Nav;
