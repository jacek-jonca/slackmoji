import React from 'react'
import BitmojiCard from '../components/BitmojiCard'

export default ({bitmojis}) => {
  const bitmojiList = bitmojis.map(b => <BitmojiCard bitmoji={b} key={b.comic_id} />)

  return (
    <ul
      className='bitmoji-list flex wrap center'
      key='bitmoji-list'
    >
      {bitmojiList}
    </ul>
  )
}