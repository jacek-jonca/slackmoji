import React, { Component } from 'react';
import Loader from './components/Loader'
import SlackmojiContainer from './containers/SlackmojiContainer'
import SlackAdapter from './helpers/SlackAdapter'


class App extends Component {
  state = {
    loading: true,
    solo: [],
    friends: [],
    gridClass: 'load-screen'
  }

  componentDidMount() {
    SlackAdapter.getSlackmoji()
      .then(resp => {
        this.setState({
          solo: resp.solo,
          friends: resp.friends,
          loading: false,
          gridClass: 'container'
        })
      })
  }

  changeGrid = (gridClass) => {
    this.setState({gridClass})
  }

  render() {
    const {loading, solo, friends} = this.state

    return (
      <div className={this.state.gridClass}>
        <div className='header center-text'>
          <h1>
            SlackMoji
          </h1>
          <h3>
            What fun new Bitmojis can I use in Slack?
          </h3>
        </div>
        { loading
          ? <Loader />
          : <SlackmojiContainer
              solo={solo}
              friends={friends}
              changeGrid={this.changeGrid}
            />
        }
      </div>
    )
  }
}

export default App
