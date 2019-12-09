import React from 'react'
import {copyToClipboard} from '../helpers/browser'

const Header = () => {
  const handleClick = () => {
    copyToClipboard(window.location)
  }

  return (
    <div className='header center-text'>
      <h1>
        SlackMoji
      </h1>
      <div className='flex'>
      <h3>
        What fun new Bitmojis can I use in Slack?
      </h3>
      <button className='btn' onClick={handleClick}>
        Copy URL
      </button>
      </div>
    </div>
  )
}

export default Header
