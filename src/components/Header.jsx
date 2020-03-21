import React, { memo } from 'react'
import { bool, func } from 'prop-types'
import { canCopy, copyToClipboard, useScreenResize } from '../helpers'

const Header = ({ showSelector, toggleSelector } ) => {
  const handleClick = () => copyToClipboard(window.location)
  const isMobile = useScreenResize()
  const hide = isMobile || !canCopy()

  return (
    <div className='header' style={hide ? {justifyContent: 'center'} : null}>
      <button className={hide ? 'hide' : 'btn'} onClick={handleClick}>
        Copy URL
      </button>
      <div>
        <h1>Slackmoji</h1>
        <h3 className={isMobile ? 'hide' : ''}>
          What fun new Bitmojis can I use in Slack?
        </h3>
      </div>
      <button className={hide ? 'hide' : 'btn'} onClick={toggleSelector}>
        { showSelector ? 'Hide Bitmoji Selector' : 'Use My Bitmoji' }
      </button>
    </div>
  )
}

Header.propTypes = {
  showSelector: bool.isRequired,
  toggleSelector: func
}

export default memo(Header)
