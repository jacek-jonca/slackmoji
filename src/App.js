import React, { Component } from 'react';
import Loader from './components/Loader'
import SlackmojiContainer from './containers/SlackmojiContainer'
import SlackAdapter from './helpers/SlackAdapter'


class App extends Component {
  state = {
    loading: true,
    solo: [],
    friends: []
  }

  componentDidMount() {
    SlackAdapter.getSlackmoji()
      .then(resp => {
        this.setState({
          solo: resp.solo,
          friends: resp.friends,
          loading: false
        })
      })
  }

  render() {
    const {loading} = this.state
    const className = loading ? 'load-screen' : 'container'

    return (
      <div className={className}>
        <div className='header center-text'>
          <h1>
            SlackMoji
          </h1>
          <h3>
            What fun new Bitmojis can I use in Slack?
          </h3>
        </div>
        { loading && <Loader /> }
        <SlackmojiContainer {...this.state} />
      </div>
    )
  }
}

export default App
