import React, { memo, useState } from 'react'
import { useScrollListeners } from '../helpers/customHooks'
import BitmojiCard from '../components/BitmojiCard'

const BitmojiList = ({
  bitmojis,
  bitmojiId
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

export default memo(BitmojiList)
