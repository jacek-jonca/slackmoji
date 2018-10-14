import React, {Component} from 'react'
import {filterTags, imageSrc} from '../helpers/bitmoji'

export default class BitmojiCard extends Component {
  state = {count: 2}

  toggleTags = () => {
    this.setState(prevState => {
      const {count} = prevState
      const {bitmoji: {tags}} = this.props
      const newCount = (count === 2) ? tags.length : 2
      return {count: newCount}
    })
  }

  render() {
    const {bitmoji: {src, tags}} = this.props
    const filteredTags = filterTags(tags)
    const displayTags = filteredTags.slice(0, this.state.count)

    return (
      <li className='bitmoji-card flex-container column' onClick={this.toggleTags}>
        <img src={imageSrc(src)} alt={`bitmoji ${tags[0]}`} />
        <ul className='flex column margin-m'>
          {displayTags.map(tag => <li key={tag}>"{tag}"</li>)}
          {displayTags.length < filteredTags.length &&
            <li className='center-self-cross font-bold'>. . .</li>
          }
        </ul>
      </li>
    )
  }
}