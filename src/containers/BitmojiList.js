import React, { useState, useEffect } from 'react'
import BitmojiCard from '../components/BitmojiCard'

const BitmojiList = ({
  bitmojis,
  bitmojiId,
  changeSearch,
  search
}) => {
  const [count, setCount] = useState(100)
  const scrollY = 0
  const slicedBitmojis = bitmojis.slice(0, count)
  
  useEffect(() => {
    addScrollListener()
    return removeScrollListener
  }, [])

  const addScrollListener = () => {
    document.addEventListener('scroll', loadMoreItems)
  }

  const removeScrollListener = () => {
    document.removeEventListener('scroll', loadMoreItems)
  }

  const loadMoreItems = () => {
    const moreBitmojis = count < bitmojis.length
    const scrollDown = window.pageYOffset || document.documentElement.scrollTop

    if (moreBitmojis && (scrollY < scrollDown)) {
      setCount(prevCount => prevCount + 50)
    }
  }

  return (
    <ul className='bitmoji-list flex wrap center'>
      { slicedBitmojis.map(b => (
        <BitmojiCard
          bitmoji={b}
          bitmojiId={bitmojiId}
          changeSearch={changeSearch}
          search={search}
          key={b.comic_id}
        />)
      )}
    </ul>
  )
}

export default BitmojiList
