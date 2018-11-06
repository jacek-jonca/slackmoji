import React, {Component, Fragment} from 'react'

export default class BitmojiURLField extends Component {
  state = {url: ''}

  handleChange = ({target: {value}}) => {
    this.setState({url: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.changeBitmojiId(this.state.url)
    this.props.toggleURLField()
    this.setState({url: ''})
  }

  render() {
    return (
      <Fragment>
        <form
        onSubmit={this.handleSubmit}
        className='url-form flex space-between'
        >
          <input
          className='margin-m grow-1'
          type='text'
          value={this.state.url}
          onChange={this.handleChange}
          placeholder='Enter URL of any image starring your Bitmoji'
          />
          <input className='btn center-self-cross' type='submit'/>
        </form>
      </Fragment>
    )
  }
}