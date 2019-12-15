import React, { useState } from 'react'
import {sortBySearch} from '../helpers/bitmojiFilters'
import {copyToClipboard, imageSrc} from '../helpers/url'

const BitmojiCard = ({
  bitmojiId,
  bitmoji: {src, tags},
  changeSearch,
  search
}) => {
  const [count, setCount] = useState(2)
  const sortedTags = sortBySearch(tags, search)
  const displayTags = sortedTags.slice(0, count)
  const moreTags = displayTags.length < sortedTags.length

  const toggleTags = () => {
    setCount(prevCount => prevCount === 2 ? tags.length : 2)
  }

  const handleSearch = ({target}) => {
    const search = target.innerText.replace(/"/g, '')
    changeSearch(search)
  }

  const handleCopy = ({target: {dataset: {tag}}}) => {
    copyToClipboard(`/bitmoji ${tag}`)
  }

  return (
    <li className='bitmoji-card flex-container column' >
      <img src={imageSrc(src, bitmojiId)} alt={`bitmoji ${tags[0]}`}/>
      <ul className='tags flex column margin-m'>
        {displayTags.map(tag => (
          <li className='flex space-between' key={tag}>
            <span onClick={handleSearch}>
              {tag}
            </span>
            <span className='tooltip'>
              <img
                onClick={handleCopy}
                data-tag={tag}
                className='icon'
                src='./copy-icon.png'
                alt='copy-icon'
              />
              <span className='tooltip-text tooltip-s'>
                Copy to Clipboard
              </span>
            </span>
          </li>)
        )}
        { moreTags
          ? <li className='center-self-cross margin-ta' onClick={toggleTags}>
            &#x25BC;
          </li>
          : <li className='center-self-cross margin-ta' onClick={toggleTags}>
            &#x25B2;
          </li>
        }
      </ul>
    </li>
  )
}

export default BitmojiCard
