import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedCategory: 'general',
      darkMode: false,
    };
  }

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    const { selectedCategory, darkMode } = this.state;

    return (
      <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <NavBar onCategoryChange={this.handleCategoryChange} darkMode={darkMode} />
        <News category={selectedCategory} darkMode={darkMode} />
        <div className="dark-mode-toggle">
         
          
        </div>
      </div>
    );
  }
}
