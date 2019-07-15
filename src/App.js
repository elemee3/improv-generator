import React, { Component } from 'react';
import './App.css';
import emotions from './emotions';
import relationships from './relationships';
import settings from './settings';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: '',
      relationship: '',
      setting: ''
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
          <div className="category">
            Emotion: {this.state.emotion}
          </div>
          <div className="category">
            Relationship: {this.state.relationship}
          </div>
          <div className="category">
            Setting: {this.state.setting}
          </div>
        </div>
      </div>
    );
  }
}


export default App;
