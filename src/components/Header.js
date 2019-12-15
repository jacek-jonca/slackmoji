import React from 'react'
import {copyToClipboard} from '../helpers/url'

const Header = () => {
  const handleClick = () => copyToClipboard(window.location)

  return (
    <div className='header center-text'>
      <div className='flex margin-ta'>
        <button className='btn btn-sm' onClick={handleClick}>
          Copy URL
        </button>
      </div>
      <h1>
        SlackMoji
      </h1>
      <h3>
        What fun new Bitmojis can I use in Slack?
      </h3>
    </div>
  )
}

export default Header
