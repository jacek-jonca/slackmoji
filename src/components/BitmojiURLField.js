import React, {Component, Fragment} from 'react'
import {validateURL} from '../helpers/bitmojiURLs'

export default class BitmojiURLField extends Component {
  state = {url: ''}

  handleChange = ({target: {value}}) => {
    if (validateURL(value)) {
      this.setState({url: value})
    } else {
      alert('Please enter a valid Bitmoji URL')
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.changeBitmojiId(this.state.url)
    this.props.toggleURLField()
    this.setState({url: ''})
  }

  buttonText = () => {
    if (!this.state.url && !this.props.defaultBitmoji) {
      return 'Reset'
    }
    return 'Submit'
  }

  render() {
    const btnText = this.buttonText()
    return (
      <Fragment>
        <form
          onSubmit={this.handleSubmit}
          className='url-form tooltip flex space-between'
        >
          <input
            className='margin-m grow-1'
            type='text'
            value={this.state.url}
            onChange={this.handleChange}
            placeholder='Enter URL of any image starring your Bitmoji'
          />
          <input className='btn center-self-cross' type='submit' value={btnText}/>
          <span className='tooltip-text tooltip-l'>
            Ctrl + Click on a Bitmoji in Slack<br/>
            and select 'Copy Link'
            <img src='./copy.gif' alt='tim-statue'/>
          </span>
        </form>
      </Fragment>
    )
  }
}