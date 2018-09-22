import React, { Component } from 'react'
import DisplayControls from '../containers/DisplayControls'
import BitmojiList from './BitmojiList'
import NoResults from '../components/NoResults'

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
    const results = !bitmojis.length ? <NoResults key='no-results' /> : <BitmojiList bitmojis={bitmojis} key='bitmoji-list' />

    return (
      [
        <DisplayControls
          display={this.state.display}
          changeDisplay={this.changeDisplay}
          key='display-controls'
        />,
        results
      ]
    )
  }
}