import React, { memo, useState } from 'react'
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
    <div className='bitmoji-selector tooltip flex space-between' >
      <input
        className='margin-m grow-1'
        type='text'
        value={url}
        onChange={handleChange}
        placeholder='Enter URL of your Bitmoji image'
        aria-label="bitmoji selector"
      />
      <button className='btn margin-m' onClick={handleSubmit}>{ btnText }</button>
      <div className='tooltip-text tooltip-l flex-container'>
        <p>Ctrl + Click on a Bitmoji in Slack and select 'Copy Link'</p>
        <img src='./copy.gif' alt='tim-statue'/>
      </div>
    </div>
  )
}

export default memo(BitmojiSelector)
