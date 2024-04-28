import React, { useState } from "react";
import './FaqSection.scss';
import vector from '../../images/icons/Vector.svg';
import { faqs } from "./Data"


function FaqSection() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpanded = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleKeyPress = (event, index) => {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleExpanded(index);
        }
    };

    return (
        <section id="faq-section" className="faq-section">
            <h2 className="faq__title">
                FAQ
            </h2>

            <div className="faq__block">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq__element">
                        <div className="faq__question">
                            <div
                                className={`faq__question-line toggles ${expandedIndex === index ? 'expanded' : ''}`}
                                onClick={() => toggleExpanded(index)}
                                onKeyPress={(event) => handleKeyPress(event, index)}
                                role="button"
                                tabIndex="0"
                            >
                                <p className="faq__question-text">{faq.question}</p>
                                <img className="vector" src={vector} alt="vector" />
                            </div>
                        </div>
                        <div className={`faq__answer ${expandedIndex === index ? 'expandedAnswer' : ''}`}>
                            {expandedIndex === index &&
                                <p className="faq__answer-text">
                                    {faq.answer}
                                </p>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FaqSection;
