import React from 'react';
import "./News.css"
import { news } from "./Data"
import NewsCard from '../NewsCard/NewsCard';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import "../../styles/slick-slider/slick.css";
import "../../styles/slick-slider/slick-theme.css";

const News = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="news-section" className="news">
      <div className="news__title">НОВОСТИ</div>
      <div className="news__section">
        {news.map((item, index) => (
          <NavLink to={`/newspage/${index}`} className="news-element">
            <NewsCard key={index} newsItem={item} />
          </NavLink>
        ))}
      </div>
      <Slider {...settings} className="news-slider">
        {news.map((item, index) => (
          <div key={index} >
            <NavLink className="news-element" to={`/newspage/${index}`}>
              <NewsCard newsItem={item} />
            </NavLink>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default News;
