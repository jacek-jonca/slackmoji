import React, {Component} from 'react'
import randomImage from '../helpers/randomImage'

export default class Loader extends Component {
  state = {src: randomImage()}

  componentDidMount() {
    this.interval = setInterval(() => {
      const src = randomImage()
      this.setState({src})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className='loader flex center'>
        <img
          src={this.state.src}
          alt='me'
          className='load-image'
        />
      </div>
    )
  }
}