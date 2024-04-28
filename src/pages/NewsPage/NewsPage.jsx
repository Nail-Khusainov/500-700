import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { news } from '../../components/News/Data';
import './NewsPage.scss'

const NewsPage = () => {
  const { id } = useParams();
  const index = parseInt(id, 10);
  const newsItem = news[index];

  useEffect(() => {
    console.log("useEffect triggered");
    window.scrollTo(0, 0);
  }, []);

  console.log(newsItem);

  if (!newsItem) {
    return <div>Новость не найдена</div>;
  }

  const { image, title, text, caption, subtitle, fulltext } = newsItem;
  const subtitleUp = subtitle.toUpperCase();

  return (
    <div className='newspage'>
      <img className="newspage__image" src={image} alt={title} />
      <div className="newspage__text-block">
        <h1 className="newspage__title">{title}</h1>
        <p className="newspage__caption">{caption}</p>
        <h3 className="newspage__subtitle">{subtitleUp}</h3>
        <div className="newspage__fulltext">
          {Object.values(fulltext).map((paragraph, index) => (
            <p key={index} className="newspage__paragraph">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;



