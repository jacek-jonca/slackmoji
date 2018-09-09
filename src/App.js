import React, { Component } from 'react';
import SlackmojiContainer from './containers/SlackmojiContainer'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1>
            SlackMoji
          </h1>
          <h3>
            What fun new Bitmojis can I use in Slack?
          </h3>
        </div>
        <SlackmojiContainer />
      </div>
    );
  }
}

export default App;
