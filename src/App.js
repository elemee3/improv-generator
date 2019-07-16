import React, { Component } from 'react';
import './App.css';

import emotions from './emotions';
import relationships from './relationships';
import settings from './settings';

import emotionsImg from './emotions_img.png';
import relationshipsImg from './relationships_img.png';
import locationsImg from './locations_img.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: 'Emotion',
      relationship: 'Relationship',
      setting: 'Setting'
    };
  }

  generate = () => {
    let randomEmotionIndex = Math.floor(Math.random() * emotions.length);
    let randomRelationshipIndex = Math.floor(Math.random() * relationships.length);
    let randomSettingIndex = Math.floor(Math.random() * settings.length);
    this.setState({
      emotion: emotions[randomEmotionIndex],
      relationship: relationships[randomRelationshipIndex],
      setting: settings[randomSettingIndex]
    });
  };

  render() {
    return (
      <div className="app">
        <header className="header">
            <h1>Improv Generator</h1>
        </header>
        <div className="body">
          <button className="generate-button" onClick={this.generate}>Generate</button>
          <div className="category emotions">
            <img src={emotionsImg} width="100px" />
            <h2 className="category-text">{this.state.emotion}</h2>
          </div>
          <div className="category relationships">
            <h2 className="category-text">{this.state.relationship}</h2>
            <img src={relationshipsImg} width="100px" />
          </div>
          <div className="category settings">
            <img src={locationsImg} width="100px" />
            <h2 className="category-text">{this.state.setting}</h2>
          </div>
        </div>
        <div className="footer">
          <p>Leila M. Elshamy 2019</p>
        </div>
      </div>
    );
  }
}


export default App;
