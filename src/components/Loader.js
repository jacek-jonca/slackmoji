import React, {Component} from 'react'

export default class Loader extends Component {
  state = {text: ''}

  componentDidMount() {
    this.i = 0
    this.text = "Checking on those 'mojis..."
    this.showText()
  }

  showText = () => {
    const {i, text} = this
    if (i < text.length) {
      setTimeout(this.showText, 60)
      this.setState((prevState) => ({text: prevState.text + text.charAt(i)}),
      () => this.i = i+1
    )}
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