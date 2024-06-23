import React from 'react';
import './NewsItem.css';

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="news-item my-3">
      <div className="card">
        <div className="badge-container">
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjs0rKvYAeL85hJXV96n27E_Yc7IGIgM5Yg&s"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">View more</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
