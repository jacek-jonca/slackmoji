import React, { Component } from 'react'
import BitmojiCard from '../components/BitmojiCard'
import DisplayRadio from '../components/DisplayRadio'
import SearchField from '../components/SearchField'
import SlackAdapter from '../helpers/SlackAdapter'
import Debounce from '../helpers/Debounce'

export default class SlackmojiContainer extends Component {
  state = {
    solo: [],
    friends: [],
    display: 'solo',
    search: ''
  }

  componentDidMount() {
    SlackAdapter.getSlackmoji()
      .then(resp => {
        this.setState({
          solo: resp.solo,
          friends: resp.friends
        })
      })
  }

  changeDisplay = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

  filterBitmojis() {
    const {display, search} = this.state
    const bitmojis = this.state[display]

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

    return [
      <DisplayRadio
        display={this.state.display}
        changeDisplay={this.changeDisplay}
        key='radio'
      />,
      <SearchField
        search={this.state.search}
        changeDisplay={Debounce(
          this.changeDisplay,
          500)
        }
        key='search'
        />,
        <ul className='bitmoji-list flex wrap center' key='bitmoji-list'>
          {bitmojis.map(bitmoji => (
            <BitmojiCard
              bitmoji={bitmoji}
              key={bitmoji.comic_id}
            />
          ))}
        </ul>
    ]
  }
}