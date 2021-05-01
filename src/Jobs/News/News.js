import React, { Component } from 'react';
import './News.css';
import Search from './Search.js';
import './Search.css';
import Footer from './Footer.js';
import './Footer.css';


class News extends Component {
  render() {
    return (
      <div >
        <Search default="bbc-news" />
      </div>
    );
  }
}

export default News;