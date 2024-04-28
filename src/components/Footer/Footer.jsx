import { HashLink as NavLink } from 'react-router-hash-link';
import './Footer.scss';

const Footer = () => {

    return (
        <section id="footer" className="footer">
            <div className="footer__logobox">
                <div className="footer__logo" />
                <div className="footer__links">
                    <a
                        className="footer__link footer__link-yt"
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                    <a
                        className="footer__link footer__link-tg"
                        href="https://web.telegram.org/"
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                    <a
                        className="footer__link footer__link-vk"
                        href="https://www.vk.ru"
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                </div>
            </div>


            <div className="footer__navlinks">
                <div className="footer__navlinks-line">
                    <a
                        className="footer__nav-link"
                        href="https://500na700.ru/my/"
                        target="_blank"
                        rel="noopener noreferrer">
                        О нас
                    </a>
                    <a
                        className="footer__nav-link"
                        href="https://500na700.ru/project/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Проекты
                    </a>
                    <NavLink className='footer__nav-link' to="/#news-section">Новости</NavLink>
                </div>

                <div className="footer__navlinks-line">
                    <NavLink className='footer__nav-link' to="/#faq-section">FAQ</NavLink>
                    <NavLink className='footer__nav-link' to="/#footer">Контакты</NavLink>
                </div>
            </div>

            <div className="footer__contacts">
                <p className='footer__text'>г. Горгород, <br /> ул. Мегаполисная, 1</p>
                <p className='footer__text'>+7 (000) 000-00-00</p>
                <p className='footer__text'>email@email.ru</p>
            </div>
        </section>
    );
};

export default Footer;
