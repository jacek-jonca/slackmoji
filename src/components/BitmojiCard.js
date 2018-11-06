import React, {Component} from 'react'
import {sortBySearch, imageSrc} from '../helpers/bitmoji'

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

  handleClick = (e) => {
    const search = e.target.innerText.replace(/"/g, '')
    this.props.changeSearch(search)
  }

  render() {
    const {search, bitmojiId, bitmoji: {src, tags}} = this.props
    const sortedTags = sortBySearch(tags, search)
    const displayTags = sortedTags.slice(0, this.state.count)
    const moreTags = displayTags.length < sortedTags.length
    console.log(bitmojiId);
    return (
      <li className='bitmoji-card flex-container column' >
        <img src={imageSrc(src, bitmojiId)} alt={`bitmoji ${tags[0]}`}/>
        <ul className='tags flex column margin-m'>
          {displayTags.map(tag => (
            <li key={tag} onClick={this.handleClick}>
              {tag}
            </li>)
          )}
          { moreTags
            ? <li className='center-self-cross margin-ta' onClick={this.toggleTags}>
              &#x25BC;
            </li>
            : <li className='center-self-cross margin-ta' onClick={this.toggleTags}>
              &#x25B2;
            </li>
          }
        </ul>
      </li>
    )
  }
}