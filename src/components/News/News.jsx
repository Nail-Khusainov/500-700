import React from 'react';
import "./News.scss"
import { news } from "./Data"
import NewsCard from '../NewsCard/NewsCard';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import "../../styles/slick-slider/slick.scss";
import "../../styles/slick-slider/slick-theme.scss";

const News = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="news" id="news-section">
      <div className="news__title">НОВОСТИ</div>
      <div className="news__desktop">
        {news.map((item, index) => (
          <NavLink to={`/newspage/${index}`} className="news__element">
            <NewsCard key={index} newsItem={item} />
          </NavLink>
        ))}
      </div>
      <Slider {...settings}>
        {news.map((item, index) => (
          <div key={index} >
            <NavLink className="news__element" to={`/newspage/${index}`}>
              <NewsCard newsItem={item} />
            </NavLink>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default News;
