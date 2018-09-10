import React from 'react'
import BitmojiList from './BitmojiList'
import NoResults from '../components/NoResults'

export default ({noResults, bitmojis}) => {
  return (
    noResults ?
      <NoResults /> :
      <BitmojiList bitmojis={bitmojis} />
  )
}