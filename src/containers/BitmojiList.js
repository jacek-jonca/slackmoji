import React from 'react'
import BitmojiCard from '../components/BitmojiCard'

export default ({bitmojis}) => {
  const headBitmojis = bitmojis.slice(0, 100)
  const tailBitmojis = bitmojis.slice(100, bitmojis.length)

  return (
    <ul
      className='bitmoji-list flex wrap center'
      key='bitmoji-list'
    >
      { headBitmojis.map(b => <BitmojiCard bitmoji={b} key={b.comic_id} />) }
      { tailBitmojis.map(b => <BitmojiCard bitmoji={b} key={b.comic_id} hidden />) }
    </ul>
  )
}