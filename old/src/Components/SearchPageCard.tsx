import React from "react";
interface CardData {
  title: string;
  author: string;
  date: string;
  views: number;
  favorites: number;
  installs: number;
  comments: number;
  description: string;
  tags: object;
  image: string;
}

const SearchPageCard: React.FC<CardData> = ({
  title,
  author,
  date,
  views,
  favorites,
  installs,
  comments,
  description,
  tags,
  image,
}) => {
  // Your code here
  return (
    <div className="search-card-container">
      <div className="search-card-image">
        <img src={image} alt="Card Image" />
      </div>

      <div className="search-card-content">
        <div className="search-card-top">
          <div className="search-card-title">
            <h2>{title}</h2>
          </div>

          <div className="search-card-author">
            <p>Author: {author}</p>

            <p>Date: {date}</p>
          </div>

          <div className="search-card-stats">
            <p>Views: {views}</p>

            <p>Favorites: {favorites}</p>

            <p>Installs: {installs}</p>

            <p>Comments: {comments}</p>
          </div>
        </div>

        <div className="divider" />

        <div className="search-card-bottom">
          <div className="search-card-description">
            <p>Description: {description}</p>
          </div>

          <div className="search-card-tags">
            <p>Tags: {JSON.stringify(tags)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPageCard;
