import React, { Component } from 'react';
import Loader from './components/Loader'
import SlackmojiContainer from './containers/SlackmojiContainer'

class App extends Component {
  state = {
    loading: true
  }

  stopLoading = () => {
    this.setState({loading: false})
  }

  render() {
    const {loading} = this.state
    const className = loading ? 'load-screen' : 'container'

    return (
      <div className={className}>
        <div className='header'>
          <h1>
            SlackMoji
          </h1>
          <h3>
            What fun new Bitmojis can I use in Slack?
          </h3>
        </div>
        { loading && <Loader /> }
        <SlackmojiContainer
          loading={this.state.loading}
          stopLoading={this.stopLoading}
          solo={this.state.solo}
          friends={this.state.friends}
        />
      </div>
    )
  }
}

export default App
