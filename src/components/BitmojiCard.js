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

  handleSearch = ({target}) => {
    const search = target.innerText.replace(/"/g, '')
    this.props.changeSearch(search)
  }

  handleCopy = ({target: {dataset: {tag}}}) => {
    navigator.permissions.query({name: "clipboard-write"})
    .then(result => {
      if (result.state == "granted" || result.state == "prompt") {
        navigator.clipboard.writeText(`/bitmoji ${tag}`)
      }
    })
  }

  render() {
    const {search, bitmojiId, bitmoji: {src, tags}} = this.props
    const sortedTags = sortBySearch(tags, search)
    const displayTags = sortedTags.slice(0, this.state.count)
    const moreTags = displayTags.length < sortedTags.length

    return (
      <li className='bitmoji-card flex-container column' >
        <img src={imageSrc(src, bitmojiId)} alt={`bitmoji ${tags[0]}`}/>
        <ul className='tags flex column margin-m'>
          {displayTags.map(tag => (
            <li className='flex space-between' key={tag}>
              <span onClick={this.handleSearch}>
                {tag}
              </span>
              <span onClick={this.handleCopy} className='tooltip'>
                <img className='icon' src='./copy-icon.png' data-tag={tag} />
                <span className='tooltip-text tooltip-s'>
                Copy to Clipboard
                </span>
              </span>
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