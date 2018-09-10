import React, { Component } from 'react'
import DisplayControls from '../components/DisplayControls'
import BitmojiResults from './BitmojiResults'

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
    const noResults = !this.props.loading && !bitmojis.length

    return (
      [
        <DisplayControls
          loading={this.props.loading}
          display={this.state.display}
          changeDisplay={this.changeDisplay}
          key='display-controls'
        />,
        <BitmojiResults
          noResults={noResults}
          bitmojis={bitmojis}
        />
      ]
    )
  }
}