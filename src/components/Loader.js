import React, {Component} from 'react'

export default class Loader extends Component {
  state = {text: ''}

  componentDidMount() {
    this.i = 0
    this.text = "Checking on those 'mojis..."
    this.showText()
  }

  showText = () => {
    if (this.i < this.text.length) {
      this.incrementLetter()
      this.timeout = setTimeout(this.showText, 60)
    }
  }

  incrementLetter = () => {
    this.setState(prevState => {
      const text = prevState.text + this.text.charAt(this.i)
      return {text}
    }, () => this.i = this.i+1)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <div className='loader flex column center-cross'>
        <div>
          <img
          src='faces/heart-ring.png'
          alt='me'
          className='load-image'
          />
        </div>
        <h2 className='loading-text center-text'>
          {this.state.text}
        </h2>
      </div>
    )
  }
}