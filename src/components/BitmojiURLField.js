import React, { memo, useState } from 'react'
import { validateURL } from '../helpers/url'

const BitmojiURLField = ({
  changeBitmojiId,
  defaultBitmoji,
  toggleURLField
}) => {
  const [url, setUrl] = useState('')
  const btnText = !url && !defaultBitmoji ? 'Reset' : 'Submit'

  const handleChange = ( { target: { value } } ) => {
    validateURL(value) ? setUrl(value) : alert('Please enter a valid Bitmoji URL')
  }

  const handleSubmit = event => {
    event.preventDefault()
    changeBitmojiId(url)
    toggleURLField()
    setUrl('')
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='url-form tooltip flex space-between'
      >
        <input
          className='margin-m grow-1'
          type='text'
          value={url}
          onChange={handleChange}
          placeholder='Enter URL of your Bitmoji image'
        />
        <input className='btn center-self-cross' type='submit' value={btnText}/>
        <div className='tooltip-text tooltip-l flex-container'>
          <p>Ctrl + Click on a Bitmoji in Slack and select 'Copy Link'</p>
          <img src='./copy.gif' alt='tim-statue'/>
        </div>
      </form>
    </>
  )
}

export default memo(BitmojiURLField)
