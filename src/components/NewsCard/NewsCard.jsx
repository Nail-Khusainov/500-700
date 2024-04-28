import React from 'react';
import './NewsCard.scss';

const NewsCard = ({ newsItem, index }) => {
  const { image, title, text, caption } = newsItem;

  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-card__image" />
      <div className="news-card__content">
        <h2 className="news-card__title">{title}</h2>
        <p className="news-card__text">{text}</p>
        <p className="news-card__caption">{caption}</p>
      </div>
    </div>
  );
};

export default NewsCard;