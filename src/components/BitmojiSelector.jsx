import React, { memo, useState } from 'react'
import { func, string } from 'prop-types'
import { validateURL } from '../helpers/url'

const BitmojiSelector = ({
  changeBitmojiId,
  defaultBitmoji,
  toggleSelector
}) => {
  const [url, setUrl] = useState('')
  const btnText = !url && !defaultBitmoji ? 'Reset' : 'Submit'

  const handleChange = ( { target: { value } } ) => {
    validateURL(value) ? setUrl(value) : alert('Please enter a valid Bitmoji URL')
  }

  const handleSubmit = event => {
    changeBitmojiId(url)
    toggleSelector()
    setUrl('')
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
      <button className='btn' onClick={handleSubmit}>{ btnText }</button>
      <div className='tooltip-text'>
        <p>Copy Bitmoji link from Slack and paste here</p>
        <img src='./copy.gif' alt='tim-statue'/>
      </div>
    </div>
  )
}

BitmojiSelector.propTypes = {
  changeBitmojiId: func.isRequired,
  defaultBitmoji: string.isRequired,
  toggleSelector: func.isRequired
}

export default memo(BitmojiSelector)
