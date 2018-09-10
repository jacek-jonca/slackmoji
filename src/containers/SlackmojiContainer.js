import React, { Component } from 'react'
import DisplayControls from '../components/DisplayControls'
import BitmojiCard from '../components/BitmojiCard'

export default class SlackmojiContainer extends Component {
  state = {
    display: 'solo',
    search: ''
  }

  changeDisplay = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

  filterBitmojis() {
    const {display, search} = this.state
    const bitmojis = this.props[display]

    if (!search) return bitmojis
    return bitmojis.filter(bitmoji => this.matchesSearch(bitmoji, search))
  }

  matchesSearch(bitmoji, search) {
    return bitmoji.tags.some(tag => {
      return tag.toLowerCase().includes(search.toLowerCase())
    })
  }

  render() {
    const bitmojis = this.filterBitmojis()

    return (
      [
        <DisplayControls
          loading={this.props.loading}
          search={this.state.search}
          display={this.state.display}
          changeDisplay={this.changeDisplay}
          key='display-controls'
        />,
        <ul
          className='bitmoji-list flex wrap center'
          key='bitmoji-list'
        >
          {bitmojis.map(bitmoji => (
            <BitmojiCard
              bitmoji={bitmoji}
              key={bitmoji.comic_id}
            />
          ))}
        </ul>
      ]
    )
  }
}