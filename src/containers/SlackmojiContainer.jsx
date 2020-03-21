import React, { useState, useEffect } from 'react'
import { arrayOf, bool, func, shape, string } from 'prop-types'
import DisplayButtons from '../components/DisplayButtons'
import SearchField from '../components/SearchField'
import BitmojiSelector from '../components/BitmojiSelector'
import BitmojiList from './BitmojiList'
import NoResults from '../components/NoResults'
import { getBitmojiId } from '../helpers/url'

const SlackmojiContainer = ({ bitmojis, showSelector, toggleSelector })  => {
  const defaultBitmoji = process.env.REACT_APP_BITMOJI_ID
  const [bitmojiId, setBitmojiId] = useState(defaultBitmoji)
  const isDefaultBitmoji = defaultBitmoji === bitmojiId

  useEffect(() => {
    const storedBitmojiId = localStorage.getItem('bitmojiId')
    storedBitmojiId && setBitmojiId(storedBitmojiId)
  }, [])

  useEffect(() => (
    isDefaultBitmoji ?
      localStorage.removeItem('bitmojiId') :
      localStorage.setItem('bitmojiId', bitmojiId)
  ), [bitmojiId, isDefaultBitmoji])

  const changeBitmojiId = url => {
    const newBitmojiId = url ? getBitmojiId(url) : defaultBitmoji
    setBitmojiId(newBitmojiId)
  }

  return (
    <>
      <DisplayButtons/ >
      <SearchField/>
      { showSelector &&
        <BitmojiSelector
          changeBitmojiId={changeBitmojiId}
          isDefaultBitmoji={isDefaultBitmoji}
          toggleSelector={toggleSelector}
        />
      }
        { bitmojis.length
          ? <BitmojiList
              bitmojiId={bitmojiId}
              bitmojis={bitmojis}
            />
          : <NoResults />
        }
    </>
  )
}

SlackmojiContainer.propTypes = {
  bitmojis: arrayOf(
    shape({
      alt_text: string,
      comic_id: string,
      src: string,
      tags: arrayOf(
        string
      )
    })
  ),
  showSelector: bool.isRequired,
  toggleSelector: func.isRequired
}

SlackmojiContainer.defaultProps = {
  bitmojis: []
}

export default SlackmojiContainer
