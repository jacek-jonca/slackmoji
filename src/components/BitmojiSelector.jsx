import React, { memo, useState } from 'react'
import { bool, func } from 'prop-types'
import { validateUrl } from '../helpers'

const BitmojiSelector = ({
  changeBitmojiId,
  isDefaultBitmoji,
  toggleSelector
}) => {
  const [url, setUrl] = useState('')
  const btnText = !url && !isDefaultBitmoji ? 'Reset' : 'Submit'

  const handleChange = ( { target: { value } } ) => setUrl(value)

  const handleSubmit = event => {
    if (validateUrl(url)) {
      changeBitmojiId(url)
      toggleSelector()
      setUrl('')
    } else {
     alert('Please enter a valid Bitmoji URL')
   }
  }

  return (
    <div className='bitmoji-selector tooltip' >
      <input
        type='text'
        value={url}
        onChange={handleChange}
        placeholder='Enter URL of your Bitmoji image'
        aria-label="bitmoji selector"
      />
      <button className='btn' onClick={handleSubmit}>{btnText}</button>
      <div className='tooltip-text'>
        <p>Copy Bitmoji link from Slack and paste here</p>
        <img src='./copy.gif' alt='tim-statue'/>
      </div>
    </div>
  )
}

BitmojiSelector.propTypes = {
  changeBitmojiId: func.isRequired,
  isDefaultBitmoji: bool.isRequired,
  toggleSelector: func.isRequired
}

export default memo(BitmojiSelector)
