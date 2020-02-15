import React, { useState, useEffect } from 'react'
import DisplayControls from '../containers/DisplayControls'
import BitmojiList from './BitmojiList'
import NoResults from '../components/NoResults'
import { resetBitmojiId, updateBitmojiId } from '../helpers/url'

const SlackmojiContainer = ( { bitmojis })  => {
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
      <DisplayControls
        changeBitmojiId={changeBitmojiId}
        defaultBitmoji={defaultBitmoji}
      />
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

export default SlackmojiContainer
