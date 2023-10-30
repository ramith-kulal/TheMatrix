// NewsItem.js
import React, { Component } from 'react';

class NewsItem extends Component {
  render() {
    const { title, description, imgUrl, newsUrl, darkMode } = this.props;

    return (
      <div className={`card ${darkMode ? 'dark' : 'light'}`}>
        <img
          src={!imgUrl ? 'https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg' : imgUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
