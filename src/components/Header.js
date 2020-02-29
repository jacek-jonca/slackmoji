import React, { memo } from 'react'
import { copyToClipboard } from '../helpers/url'

const Header = ({ showSelector, toggleSelector } ) => {
  const handleClick = () => copyToClipboard(window.location)

  return (
    <div className='header center-text margin-ta'>
      <div className='flex space-between'>
        <button className='margin-m btn' onClick={handleClick}>
          Copy URL
        </button>
        <div className='margin-m'>
          <h1>Slackmoji</h1>
          <h3>What fun new Bitmojis can I use in Slack?</h3>
        </div>
        <button className='margin-m btn' onClick={toggleSelector}>
          { showSelector ? 'Hide Bitmoji Selector' : 'Use My Bitmoji' }
        </button>
      </div>
    </div>
  )
}

export default memo(Header)
