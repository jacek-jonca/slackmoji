import React, { useState, useEffect } from 'react'
import { arrayOf, bool, func, shape, string } from 'prop-types'
import DisplayButtons from '../components/DisplayButtons'
import SearchField from '../components/SearchField'
import BitmojiSelector from '../components/BitmojiSelector'
import BitmojiList from './BitmojiList'
import NoResults from '../components/NoResults'
import { resetBitmojiId, updateBitmojiId } from '../helpers/url'

const SlackmojiContainer = ( { bitmojis, showSelector, toggleSelector })  => {
  const [bitmojiId, setBitmojiId] = useState(process.env.REACT_APP_BITMOJI_ID)
  const defaultBitmoji = process.env.REACT_APP_BITMOJI_ID === bitmojiId

  useEffect(() => {
    const storedBitmojiId = localStorage.getItem('bitmojiId')
    storedBitmojiId && setBitmojiId(storedBitmojiId)
  }, [])

  const changeBitmojiId = url => {
    const newBitmojiId = url ? updateBitmojiId(url) : resetBitmojiId()
    setBitmojiId(newBitmojiId)
  }

  return (
    <>
      <DisplayButtons/ >
      <SearchField/>
      { showSelector &&
        <BitmojiSelector
          changeBitmojiId={changeBitmojiId}
          defaultBitmoji={defaultBitmoji}
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
