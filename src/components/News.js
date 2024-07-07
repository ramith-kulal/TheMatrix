import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      error: null,
    };
  }

  async fetchData(category) {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    const url = `https://api.thenewsapi.com/v1/news/headlines?locale=in&language=en&category=${category}&api_token=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ articles: data.articles, loading: false, error: null });
    } catch (error) {
      this.setState({ loading: false, error: error.message });
      console.error('Error fetching data:', error);
    }
  }

  componentDidMount() {
    const { category } = this.props;
    this.fetchData(category);
  }

  componentDidUpdate(prevProps) {
    const { category: newCategory } = this.props;
    const { category: prevCategory } = prevProps;

    if (newCategory !== prevCategory) {
      this.setState({ loading: true });
      this.fetchData(newCategory);
    }
  }

  render() {
    const { loading, articles, error } = this.state;
    const { category, darkMode } = this.props;

    return (
      <div className={`container my-3 ${darkMode ? 'dark' : 'light'}`}>
        <h2>{category === 'general' ? 'The Matrix Top Headlines' : `Headlines on ${category}`}</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : articles.length > 0 ? (
          <div className="row justify-content-center">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 44) : ''}
                  description={element.description ? element.description.slice(0, 88) : ''}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  darkMode={darkMode}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No articles available.</p>
        )}
      </div>
    );
  }
}

export default News;
