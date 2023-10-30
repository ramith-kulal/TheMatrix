import React, { Component } from 'react';

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      darkMode: false,
    };
  }

  handleCategoryChange = (category) => {
    this.props.onCategoryChange(category);
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    const { darkMode } = this.state;

    return (
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
        <div className="container-fluid">
          <a className={`navbar-brand ${darkMode ? 'text-light' : 'text-dark'}`} href="/">
            The Matrix
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  onClick={() => this.handleCategoryChange('general')}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => this.handleCategoryChange('entertainment')}
                >
                  Entertainment
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => this.handleCategoryChange('sports')}
                >
                  Sports
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => this.handleCategoryChange('business')}
                >
                  Business
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => this.handleCategoryChange('technology')}
                >
                  Technology
                </button>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeToggle"
                checked={darkMode}
                onChange={this.toggleDarkMode}
              />
              <label className={`form-check-label ${darkMode ? 'text-light' : 'text-dark'}`} htmlFor="darkModeToggle">
                {darkMode ? 'Dark Mode' : 'Light Mode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
