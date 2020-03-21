import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { arrayOf, shape, string } from 'prop-types'
import { sortBySearch } from '../helpers/bitmojiFilters'
import { canCopy, copyToClipboard } from '../helpers/url'
import { useUrlParams } from '../helpers/customHooks'

const BitmojiCard = ({
  bitmoji: { alt_text, src, tags },
  bitmojiId
}) => {
  const { display, search } = useUrlParams()
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

  const imageSrc = (src, bitmojiId) => src.replace(/%s/g, bitmojiId).concat('&width=200')

  return (
    <li className='bitmoji-card' >
      <img src={imageSrc(src, bitmojiId)} alt={alt_text}/>
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
            <span className={canCopy() ? 'tooltip' : 'hide'}>
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
      </ul>
      { moreTags
      ? <div className='tag-arrow' onClick={toggleTags}>
        &#x25BC;
      </div>
      : <div className='tag-arrow' onClick={toggleTags}>
        &#x25B2;
      </div>
      }
    </li>
  )
}

BitmojiCard.propTypes = {
  bitmoji: shape({
    alt_text: string,
    comic_id: string,
    src: string,
    tags: arrayOf(
      string
    )
  }).isRequired,
  bitmojiId: string.isRequired
}

export default memo(BitmojiCard)
