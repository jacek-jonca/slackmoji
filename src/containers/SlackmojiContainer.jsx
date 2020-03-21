import React, { useState, useEffect } from 'react'
import { arrayOf, bool, func, shape, string } from 'prop-types'
import DisplayButtons from '../components/DisplayButtons'
import SearchField from '../components/SearchField'
import BitmojiSelector from '../components/BitmojiSelector'
import BitmojiList from './BitmojiList'
import NoResults from '../components/NoResults'
import { DEFAULT_BITMOJI, getBitmojiId } from '../helpers'

const SlackmojiContainer = ({ bitmojis, showSelector, toggleSelector })  => {
  const [bitmojiId, setBitmojiId] = useState(DEFAULT_BITMOJI)
  const isDefaultBitmoji = DEFAULT_BITMOJI === bitmojiId

  useEffect(() => {
    const storedBitmojiId = localStorage.getItem('bitmojiId')
    storedBitmojiId && setBitmojiId(storedBitmojiId)
  }, [])

  useEffect(() => (
    isDefaultBitmoji ?
      localStorage.removeItem('bitmojiId') :
      localStorage.setItem('bitmojiId', bitmojiId)
  ), [bitmojiId, isDefaultBitmoji])

  const changeBitmojiId = url => setBitmojiId(getBitmojiId(url))

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
