import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { sortBySearch } from '../helpers/bitmojiFilters'
import { copyToClipboard, imageSrc } from '../helpers/url'
import { useURLParams } from '../helpers/customHooks'

const BitmojiCard = ({
  bitmojiId,
  bitmoji: { src, tags }
}) => {
  const { display, search } = useURLParams()
  const [count, setCount] = useState(2)
  const sortedTags = sortBySearch(tags, search)
  const displayTags = sortedTags.slice(0, count)
  const moreTags = displayTags.length < sortedTags.length

  const toggleTags = () => {
    setCount(prevCount => prevCount === 2 ? tags.length : 2)
  }

  const handleCopy = ({ target: { dataset: { tag }}}) => {
    copyToClipboard(`/bitmoji ${tag}`)
  }

  return (
    <li className='bitmoji-card' >
      <img src={imageSrc(src, bitmojiId)} alt={`bitmoji ${tags[0]}`}/>
      <ul className='tags'>
        {displayTags.map(tag => (
          <li className='tag' key={tag}>
            <span>
              <Link to={{
                pathname: display,
                hash: `#${encodeURI(tag)}`
                }}>
                {tag}
              </Link>
            </span>
            <span className='tooltip'>
              <img
                onClick={handleCopy}
                data-tag={tag}
                className='icon'
                src='./copy-icon.png'
                alt='copy-icon'
              />
              <span className='tooltip-text'>
                Copy to Clipboard
              </span>
            </span>
          </li>)
        )}
        { moreTags
        ? <li className='tag-arrow' onClick={toggleTags}>
          &#x25BC;
        </li>
        : <li className='tag-arrow' onClick={toggleTags}>
          &#x25B2;
        </li>
        }
      </ul>
    </li>
  )
}

export default memo(BitmojiCard)
