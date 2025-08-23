import React from "react";
import image from '../assets/images.png'
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline" style={{ maxWidth: "345px" }}>
      <img
        src={src?src:image || "https://via.placeholder.com/345x200?text=No+Image"}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
