import React from 'react'
import BitmojiCard from '../components/BitmojiCard'

export default ({bitmojis}) => {
  return (
    <ul
      className='bitmoji-list flex wrap center'
      key='bitmoji-list'
    >
      { bitmojis.map(b => <BitmojiCard bitmoji={b} key={b.comic_id} />) }
    </ul>
  )
}