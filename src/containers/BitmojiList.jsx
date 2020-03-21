import React, { memo, useState } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import BitmojiCard from '../components/BitmojiCard'
import { useScrollListeners } from '../helpers'

const BitmojiList = ({
  bitmojiId,
  bitmojis
}) => {
  const [count, setCount] = useState(100)
  const scrollY = 0
  const slicedBitmojis = bitmojis.slice(0, count)

  const loadMoreItems = () => {
    const moreBitmojis = count < bitmojis.length
    const scrollDown = window.pageYOffset || document.documentElement.scrollTop

    if (moreBitmojis && (scrollY < scrollDown)) {
      setCount(prevCount => prevCount + 50)
    }
  }

  useScrollListeners(loadMoreItems)

  return (
    <ul className='bitmoji-list'>
      { slicedBitmojis.map(b => (
        <BitmojiCard
          bitmoji={b}
          bitmojiId={bitmojiId}
          key={b.comic_id}
        />)
      )}
    </ul>
  )
}

BitmojiList.propTypes = {
  bitmojiId: string.isRequired,
  bitmojis: arrayOf(
    shape({
      alt_text: string,
      comic_id: string,
      src: string,
      tags: arrayOf(
        string
      )
    })
  ).isRequired,
}

export default memo(BitmojiList)
