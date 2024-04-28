import { useState, useRef } from 'react';
import './Slider.scss';
import { NavLink } from "react-router-dom";

function Slider({ images }) {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    }

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
        handleSwipe();
    }

    const handleSwipe = () => {
        const difference = touchStartX.current - touchEndX.current;
        if (Math.abs(difference) > 50) {
            if (difference > 0) {
                slideRight();
            } else {
                slideLeft();
            }
        }
    }

    return (
        <div className="slider__page">

            <div className='slider__container'>
                <div className="slider__info">
                    <a
                        href="https://500na700.ru/project/?category_project[]=sajty"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='slider__btn'>
                        САЙТЫ
                    </a>
                    <h1 className="slider__title">ЗАГОЛО ВОК 1 ЗАГОЛО ВОК 1 ЗАГОЛО ВОК 1</h1>
                    <p className='slider__subtitle'>Описание проекта Описание проекта
                        Описание проекта Описание проекта Описание проекта Описание проекта
                        Описание проекта Описание проекта
                    </p>
                    <div className="slider__arrows">
                        <div className="slider__arrow-left" onClick={slideLeft} />
                        <div className="slider__arrow-right" onClick={slideRight} />
                    </div>

                </div>
                <div className='slider' onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    <div className='slider__wrapper'>
                        {images.map((image, index) => {
                            return (
                                <div className={
                                    index == current
                                        ? "slider__card slider__card-active"
                                        : "slider__card"
                                }
                                    key={index}
                                >
                                    <img className='card__image' src={image.image} alt='' />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
