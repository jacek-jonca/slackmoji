import React, { Component } from 'react'
import BitmojiCard from '../components/BitmojiCard'
import DisplayFilter from '../components/DisplayFilter'
import SlackAdapter from '../helpers/SlackAdapter'

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

  changeDisplay = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  filteredBitmojis = () => {
    const {display, search} = this.state
    const bitmojis = this.state[display]
    return !!search ? bitmojis.filter(bitmoji => this.matchingTag(bitmoji, search)) : bitmojis
  }

  matchingTag = (bitmoji, search) => {
    return bitmoji.tags.some(tag => {
      return tag.toLowerCase().includes(search.toLowerCase())
    })
  }

  render() {
    const bitmojis = this.filteredBitmojis()

    return (
      <div>
        <DisplayFilter
          display={this.state.display}
          changeDisplay={this.changeDisplay}
        />
        <ul className='flex-container wrap center'>
          {bitmojis.map(bitmoji => (
            <BitmojiCard
              bitmoji={bitmoji}
              key={bitmoji.comic_id}
            />
          ))}
        </ul>
      </div>
    )
  }
}