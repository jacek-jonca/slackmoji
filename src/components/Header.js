import React, { memo } from 'react'
import { copyToClipboard } from '../helpers/url'

const Notice = memo(() => (
  <div className='flex column grow-1 notice-margin'>
    <div>Deprecation Notice: this website has been relocated to <a href='https://slackmoji.netlify.com/'>https://slackmoji.netlify.com/</a>.</div>
    <div>Please adjust your bookmarks as this url will be removed as of June 1, 2020.</div>
  </div>
))

const Header = ({ showSelector, toggleSelector } ) => {
  const handleClick = () => copyToClipboard(window.location)

  const showNotice = !!window.location.host.match('firebaseapp.com')

  return (
    <div className='header center-text'>
      <div className='flex space-between margin-ta'>
        <button className='margin-m btn' onClick={handleClick}>
          Copy URL
        </button>
        { showNotice && <Notice /> }
        <button className='margin-m btn' onClick={toggleSelector}>
          { showSelector ? 'Hide Bitmoji Selector' : 'Use My Bitmoji' }
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

export default memo(Header)
