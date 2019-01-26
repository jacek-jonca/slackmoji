import React, {Component} from 'react'

export default class Loader extends Component {
  state = {index: 0}
  fullText = "Checking on those 'mojis..."

  componentDidMount() {
    this.timeout = setTimeout(this.showText, 60)
  }

  showText = () => {
    if (this.state.index < this.fullText.length) {
      this.setState(prevState => ({index: prevState.index + 1}))
    } else {
      this.setState({index: 0})
    }
    this.timeout = setTimeout(this.showText, 60)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const text = this.fullText.slice(0, this.state.index)
    return (
      <div className='loader flex column center-cross'>
        <img
          src='faces/bitmoji-for-that.png'
          alt='me'
          className='load-image'
        />
        <h2 className='loading-text center-text'>
          {text}
        </h2>
      </div>
    )
  }
}
