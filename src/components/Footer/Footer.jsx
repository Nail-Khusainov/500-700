import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    return (
        <section id="footer" className="footer">
            <div className="footer__logobox">
                <div className="footer__logo" />
                <img src='' />
                <div className="footer__links">
                    <a
                        className="footer__link footer__link-yt"
                        href="https://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                    <a
                        className="footer__link footer__link-tg"
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                    <a
                        className="footer__link footer__link-vk"
                        href="https://www.apple.com"
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                </div>
            </div>


            <div className="footer__navlinks">
                <div className="footer__navlinks-line">
                    <NavLink to="/aboutus" className="footer__nav-link">
                        О нас
                    </NavLink>
                    <NavLink to="/projects" className="footer__nav-link">
                        Проекты
                    </NavLink>
                    <NavLink to="/news" className="footer__nav-link">
                        Новости
                    </NavLink>
                </div>

                <div className="footer__navlinks-line">
                    <NavLink to="/faq" className="footer__nav-link">
                        FAQ
                    </NavLink>
                    <NavLink to="/contacts" className="footer__nav-link">
                        Контакты
                    </NavLink>
                </div>
            </div>

            <div className="footer__contacts">
                <p className='footer__text'>г. Горгород, <br/> ул. Мегаполисная, 1</p>
                <p className='footer__text'>+7 (000) 000-00-00</p>
                <p className='footer__text'>email@email.ru</p>
            </div>
        </section>
    );
};

export default Footer;
