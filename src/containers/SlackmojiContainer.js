import React, { Fragment, useState, useEffect } from 'react'
import DisplayControls from '../containers/DisplayControls'
import BitmojiList from './BitmojiList'
import NoResults from '../components/NoResults'
import debounce from '../helpers/debounce'
import {filterBitmojis} from '../helpers/bitmojiFilters'
import {getBitmojiId} from '../helpers/bitmojiURLs'

const SlackmojiContainer = (props) => {
  const [display, setDisplay]     = useState('solo')
  const [search, setSearch]       = useState('')
  const [bitmojiId, setBitmojiId] = useState(process.env.REACT_APP_BITMOJI_ID)
  const defaultBitmoji = process.env.REACT_APP_BITMOJI_ID === bitmojiId

  useEffect(() => {
    const storedBitmojiId = localStorage.getItem('bitmojiId')
    storedBitmojiId && setBitmojiId(storedBitmojiId)
  }, [])

  const changeDisplay = ({target: { value }}) => {
    setDisplay(value)
  }
  
  const changeBitmojiId = (url) => {
    const newBitmojiId = url ? updateBitmojiId(url) : resetBitmojiId()
    setBitmojiId(newBitmojiId)
  }
  
  const updateBitmojiId = (url) => {
    const newBitmojiId = getBitmojiId(url)
    localStorage.setItem('bitmojiId', newBitmojiId)
    return newBitmojiId
  }
  
  const resetBitmojiId = () => {
    const newBitmojiId  = process.env.REACT_APP_BITMOJI_ID
    localStorage.removeItem('bitmojiId')
    return newBitmojiId
  }

  const bitmojiResults = () => {
    const bitmojis = props[display]

    if (!search) return bitmojis
    return filterBitmojis(bitmojis, search)
  }

  const bitmojis = bitmojiResults()

  return (
    <Fragment>
      <DisplayControls
        display={display}
        changeDisplay={changeDisplay}
        changeSearch={debounce(setSearch, 500)}
        changeBitmojiId={changeBitmojiId}
        search={search}
        defaultBitmoji={defaultBitmoji}
      />
      { !!bitmojis.length
        ? <BitmojiList
            bitmojis={bitmojis}
            bitmojiId={bitmojiId}
            changeSearch={setSearch}
            search={search}
          />
        : <NoResults />
      }
    </Fragment>
  )
}

export default SlackmojiContainer
