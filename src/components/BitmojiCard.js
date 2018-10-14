import React, {Component} from 'react'
import {filterTags, imageSrc} from '../helpers/bitmoji'

export default class BitmojiCard extends Component {
  state = {count: 3}

  toggleTags = () => {
    this.setState(prevState => {
      const {count} = prevState
      const {bitmoji: {tags}} = this.props
      const newCount = (count === 3) ? tags.length : 3
      return {count: newCount}
    })
  }

  render() {
    const {bitmoji: {src, tags}} = this.props
    const displayTags = filterTags(tags).slice(0, this.state.count)

    return (
      <li className='bitmoji-card flex-container column' onClick={this.toggleTags}>
        <img src={imageSrc(src)} alt={`bitmoji ${tags[0]}`} />
        <ul className='flex column margin-m'>
          {displayTags.map(tag => <li key={tag}>'{tag}'</li>)}
          {this.state.count === 3 &&
            <li className='center-self-cross font-bold'>. . .</li>
          }
        </ul>
      </li>
    )
  }
}