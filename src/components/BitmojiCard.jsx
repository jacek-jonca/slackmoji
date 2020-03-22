import React, { memo, useState } from 'react'
import { arrayOf, shape, string } from 'prop-types'

import BitmojiTag from './BitmojiTag'
import {
  imageSrc,
  sortBySearch,
  useUrlParams
} from '../helpers'


const BitmojiCard = ({
  bitmoji: { alt_text, src, tags },
  bitmojiId
}) => {
  const [count, setCount] = useState(2)
  const { search } = useUrlParams()
  const sortedTags = sortBySearch(tags, search)
  const displayTags = sortedTags.slice(0, count)
  const moreTags = displayTags.length < sortedTags.length

  const toggleTags = () => {
    setCount(prevCount => prevCount === 2 ? tags.length : 2)
  }

  return (
    <li className='bitmoji-card' >
      <img src={imageSrc(src, bitmojiId)} alt={alt_text}/>
      <ul className='tags'>
        {displayTags.map(tag =>
          <BitmojiTag tag={tag} key={tag} />
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
