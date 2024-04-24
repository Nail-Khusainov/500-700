import React, { useState } from "react";
import './FaqSection.css';
import vector from '../../images/icons/Vector.svg'

function FaqSection() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);
    const [expanded5, setExpanded5] = useState(false);

    const toggleExpanded1 = () => {
        setExpanded1(!expanded1);
    };

    const toggleExpanded2 = () => {
        setExpanded2(!expanded2);
    };

    const toggleExpanded3 = () => {
        setExpanded3(!expanded3);
    };

    const toggleExpanded4 = () => {
        setExpanded4(!expanded4);
    };

    const toggleExpanded5 = () => {
        setExpanded5(!expanded5);
    };

    const handleKeyPress = (event, toggleExpanded) => {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleExpanded();
        }
    };

    return (
        <section id="faq-section" className="faq-section">
            <h2 className="faq__title">
                FAQ
            </h2>

            <div className="faq__block">
                <div className="faq__element">
                    <div className="faq__question">
                        <div
                            className={`faq__question-line toggles ${expanded1 ? 'expanded' : ''}`}
                            onClick={toggleExpanded1}
                            onKeyPress={(event) => handleKeyPress(event, toggleExpanded1)}
                            role="button"
                            tabIndex="0"
                        >
                            <p className="faq__question-text">КАКИЕ УСЛУГИ ПРЕДОСТАВЛЯЕТ ВАША СТУДИЯ?</p>
                            <img className="vector" src={vector} alt="vector" />
                        </div>
                    </div>
                    <div className={`faq__answer ${expanded1 ? 'expandedAnswer' : ''}`}>
                        {expanded1 &&
                            <p className="faq__answer-text">
                                Мы придерживаемся высоких стандартов качества и 
                                стремимся создавать уникальный дизайн, отвечающий потребностям и 
                                ожиданиям наших клиентов. Наши дизайнеры постоянно совершенствуют 
                                свои навыки и следят за новыми трендами в дизайне.
                            </p>
                        }
                    </div>
                </div>

                <div className="faq__element">
                    <div className="faq__question">
                        <div
                            className={`faq__question-line toggles ${expanded2 ? 'expanded' : ''}`}
                            onClick={toggleExpanded2}
                            onKeyPress={(event) => handleKeyPress(event, toggleExpanded2)}
                            role="button"
                            tabIndex="0"
                        >
                            <p className="faq__question-text">КАК ВЫ ОБЕСПЕЧИВАЕТЕ КАЧЕСТВО И УНИКАЛЬНОСТЬ ДИЗАЙНА?</p>
                            <img className="vector" src={vector} alt="vector" />
                        </div>
                    </div>
                    <div className={`faq__answer ${expanded2 ? 'expandedAnswer' : ''}`}>
                        {expanded2 &&
                            <p className="faq__answer-text">
                                Мы придерживаемся высоких стандартов качества и 
                                стремимся создавать уникальный дизайн, отвечающий потребностям и 
                                ожиданиям наших клиентов. Наши дизайнеры постоянно совершенствуют 
                                свои навыки и следят за новыми трендами в дизайне.
                            </p>
                        }
                    </div>
                </div>

                <div className="faq__element">
                    <div className="faq__question">
                        <div
                            className={`faq__question-line toggles ${expanded3 ? 'expanded' : ''}`}
                            onClick={toggleExpanded3}
                            onKeyPress={(event) => handleKeyPress(event, toggleExpanded3)}
                            role="button"
                            tabIndex="0"
                        >
                            <p className="faq__question-text">ПРЕДОСТАВЛЯЕТЕ ЛИ ВЫ УСЛУГИ ПО СОЗДАНИЮ КОНТЕНТА ДЛЯ САЙТОВ И ПРИЛОЖЕНИЙ?</p>
                            <img className="vector" src={vector} alt="vector" />
                        </div>
                    </div>
                    <div className={`faq__answer ${expanded3 ? 'expandedAnswer' : ''}`}>
                        {expanded3 &&
                            <p className="faq__answer-text">
                                Мы придерживаемся высоких стандартов качества и 
                                стремимся создавать уникальный дизайн, отвечающий потребностям и 
                                ожиданиям наших клиентов. Наши дизайнеры постоянно совершенствуют 
                                свои навыки и следят за новыми трендами в дизайне.
                            </p>
                        }
                    </div>
                </div>                
            </div>
        </section>
    );
}

export default FaqSection;
