// News.js
import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: true,
    };
  }
  async fetchData(category) {
    const apiKey = 'BXXtksO801hCdXNr2XzdmCvYV5PAeAruqC8Lv7Hi';
    const url = `https://api.thenewsapi.com/v1/news/headlines?locale=in&language=en&category=${category}&api_token=${apiKey}`;

    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Upgrade': 'HTTP/1.1',
    });

    try {
      const response = await fetch(url, { headers });
      const data = await response.json();
      this.setState({ articles: data.articles, loading: false });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    const { category } = this.props;
    this.fetchData(category);
  }

  componentDidUpdate(prevProps) {
    const { category: newCategory, darkMode: newDarkMode } = this.props;
    const { category: prevCategory, darkMode: prevDarkMode } = prevProps;

    if (newCategory !== prevCategory || newDarkMode !== prevDarkMode) {
      this.setState({ loading: true });
      this.fetchData(newCategory);
    }
  }

  render() {
    const { loading, articles } = this.state;
    const { category, darkMode } = this.props;

    return (
      <div className={`container my-3 ${darkMode ? 'dark' : 'light'}`}>
        <h2>{category === 'general' ? 'The Matrix Top Headlines' : `Headlines on ${category}`}</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row justify-content-center">
            {articles && articles.length > 0 ? (
              articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 44) : ''}
                    description={element.description ? element.description.slice(0, 88) : ''}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    darkMode={darkMode}
                  />
                </div>
              ))
            ) : (
              <p>No articles available.</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default News;
